"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { ModalContact } from "../../ModalContact/ModalContact";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>DS</span>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="#about">ABOUT</Link>
          <Link href="#portfolio">PORTFOLIO</Link>
          <Link href="#contact">CONTACT</Link>
        </nav>

        <button
          onClick={() => setIsModalOpen(true)}
          className={`${styles.ctaBtn} ${styles.desktopCta}`}
          type="button"
        >
          <span>LET&apos;S TALK</span>
        </button>

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
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link href="#portfolio" onClick={() => setMenuOpen(false)}>
              PORTFOLIO
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
              className={styles.mobileCta}
              type="button"
            >
              LET&apos;S TALK
            </button>
          </nav>
        </div>
      )}

      {isModalOpen && <ModalContact onClose={closeModal} />}
    </>
  );
}
