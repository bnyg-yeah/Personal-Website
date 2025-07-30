import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Nav() {
  return (
    <nav className={styles.Navigation}>
      {/* Navigation links */}
      <Link href="/">Home</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="/Photos">Photos</Link>
    </nav>
  );
}
