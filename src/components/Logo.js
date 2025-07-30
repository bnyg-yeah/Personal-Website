import styles from "./Logo.module.css";

function Logo() {
  return (
    <div>
      <img
        src="/icons/android-chrome-512x512.png"
        alt="Logo"
        className={styles.Logo}
        loading="lazy" // Lazy loading for performance
      />
    </div>
  );
}

export default Logo;
