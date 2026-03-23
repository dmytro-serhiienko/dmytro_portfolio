"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GsapAnimations() {
  useEffect(() => {
    // ─── Хелпери 

    function revealFrom(
      targets: gsap.DOMTarget,
      fromVars: gsap.TweenVars,
      options: {
        stagger?: number;
        delay?: number;
        duration?: number;
        ease?: string;
        triggerEl?: Element | string;
        start?: string;
      } = {},
    ) {
      const elements = gsap.utils.toArray<Element>(targets);
      if (!elements.length) return;

      const {
        stagger = 0,
        delay = 0,
        duration = 0.9,
        ease = "power3.out",
        start = "top 88%",
      } = options;

      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, ...fromVars },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration,
            delay: delay + i * stagger,
            ease,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: "play none none none",
            },
          },
        );
      });
    }

    // ─── HERO 
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const heroTitle = document.querySelector("main h1");
    const heroPhoto = document.querySelector("main [class*='heroPhotoWrap']");
    const heroBottom = document.querySelector("main [class*='heroBottom']");

    if (heroTitle) {
      heroTl.fromTo(
        heroTitle,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 1 },
      );
    }
    if (heroPhoto) {
      heroTl.fromTo(
        heroPhoto,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.1 },
        "-=0.6",
      );
    }
    if (heroBottom) {
      heroTl.fromTo(
        heroBottom,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5",
      );
    }

    // ─── ABOUT 
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      // Заголовок — зверху
      revealFrom(aboutSection.querySelectorAll("h2"), { y: -50 });

      revealFrom(aboutSection.querySelectorAll("p"), { x: -70 });

      revealFrom(
        aboutSection.querySelectorAll("[class*='skillCard']"),
        { y: 80 },
        { stagger: 0.15 },
      );

      revealFrom(
        aboutSection.querySelectorAll("li"),
        { x: 40 },
        { stagger: 0.07, duration: 0.6 },
      );
    }

    // ─── PROJECTS 
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      revealFrom(projectsSection.querySelectorAll("h2"), { y: 60 });

      const cards = gsap.utils.toArray<Element>(
        projectsSection.querySelectorAll("[class*='projectCard']"),
      );
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -80 : 80;
        gsap.fromTo(
          card,
          { opacity: 0, x: fromX, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }

    // ─── CONTACTS 
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      // Великий заголовок — знизу
      revealFrom(contactSection.querySelectorAll("h2"), { y: 70 });

      // Параграф — зліва
      revealFrom(contactSection.querySelectorAll("p"), { x: -60 });

      // Кнопка — з масштабу + знизу зі затримкою
      revealFrom(
        contactSection.querySelectorAll("button"),
        { y: 40, scale: 0.9 },
        { delay: 0.15 },
      );

      // Email-посилання — знизу
      revealFrom(contactSection.querySelectorAll("a"), { y: 30 });
    }

    // ─── FOOTER 
    const footer = document.querySelector("footer");
    if (footer) {
      revealFrom(
        footer.querySelectorAll("[class*='footerNaviLink']"),
        { x: -40 },
        { stagger: 0.1, duration: 0.7 },
      );

      revealFrom(
        footer.querySelectorAll("[class*='footerSocialLink']"),
        { x: 40 },
        { stagger: 0.1, duration: 0.7 },
      );

      revealFrom(
        footer.querySelectorAll("[class*='footerName']"),
        { y: 40 },
        { duration: 1, ease: "power4.out" },
      );
    }

    // ─── Cleanup 
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
