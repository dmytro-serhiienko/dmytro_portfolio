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
              <Link className={styles.footerNaviLink} href="#portfolio">
                ABOUT
              </Link>
              <Link className={styles.footerNaviLink} href="#process">
                PORTFOLIO
              </Link>
              <Link className={styles.footerNaviLink} href="#about">
                CONTACT
              </Link>
            </nav>
          </div>

          {/* social */}
          <div className={styles.footerSocialWrap}>
            <Link className={styles.footerSocialLink} href="#">
              GitHub
            </Link>
            <Link className={styles.footerSocialLink} href="#">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* name */}
        <div className={styles.footerNameWrap}>
          <p className={styles.footerName}>DMYTRO SERGIIENKO</p>
        </div>

        {/* copy */}
        <div className={styles.footerCopyWrap}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Dmytro Sergiienko
          </p>
        </div>
      </div>
    </footer>
  );
}
