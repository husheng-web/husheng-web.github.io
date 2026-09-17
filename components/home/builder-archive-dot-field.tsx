"use client";

import { useEffect, useRef } from "react";

import { useMotionSettings } from "@/components/motion/use-motion-settings";

const maxPixelRatio = 2;

const vertexSource = `
attribute vec2 aPosition;

void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const fragmentSource = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uPixelRatio;
uniform float uCell;
uniform vec2 uPointer;
uniform float uPointerActive;
uniform float uPointerRadius;
uniform vec3 uBackground;
uniform vec3 uBase;
uniform vec3 uAccent;
uniform vec3 uHighlight;

void main() {
  float cell = max(uCell, 2.0);
  vec2 cellIndex = floor(gl_FragCoord.xy / cell);
  vec2 cellCenter = (cellIndex + 0.5) * cell;

  float x = cellCenter.x / uPixelRatio;
  float y = (uResolution.y - cellCenter.y) / uPixelRatio;
  float width = uResolution.x / uPixelRatio;
  float height = uResolution.y / uPixelRatio;
  float normalizedX = (x / width) * 2.0 - 1.0;

  float arcY = height * 0.5;
  float intensity = max(0.0, 1.0 - abs(y - arcY) / max(height * 0.44, 1.0));
  float horizontalWave = sin(normalizedX * 4.0 - uTime * 1.5) * 0.1;
  float verticalWave = cos(y * 0.01 + uTime) * 0.1;
  float pointerGlow = uPointerActive * smoothstep(uPointerRadius, 0.0, distance(vec2(x, y), uPointer)) * 0.8;

  intensity = clamp(intensity + horizontalWave + verticalWave + pointerGlow, 0.0, 1.0);

  vec3 color = uBackground;
  if (intensity > 0.01) {
    float pixelSide = cell * 0.76;
    vec2 distanceToCenter = abs(gl_FragCoord.xy - cellCenter);
    float coverage = 1.0 - smoothstep(
      pixelSide * 0.5 - 0.32,
      pixelSide * 0.5 + 0.32,
      max(distanceToCenter.x, distanceToCenter.y)
    );

    float core = intensity * intensity * intensity;
    float mid = pow(intensity, 1.5);
    vec3 energy = uBase * intensity * 0.4 + uAccent * mid + uHighlight * core * 0.25;
    color = mix(uBackground, clamp(energy, 0.0, 1.0), coverage * intensity);
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

interface PointerState {
  active: number;
  targetActive: number;
  targetX: number;
  targetY: number;
  x: number;
  y: number;
}

function compileShader(
  context: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = context.createShader(type);
  if (!shader) return null;

  context.shaderSource(shader, source);
  context.compileShader(shader);

  if (context.getShaderParameter(shader, context.COMPILE_STATUS)) return shader;

  console.error(
    "Builder archive pixel field shader:",
    context.getShaderInfoLog(shader),
  );
  context.deleteShader(shader);
  return null;
}

function createProgram(context: WebGLRenderingContext): WebGLProgram | null {
  const vertexShader = compileShader(context, context.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(
    context,
    context.FRAGMENT_SHADER,
    fragmentSource,
  );
  if (!vertexShader || !fragmentShader) return null;

  const program = context.createProgram();
  if (!program) return null;

  context.attachShader(program, vertexShader);
  context.attachShader(program, fragmentShader);
  context.linkProgram(program);
  context.deleteShader(vertexShader);
  context.deleteShader(fragmentShader);

  if (context.getProgramParameter(program, context.LINK_STATUS)) return program;

  console.error(
    "Builder archive pixel field program:",
    context.getProgramInfoLog(program),
  );
  context.deleteProgram(program);
  return null;
}

export function BuilderArchiveDotField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { prefersReducedMotion } = useMotionSettings();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
    });
    if (!container || !canvas || !context) return;

    const program = createProgram(context);
    if (!program) return;

    const buffer = context.createBuffer();
    const position = context.getAttribLocation(program, "aPosition");
    if (!buffer || position < 0) return;

    context.useProgram(program);
    context.bindBuffer(context.ARRAY_BUFFER, buffer);
    context.bufferData(
      context.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      context.STATIC_DRAW,
    );
    context.enableVertexAttribArray(position);
    context.vertexAttribPointer(position, 2, context.FLOAT, false, 0, 0);

    const uniforms = {
      accent: context.getUniformLocation(program, "uAccent"),
      background: context.getUniformLocation(program, "uBackground"),
      base: context.getUniformLocation(program, "uBase"),
      cell: context.getUniformLocation(program, "uCell"),
      highlight: context.getUniformLocation(program, "uHighlight"),
      pixelRatio: context.getUniformLocation(program, "uPixelRatio"),
      pointer: context.getUniformLocation(program, "uPointer"),
      pointerActive: context.getUniformLocation(program, "uPointerActive"),
      pointerRadius: context.getUniformLocation(program, "uPointerRadius"),
      resolution: context.getUniformLocation(program, "uResolution"),
      time: context.getUniformLocation(program, "uTime"),
    };
    const pointer: PointerState = {
      active: 0,
      targetActive: 0,
      targetX: 0,
      targetY: 0,
      x: 0,
      y: 0,
    };
    let frameId: number | undefined;
    let isVisible = true;
    let lastFrame = performance.now();
    let clock = 0;

    const draw = (now: number) => {
      const delta = Math.min(0.05, (now - lastFrame) / 1000);
      lastFrame = now;
      clock = (clock + delta * 1.2) % 6283;

      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);
      const width = Math.max(1, bounds.width);
      const height = Math.max(1, bounds.height);
      const bufferWidth = Math.round(width * pixelRatio);
      const bufferHeight = Math.round(height * pixelRatio);

      if (canvas.width !== bufferWidth || canvas.height !== bufferHeight) {
        canvas.width = bufferWidth;
        canvas.height = bufferHeight;
      }

      pointer.x += (pointer.targetX - pointer.x) * 0.18;
      pointer.y += (pointer.targetY - pointer.y) * 0.18;
      pointer.active += (pointer.targetActive - pointer.active) * 0.12;

      context.viewport(0, 0, bufferWidth, bufferHeight);
      context.uniform2f(uniforms.resolution, bufferWidth, bufferHeight);
      context.uniform1f(uniforms.time, clock);
      context.uniform1f(uniforms.pixelRatio, pixelRatio);
      context.uniform1f(uniforms.cell, Math.max(3.5, Math.min(width, height) / 161));
      context.uniform2f(uniforms.pointer, pointer.x, pointer.y);
      context.uniform1f(uniforms.pointerActive, pointer.active);
      context.uniform1f(uniforms.pointerRadius, Math.min(width, height) * 0.42);
      context.uniform3f(uniforms.background, 0.322, 0.29, 0.914);
      context.uniform3f(uniforms.base, 0.72, 0.12, 0.02);
      context.uniform3f(uniforms.accent, 1, 0.357, 0.094);
      context.uniform3f(uniforms.highlight, 1, 0.42, 0.08);
      context.drawArrays(context.TRIANGLES, 0, 3);
    };

    const stop = () => {
      if (frameId === undefined) return;
      window.cancelAnimationFrame(frameId);
      frameId = undefined;
    };

    const render = (now: number) => {
      draw(now);
      if (isVisible) frameId = window.requestAnimationFrame(render);
      else frameId = undefined;
    };

    const start = () => {
      if (!prefersReducedMotion && isVisible && frameId === undefined) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const updatePointer = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
      pointer.targetActive = 1;

      if (prefersReducedMotion) draw(performance.now());
      else start();
    };

    const resetPointer = () => {
      pointer.targetActive = 0;
      if (prefersReducedMotion) draw(performance.now());
      else start();
    };

    const resizeObserver = new ResizeObserver(() => draw(performance.now()));
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry?.isIntersecting ?? false;
        if (isVisible) start();
        else stop();
      },
      { threshold: 0.1 },
    );

    draw(performance.now());
    start();
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    container.addEventListener("pointermove", updatePointer);
    container.addEventListener("pointerleave", resetPointer);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      container.removeEventListener("pointermove", updatePointer);
      container.removeEventListener("pointerleave", resetPointer);
      context.deleteBuffer(buffer);
      context.deleteProgram(program);
    };
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden="true" className="builder-archive-dot-field" ref={containerRef}>
      <canvas className="builder-archive-dot-field__canvas" ref={canvasRef} />
    </div>
  );
}
