import styles from "./Logo.module.css";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/icons/android-chrome-512x512.png"
          alt="Logo"
          className={styles.Logo}
          width={40}
          height={40}
          priority
        />
      </Link>
    </div>
  );
}

export default Logo;
