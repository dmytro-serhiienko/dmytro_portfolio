import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function Project4Content() {
  return (
    <div className={style.projectOverview}>
      <div className={style.overviewLeft}>
        <h2 className={style.overviewTitle}>
          Project (Artists)
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
            In a team project, build a highly interactive Artists section for a
            music discovery hub — enabling seamless artist exploration with
            dynamic loading, detailed modals and top-notch UX, all powered by
            REST API while keeping performance and responsiveness flawless.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            Fully owned the Artists section: dynamic artist cards loading via
            REST API (Axios) with “Load More” functionality, modal window for
            in-depth artist details, smooth scroll-to-top button; all site
            animations, implemented with vanilla CSS + JS. Delivered
            mobile-first approach, semantic code, performance optimization, and
            seamless integration into the team codebase (Vite, GitHub
            collaboration).
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            Fast, engaging section that loads data efficiently, animates
            smoothly and drives music discovery. Highlights API integration,
            modals, lightweight animations and full feature ownership in
            collaborative frontend work.
          </p>
        </div>
      </div>
    </div>
  );
}
