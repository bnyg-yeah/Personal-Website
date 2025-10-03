import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      className="
        mt-auto flex flex-col items-center justify-center
        text-white font-[Trebuchet_MS]
      "
    >
      <p className="m-0 text-xs">
        Website created by Brighton Young. Please contact me at
        brightonyoung.dev@gmail.com.
      </p>
    </footer>
  );
};

export default Footer;
