import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function Project2Content() {
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
            I wanted to build an attractive and mouth-watering website for a
            fictional fried chicken restaurant. The main goal was to create a
            landing page that feels delicious, looks modern, and works smoothly
            on mobile devices — all while using only basic technologies, since
            Iʼm just starting my journey in web development.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            I developed a fully responsive one-page website using HTML5, CSS3
            (Flexbox + Grid + CSS variables), and a small amount of vanilla
            JavaScript. I added smooth scroll animations with the ScrollReveal
            library, a mobile-friendly side menu, a sticky header with active
            link highlighting, and a pleasant dark/light mode design.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            The result is a clean, tasty, and modern landing page that looks
            great on every device. The site showcases essential
            beginner-to-intermediate skills: semantic HTML markup, full
            responsiveness, animation handling without heavy frameworks, proper
            project structure, and easy deployment on GitHub Pages.
          </p>
        </div>
      </div>
    </div>
  );
}
