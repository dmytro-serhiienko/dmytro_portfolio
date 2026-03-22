import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function Project2Content() {
  return (
    <div className={style.projectOverview}>
      {/* ── LEFT: title + links ── */}
      <div className={style.overviewLeft}>
        <h2 className={style.overviewTitle}>
          Project (Fried Chicken Landing Page)
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

      {/* ── RIGHT: blocks ── */}
      <div className={style.overviewRight}>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Challenge</h3>
          <p className={style.blockText}>
            Build a mouth-watering, perfectly responsive landing page for fried
            chicken that instantly conveys taste & craving, drives orders fast,
            while keeping code clean, performant and maintainable.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            Crafted a modern one-page site featuring a bold hero, authentic
            family recipe story (since 1990), priced menu highlights and strong
            CTAs. Used pure HTML + CSS with mobile-first approach, flawless
            responsiveness and thoughtful UX to maximize conversion.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            Delivered a visually delicious, technically flawless website that
            looks stunning on every device, loads lightning-fast and guides
            users straight to ordering. Showcases strong skills in responsive
            design, clean semantic code and user-centered development.
          </p>
        </div>
      </div>
    </div>
  );
}
