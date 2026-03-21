import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function Project1Content() {
  return (
    <div className={style.projectOverview}>
      {/* ── LEFT: title + links ── */}
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

      {/* ── RIGHT: blocks ── */}
      <div className={style.overviewRight}>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Challenge</h3>
          <p className={style.blockText}>
            This project is a comprehensive web application designed to provide
            users with an intuitive interface for managing their tasks and
            projects. It features a sleek and modern design, utilizing the
            latest technologies to ensure a seamless user experience.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            The solution involved developing a robust backend with a scalable
            architecture, ensuring data integrity and security. The frontend was
            crafted with a focus on user experience, incorporating responsive
            design principles and interactive elements to engage users
            effectively.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            The project successfully streamlined task management for users,
            enhancing productivity and collaboration. Feedback from early
            adopters highlighted the intuitive interface and seamless
            performance as key strengths of the application.
          </p>
        </div>
      </div>
    </div>
  );
}
