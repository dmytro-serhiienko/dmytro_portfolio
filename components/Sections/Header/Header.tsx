"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>DS</span>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="#portfolio">ABOUT</Link>
          <Link href="#process">PORTFOLIO</Link>
          <Link href="#about">CONTACT</Link>
        </nav>

        <Link
          href="#contact"
          className={`${styles.ctaBtn} ${styles.desktopCta}`}
        >
          <span>LET&apos;S TALK</span>
        </Link>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span>MENU</span>
          <span className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link href="#portfolio" onClick={() => setMenuOpen(false)}>
              PORTFOLIO
            </Link>
            <Link href="#process" onClick={() => setMenuOpen(false)}>
              MY PROCESS
            </Link>
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={styles.mobileCta}
            >
              LET&apos;S TALK
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
