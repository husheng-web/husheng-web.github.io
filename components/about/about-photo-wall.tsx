"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { useMotionSettings } from "@/components/motion/use-motion-settings";

interface AboutPhoto {
  src: string;
}

const aboutPhotos: readonly AboutPhoto[] = Array.from({ length: 98 }, (_, index) => ({
  src: `/media/about/wall/photo-${String(index + 1).padStart(2, "0")}.jpg`,
}));

const parallaxRanges: Array<[number, number]> = [
  [-30, 30],
  [28, -28],
  [-18, 18],
  [34, -34],
  [-24, 24],
];

const aboutPhotoColumns = parallaxRanges.map((_, columnIndex) =>
  aboutPhotos.filter(
    (_, photoIndex) => photoIndex % parallaxRanges.length === columnIndex,
  ),
);

interface AboutPhotoColumnProps {
  index: number;
  photos: readonly AboutPhoto[];
  progress: MotionValue<number>;
}

function AboutPhotoColumn({ index, photos, progress }: AboutPhotoColumnProps) {
  const { prefersReducedMotion } = useMotionSettings();
  const y = useTransform(progress, [0, 1], parallaxRanges[index] ?? [0, 0]);

  return (
    <motion.div
      className={`about-photo-wall__column about-photo-wall__column--${index + 1}`}
      style={prefersReducedMotion ? undefined : { y }}
    >
      {photos.map((photo) => (
        <figure className="about-photo-wall__tile" key={photo.src}>
          <Image
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 44rem) 50vw, (max-width: 64rem) 33vw, 20vw"
            src={photo.src}
            unoptimized
          />
        </figure>
      ))}
    </motion.div>
  );
}

export function AboutPhotoWall() {
  const wallRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: wallRef,
  });

  return (
    <section aria-label="日常照片" className="about-photo-wall" ref={wallRef}>
      <div className="about-photo-wall__grid">
        {aboutPhotoColumns.map((photos, index) => (
          <AboutPhotoColumn
            index={index}
            key={index}
            photos={photos}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
