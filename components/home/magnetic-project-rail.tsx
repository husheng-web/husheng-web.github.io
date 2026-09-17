"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

import type { Project } from "@/types/content";

interface MagneticProjectItem {
  id: string;
  index: string;
  eyebrow?: string;
  title: string;
  summary?: string;
  actionLabel: string;
  featured: boolean;
  project: Project;
  cover?: {
    src: string;
  };
}

interface MagneticProjectRailProps {
  items: readonly MagneticProjectItem[];
  onOpen: (project: Project) => void;
}

const MAGNETIC_INFLUENCE_RATIO = 0.42;
const MAGNETIC_STRENGTH = 3.2;
const EASING_FACTOR = 0.18;

function smoothStep(value: number) {
  return value * value * (3 - 2 * value);
}

export function MagneticProjectRail({ items, onOpen }: MagneticProjectRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetFactorsRef = useRef(items.map(() => 0));
  const currentFactorsRef = useRef(items.map(() => 0));
  const [factors, setFactors] = useState(items.map(() => 0));

  const startAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      return;
    }

    const animate = () => {
      let isMoving = false;

      currentFactorsRef.current = currentFactorsRef.current.map((current, index) => {
        const target = targetFactorsRef.current[index] ?? 0;
        const next = current + (target - current) * EASING_FACTOR;

        if (Math.abs(target - next) > 0.001) {
          isMoving = true;
          return next;
        }

        return target;
      });

      setFactors([...currentFactorsRef.current]);
      animationFrameRef.current = isMoving ? requestAnimationFrame(animate) : null;
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const resetMagnetism = useCallback(() => {
    targetFactorsRef.current = items.map(() => 0);
    startAnimation();
  }, [items, startAnimation]);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "touch") {
        return;
      }

      const rail = railRef.current;
      if (!rail) {
        return;
      }

      const rect = rail.getBoundingClientRect();
      const cursorX = event.clientX - rect.left;
      const influence = Math.max(rect.width * MAGNETIC_INFLUENCE_RATIO, 1);

      targetFactorsRef.current = items.map((_, index) => {
        const center = ((index + 0.5) / items.length) * rect.width;
        const proximity = Math.max(0, 1 - Math.abs(cursorX - center) / influence);
        return smoothStep(proximity);
      });
      startAnimation();
    },
    [items, startAnimation],
  );

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="home-era-magnetic-rail"
      onPointerLeave={resetMagnetism}
      onPointerMove={handlePointerMove}
      ref={railRef}
    >
      {items.map((item, index) => {
        const baseWeight = item.featured ? 1.45 : 0.9;
        const style = {
          flexGrow: baseWeight + (factors[index] ?? 0) * MAGNETIC_STRENGTH,
        } satisfies CSSProperties;
        const className = [
          "home-era-magnetic-project",
          item.featured ? "home-era-magnetic-project--feature" : null,
        ]
          .filter(Boolean)
          .join(" ");
        const eyebrow = item.eyebrow ?? (item.featured ? undefined : item.index);
        const content = (
          <>
            {item.cover ? (
              <Image
                alt=""
                aria-hidden="true"
                className="home-era-magnetic-project__image"
                fill
                sizes="(min-width: 48rem) 24vw, 100vw"
                src={item.cover.src}
              />
            ) : null}
            <div className="home-era-magnetic-project__copy">
              {eyebrow ? <p>{eyebrow}</p> : null}
              <h3>{item.title}</h3>
              {item.summary ? (
                <p className="home-era-magnetic-project__summary">{item.summary}</p>
              ) : null}
              <span>{item.actionLabel}</span>
            </div>
          </>
        );

        return (
          <button
            aria-label={`${item.title}：${item.summary ?? item.actionLabel}`}
            className={className}
            key={item.id}
            onClick={() => onOpen(item.project)}
            style={style}
            type="button"
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
