import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function Project3Content() {
  return (
    <div className={style.projectOverview}>
      <div className={style.overviewLeft}>
        <h2 className={style.overviewTitle}>
          Project (Mojito Animation)
          <span>Overview</span>
        </h2>
        <div className={style.linksRow}>
          <Link
            className={style.projectLink}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className={style.projectLink}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Link>
        </div>
      </div>
      <div className={style.overviewRight}>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Challenge</h3>
          <p className={style.blockText}>
            Create a stunning, high-impact animated promo page for a Mojito
            cocktail that showcases advanced GSAP capabilities: smooth
            scroll-triggered animations, staggers, parallax, pinning, and
            interactivity to make the experience truly immersive and memorable.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            Built a single-page GSAP-powered demo featuring animated hero with
            text & ingredients, scroll-triggered reveals, element staggers,
            section pinning, background/ glass parallax, and subtle
            micro-interactions. Clean code, mobile-first approach,
            buttery-smooth performance.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            Delivered a visually jaw-dropping, fluid, and premium-feeling
            animation showcase that performs flawlessly across devices. Proves
            expert-level GSAP mastery (ScrollTrigger, timelines, stagger,
            pinning) and stands out as a strong portfolio piece for
            motion/creative front-end roles.
          </p>
        </div>
      </div>
    </div>
  );
}
