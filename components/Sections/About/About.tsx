import style from "./About.module.css";

export function About() {
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

          <div className={style.skillsListWrap}>
            <div className={`${style.skillsFrontWrap} ${style.skillCard}`}>
              <h2 className={style.skillsFrontText}>Frontend</h2>
              <ul className={style.skillsFrontList}>
                <li className={style.skillsFrontItem}>TypeScript</li>
                <li className={style.skillsFrontItem}>React.js</li>
                <li className={style.skillsFrontItem}>Next.js</li>
                <li className={style.skillsFrontItem}>HTML5 / CSS3</li>
                <li className={style.skillsFrontItem}>JavaScript (ES6+)</li>
              </ul>
            </div>

            <div className={`${style.skillsBackWrap} ${style.skillCard}`}>
              <h2 className={style.skillsBackText}>Backend</h2>
              <ul className={style.skillsBackList}>
                <li className={style.skillsBackItem}>Node.js</li>
                <li className={style.skillsBackItem}>Nest.js / Express</li>
                <li className={style.skillsBackItem}>PostgreSQL / MongoDB</li>
                <li className={style.skillsBackItem}>Rest API</li>
              </ul>
            </div>

            <div className={`${style.skillsToolsWrap} ${style.skillCard}`}>
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
