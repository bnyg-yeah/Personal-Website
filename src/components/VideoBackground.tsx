// src/components/VideoBackground.tsx
import Image from "next/image";

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 h-full w-full">
      {/* Fallback image (poster) so there’s no white flash before video loads */}
      <Image
        src="/images/FirstFrameVideoBackground.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center pointer-events-none select-none"
      />

      <video
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
        poster="/images/FirstFrameVideoBackground.jpg"
        muted
        playsInline
        autoPlay
        loop
      >
        {/* Desktop (>= 769px) */}
        <source
          src="/videos/VideoBackground1080H264.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />

        {/* Mobile (<= 768px) */}
        <source
          src="/videos/VideoBackground720H264.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
      </video>
    </div>
  );
}
