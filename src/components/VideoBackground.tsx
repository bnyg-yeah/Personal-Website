import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);
  const [frozenLastFrame, setFrozenLastFrame] = useState(false);
  const FREEZE_EPS = 0.08;

  // Decide if we should include a 4K <source>
  const canOffer4K = useMemo(() => {
    // --- Screen size / density check ---
    const vw = typeof window !== "undefined" ? window.innerWidth : 0;
    const dpr =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const effectiveWidth = vw * dpr;
    const bigEnoughScreen = vw >= 1920 || effectiveWidth >= 3000;

    // --- Network quality check ---
    let strongConnection = true;
    const navAny = typeof navigator !== "undefined" ? (navigator as any) : null;
    const conn: any =
      navAny?.connection || navAny?.mozConnection || navAny?.webkitConnection;

    if (conn) {
      const type = String(conn.effectiveType || "").toLowerCase();
      const downlink = Number(conn.downlink || 0);
      const saveData = Boolean(conn.saveData);

      if (saveData) strongConnection = false;
      else if (type.includes("2g") || type === "slow-2g" || type === "3g")
        strongConnection = false;
      else if (downlink && downlink < 5) strongConnection = false;
    }

    // ✅ Only return true if BOTH screen + network checks pass
    return bigEnoughScreen && strongConnection;
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.play().catch(() => {}); // Try autoplay

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
        {/* 4K only if both conditions satisfied */}
        {canOffer4K && (
          <source
            src="/videos/VideoBackground4kH264.mp4"
            type="video/mp4"
            media="(min-width: 1920px)"
          />
        )}

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
