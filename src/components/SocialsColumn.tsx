// src/components/SocialsColumn.tsx
import Link from "next/link";
import Image from "next/image";

export default function SocialsColumn() {
  return (
    <aside
      aria-label="Social links"
      className="
        fixed
        left-[max(0.5rem,env(safe-area-inset-left))]
        top-[max(0.5rem,env(safe-area-inset-top))]
        z-40
        hidden sm:flex
        flex-col items-center gap-1
      "
    >
      {/* Personal logo at the top */}
      <Link
        href="/"
        className="grid place-items-center h-10 w-10 rounded-full transition"
      >
        <Image
          src="/icons/android-chrome-192x192.png"
          alt="Home"
          width={36}
          height={36}
          className="object-contain"
          priority
        />
      </Link>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/brighton__young/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="grid place-items-center h-10 w-10 rounded-lg transition"
      >
        <Image
          src="/icons/socials1_icon.png"
          alt="Instagram"
          width={28}
          height={28}
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/bnyg-yeah"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="grid place-items-center h-10 w-10 rounded-lg transition"
      >
        <Image
          src="/icons/socials3_icon.svg"
          alt="GitHub"
          width={28}
          height={28}
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/bnyg/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid place-items-center h-10 w-10 rounded-lg transition translate-x-0.45"
      >
        <Image
          src="/icons/socials2_icon.png"
          alt="LinkedIn"
          width={28}
          height={28}
        />
      </a>
    </aside>
  );
}
