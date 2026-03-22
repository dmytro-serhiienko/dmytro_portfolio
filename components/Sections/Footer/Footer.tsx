import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerUpperWrapper}>
          {/* navi */}
          <div className={styles.footerNaviWrap}>
            <nav className={styles.footerNavi}>
              <Link className={styles.footerNaviLink} href="#about">
                ABOUT
              </Link>
              <Link className={styles.footerNaviLink} href="#projects">
                PORTFOLIO
              </Link>
              <Link className={styles.footerNaviLink} href="#contact">
                CONTACT
              </Link>
            </nav>
          </div>

          {/* social */}
          <div className={styles.footerSocialWrap}>
            <Link
              className={styles.footerSocialLink}
              href="https://github.com/dmytro-serhiienko"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              className={styles.footerSocialLink}
              href="https://www.linkedin.com/in/dmytro-serhienko"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* name */}
        <div className={styles.footerNameWrap}>
          <p className={styles.footerName}>DMYTRO SERGIIENKO</p>
        </div>
      </div>
    </footer>
  );
}
