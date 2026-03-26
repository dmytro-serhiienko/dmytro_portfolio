"use client";

import { useEffect, useRef } from "react";
import style from "./About.module.css";

export function About() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add(style.isVisible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "80px 0px -10% 0px" }
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={style.about}>
      <div className={style.aboutContainer}>
        <h2 className={style.aboutTitle}>ABOUT</h2>
        <div className={style.aboutContent}>
          <div className={style.parDiv}>
            <p className={style.aboutPar}>
              Business taught me what the market needs, but development gave me
              the power to build it. Having found my true passion, I am now
              dedicated to crafting robust Full-stack solutions. I don’t just
              build apps — I build the digital future of your business.
            </p>
          </div>

          <div className={style.skillsListWrap} aria-label="Skills">
            <div
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
              className={`${style.skillsFrontWrap} ${style.skillCard} ${style.reveal}`}
            >
              <h2 className={style.skillsFrontText}>Frontend</h2>
              <ul className={style.skillsFrontList}>
                <li className={style.skillsFrontItem}>TypeScript</li>
                <li className={style.skillsFrontItem}>React.js</li>
                <li className={style.skillsFrontItem}>Next.js</li>
                <li className={style.skillsFrontItem}>HTML5 / CSS3</li>
                <li className={style.skillsFrontItem}>JavaScript (ES6+)</li>
              </ul>
            </div>

            <div
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
              className={`${style.skillsBackWrap} ${style.skillCard} ${style.reveal}`}
            >
              <h2 className={style.skillsBackText}>Backend</h2>
              <ul className={style.skillsBackList}>
                <li className={style.skillsBackItem}>Node.js</li>
                <li className={style.skillsBackItem}>Nest.js / Express</li>
                <li className={style.skillsBackItem}>PostgreSQL / MongoDB</li>
                <li className={style.skillsBackItem}>Rest API</li>
              </ul>
            </div>

            <div
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
              className={`${style.skillsToolsWrap} ${style.skillCard} ${style.reveal}`}
            >
              <h2 className={style.skillsToolsText}>Tools</h2>
              <ul className={style.skillsToolsList}>
                <li className={style.skillsToolsItem}>Git / GitHub</li>
                <li className={style.skillsToolsItem}>Figma</li>
                <li className={style.skillsToolsItem}>VsCode</li>
                <li className={style.skillsToolsItem}>Webpack / Vite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
