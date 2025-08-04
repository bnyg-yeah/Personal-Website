import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); //for the hamburger menu
  const containerRef = useRef(null); //the container for both hamburger icon and dropdown menu
  useEffect(() => {
    // runs after every render, and sets up event listeners
    function handleClickOutside(event) {
      // called on every click anywhere in the document
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        // └── if the click target is NOT inside our container...
        setIsOpen(false);
        // └── ...close the dropdown
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    // └── listen for mouse clicks anywhere

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // └── clean up the listener on unmount or re-render
    };
  }, [containerRef]);

  return (
    <nav className={styles.Navigation}>
      {/* Navigation links */}
      <div className={styles.MainLinks}>
        <Link href="/">Home</Link>
        <Link href="/AboutMe">About</Link>
        <Link href="/Projects">Projects</Link>
        <Link href="/Resume">Resumé</Link>
      </div>

      <div className={styles.HamburgerContainer} ref={containerRef}>
        {/* Hamburger icon */}
        <div className={styles.Hamburger} onClick={() => setIsOpen(!isOpen)}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className={styles.Dropdown}>
            <Link href="/ExperienceEducation">Experience & Education</Link>
            <Link href="/References">References</Link>
            <Link href="/Interests">Interests & Photos</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
