import Link from "next/link";
import style from "../ProjectModal.module.css";

export default function Project5Content() {
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
            Build a modern, fully responsive e-commerce landing page for premium
            watches — showcasing new collections, featured products, pricing,
            cart functionality, and strong purchase drivers.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Solution</h3>
          <p className={style.blockText}>
            Created a complete single-page site: hero for B720 collection,
            Featured/New Arrivals/Products grids with item cards, dynamic cart,
            `Add to Cart` buttons, testimonials, `Our Story` section, and
            newsletter signup. Mobile-first HTML + CSS + JS, clean layout,
            intuitive UX, powerful CTAs.
          </p>
        </div>
        <div className={style.overviewBlock}>
          <h3 className={style.blockTitle}>Results</h3>
          <p className={style.blockText}>
            Delivered a sleek, fast-loading, device-agnostic watch store landing
            that instantly highlights assortment, prices, reviews, and drives
            add-to-cart/subscribe actions. Highlights strong skills in
            responsive e-commerce design, product presentation, cart UX, and
            conversion-oriented frontend.
          </p>
        </div>
      </div>
    </div>
  );
}
