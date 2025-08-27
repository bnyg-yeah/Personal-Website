// 1) Import React types (optional but nice for clarity in TS projects).
import type { FC } from "react";
// 2) Use Next.js' optimized image component (avoids layout shift, auto sizing).
import Image from "next/image";

// 3) Define the Footer as a typed functional component.
const Footer: FC = () => {
  return (
    // 4) Outer wrapper: column layout, centered, with your original font and white text.
    <footer
      className="
        mt-auto flex flex-col items-center justify-center
        text-white font-[Trebuchet_MS]
      "
      // 5) role/content semantics: <footer> is the right HTML element for site footers.
    >
      {/* 6) Icon row: the critical part. Make it a flex-row so icons sit side-by-side. */}
      <div className="flex flex-row items-center justify-center gap-3">
        {/* 7) Instagram link: open in new tab safely with rel="noopener noreferrer". */}
        <a
          href="https://www.instagram.com/brighton__young/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          {/* 8) 30x30 icon */}
          <Image
            src="/icons/socials1_icon.svg"
            alt="Instagram"
            width={30}
            height={30}
          />
        </a>

        {/* 9) LinkedIn link: same treatment and hover affordance. */}
        <a
          href="https://www.linkedin.com/in/bnyg/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          <Image
            src="/icons/socials2_icon.png"
            alt="LinkedIn"
            width={30}
            height={30}
            loading="lazy"
            priority={false}
          />
        </a>
      </div>

      {/* 10) Footer message: white, tiny, no extra margins (like your CSS). */}
      <p className="m-0 text-xs">Website created by Brighton Young. Please contact me at brightonyoung.dev@gmail.com</p>
    </footer>
  );
};

// 11) Export the component as default for easy import elsewhere.
export default Footer;
