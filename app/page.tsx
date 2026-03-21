import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroBg} />

      {/* ФОТО */}
      <div className={styles.heroPhotoWrap}>
        <Image
          src="/img/hero/111.png"
          alt="Your name"
          fill
          priority
          className={styles.heroPhoto}
          sizes="(max-width: 768px) 90vw, 44vw"
        />
      </div>

      <h1 className={styles.heroTitle}>
        CREATING THE DIGITAL FACE OF
        <span className={styles.accent}>&ldquo;SUCCESS!&rdquo;</span>
      </h1>

      <div className={styles.heroBottom}>
        <p className={styles.heroSub}>
          Your digital status speaks for you. My job is to make it flawless.
        </p>
        <p className={styles.scrollHint}>(SCROLL TO SEE MORE)</p>
      </div>
    </main>
  );
}
