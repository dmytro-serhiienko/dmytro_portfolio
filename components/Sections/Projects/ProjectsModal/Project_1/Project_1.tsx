import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function Project1Content() {
  return (
    <div className={style.projectOverview}>
      <div className={style.overviewLeft}>
        <h2 className={style.overviewTitle}>
          Project
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
            Real commercial project in progress. Case study dropping soon!
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            Business web application (under NDA). Full case with tech stack, my
            contributions & results coming soon.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            Production-grade commercial web app. Details to be added post-launch
            / upon client approval (NDA in place).
          </p>
        </div>
      </div>
    </div>
  );
}
