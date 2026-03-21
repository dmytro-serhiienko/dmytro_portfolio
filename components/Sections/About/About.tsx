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
        </div>
      </div>
    </section>
  );
}
