import styles from "./Header.module.css";

function Header({ title, subtitle }) {
  return (
    <header className={styles.header}>

      <h1 className={styles.header_title}>{title}</h1>

      {/* this lets header be optional */}
      {subtitle && <p className={styles.header_subtitle}>{subtitle}</p>} 

    </header>
  );
}

export default Header;