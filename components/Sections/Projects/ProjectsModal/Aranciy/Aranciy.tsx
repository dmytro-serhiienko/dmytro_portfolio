import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function ProjectAranciy() {
  return (
    <div className={style.projectOverview}>
      <div className={style.overviewLeft}>
        <h2 className={style.overviewTitle}>
          Serhiy Aranchiy Portfolio Website
          <span>Overview</span>
        </h2>
        <div className={style.linksRow}>
          <Link
            className={style.projectLink}
            href="https://next-aranchiy.vercel.app/"
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
            Develop a premium, high-performance landing page for a professional
            event host, balancing rich animations with fast loading speeds and a
            seamless booking flow.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            Built with Next.js and Tailwind CSS (Mobile-First). Implemented
            complex, fluid animations using GSAP and interactive sliders via
            Swiper.js. Integrated a professional media gallery using
            Yet-another-react-lightbox. Form logic is handled by Formik + Yup,
            with Nodemailer for direct email delivery and React Hot Toast for
            instant UI feedback. Deployed on Vercel with full CI/CD.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            Top Performance (optimized via Next/Image for peak Google Lighthouse
            scores), Premium UX with high-fidelity animations and responsive
            layouts across all devices, and Reliability through secure,
            real-time booking request delivery and robust client-side
            validation.
          </p>
        </div>
      </div>
    </div>
  );
}
