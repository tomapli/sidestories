"use client";

import { useEffect, useRef, useState } from "react";

const MUX_VIDEO_URL =
  "https://stream.mux.com/HVcPsEAFw00S02wC7pNYK5Fpd1U0201Snirq02VY029Sb64yg/480p.mp4";
const MUX_POSTER_URL =
  "https://image.mux.com/HVcPsEAFw00S02wC7pNYK5Fpd1U0201Snirq02VY029Sb64yg/thumbnail.webp?width=480&fit_mode=preserve";

export function MuxVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(Boolean(entry?.isIntersecting));
      },
      { rootMargin: "160px 0px", threshold: 0.15 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="aspect-[9/16] w-full bg-black">
      {isActive ? (
        <video
          src={MUX_VIDEO_URL}
          title="Side Stories video"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={MUX_POSTER_URL}
          disablePictureInPicture
          disableRemotePlayback
        />
      ) : (
        <div
          aria-label="Side Stories video preview"
          role="img"
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url("${MUX_POSTER_URL}")` }}
        />
      )}
    </div>
  );
}
