import style from "./About.module.css";

export function About() {
  return (
    <section id="about" className={style.about}>
      <h2 className={style.aboutTitle}>ABOUT</h2> {/* Зверху */}
      <div className={style.aboutContent}>
        {" "}
        {/* Центрує все всередині */}
        <div className={style.parDiv}>
          <p className={style.aboutPar}>
            Crafting seamless digital systems that embody your excellence and
            put you a step ahead.
          </p>
        </div>
      </div>
    </section>
  );
}
