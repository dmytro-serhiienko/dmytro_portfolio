"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./Projects.module.css";
import SecretProject from "./ProjectsModal/SecretProject/SecretProject";
import ProjectChicken from "./ProjectsModal/Chicken/Chicken";
import ProjectMojito from "./ProjectsModal/Mojito/Mojito";
import ProjectArtistsHub from "./ProjectsModal/ArtistsHub/ArtistsHub";
import ProjectWatch from "./ProjectsModal/Watch/Watch";
import ProjectAranciy from "./ProjectsModal/Aranciy/Aranciy";

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  component: React.ReactNode;
}

const projectsData = [
  {
    id: 1,
    title: "Commercial Web Application",
    category: "Scalable business solution currently under active development",
    img: "/img/projects/secret/secret.png",
    component: <SecretProject />,
  },
  {
    id: 2,
    title: "Premium Portfolio for an Event Host",
    category: "Showcasing the best events with a premium portfolio",
    img: "/img/projects/aranciy/aranciy.png",
    component: <ProjectAranciy />,
  },
  {
    id: 3,
    title: "Food Delivery Platform",
    category: "Full-featured food delivery app with real-time ordering system",
    img: "/img/projects/project-2/2.png",
    component: <ProjectChicken />,
  },

  {
    id: 4,
    title: "Interactive Bar Experience",
    category: "Interactive bar landing page with dynamic drink showcase",
    img: "/img/projects/project-3/3.png",
    component: <ProjectMojito />,
  },

  {
    id: 5,
    title: "Music Community Platform",
    category:
      "Music discovery platform connecting independent artists with listeners",
    img: "/img/projects/project-4/4.png",
    component: <ProjectArtistsHub />,
  },

  {
    id: 6,
    title: "Luxury Watch E-commerce",
    category:
      "Premium watch store with integrated payment gateway and admin panel",
    img: "/img/projects/project-5/5.png",
    component: <ProjectWatch />,
  },
  // ... інші проекти
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section id="projects" className={style.projectsSection}>
      <h2 className={style.sectionTitle}>Selected Projects</h2>

      <div className={style.projectsGrid}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={style.projectCard}
            onClick={() => setActiveProject(project)}
          >
            <div className={style.imageWrapper}>
              <Image
                src={project.img}
                alt={project.title}
                fill
                className={style.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={style.overlay}>
                <span>Open Project</span>
              </div>
            </div>
            <div className={style.projectInfo}>
              <h3 className={style.projectTitle}>{project.title}</h3>
              <p className={style.projectCategory}>{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* МОДАЛЬНЕ ВІКНО */}
      {activeProject && (
        <div
          className={style.modalOverlay}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={style.closeBtn}
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            <div className={style.projectDetails}>
              {activeProject.component}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
