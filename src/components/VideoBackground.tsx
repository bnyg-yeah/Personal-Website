import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);
  const [frozenLastFrame, setFrozenLastFrame] = useState(false);
  const FREEZE_EPS = 0.08;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.play().catch(() => {}); // try autoplay

    const onPlaying = () => setStarted(true);
    const onTimeUpdate = () => {
      if (!Number.isFinite(v.duration)) return;
      const remaining = v.duration - v.currentTime;
      if (remaining <= FREEZE_EPS && !frozenLastFrame) {
        v.pause();
        try {
          v.currentTime = Math.max(0, v.duration - FREEZE_EPS / 2);
        } catch {}
        setFrozenLastFrame(true);
      }
    };

    v.addEventListener("playing", onPlaying);
    v.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [frozenLastFrame]);

  return (
    <div className="relative h-full w-full">
      {!started && (
        <Image
          src="/images/FirstFrameVideoBackground.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none transition-opacity duration-300"
        />
      )}

      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none ${
          started ? "opacity-100" : "opacity-0 transition-opacity duration-300"
        }`}
        poster="/images/FirstFrameVideoBackground.jpg"
        muted
        playsInline
        autoPlay
        preload="metadata"
      >
        {/* 1080p fallback for larger screens */}
        <source
          src="/videos/VideoBackground1080H264.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />

        {/* Mobile-first 720p */}
        <source
          src="/videos/VideoBackground720H264.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
      </video>
    </div>
  );
}
