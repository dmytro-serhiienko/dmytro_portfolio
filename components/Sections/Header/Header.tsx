"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { ModalContact } from "../Contacts/ModalContact/ModalContact";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Якщо скролимо вниз і проїхали більше ...px — ховаємо
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      // Якщо скролимо вгору — показуємо
      setHidden(false);
    }
  });

  const closeModal = () => setIsModalOpen(false);

  const scrollToTop = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* header на motion.header */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={styles.header}
      >
        <Link href="/" className={styles.logo} onClick={scrollToTop}>
          <span className={styles.logoText}>DS</span>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="#about">ABOUT</Link>
          <Link href="#projects">PORTFOLIO</Link>
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
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.mobileMenu}
          >
            <nav className={styles.mobileNav}>
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
              <Link href="#projects" onClick={() => setMenuOpen(false)}>
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
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && <ModalContact onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
}
