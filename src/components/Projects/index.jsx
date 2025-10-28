import style from "./style.module.css";
import Title from "../Title";
import db from "./db.json";
import { lazy } from "react";
const techComponents = {
  Vue: lazy(() =>
    import("react-icons/fa").then((mod) => ({ default: mod.FaVuejs }))
  ),
  Tailwind: lazy(() =>
    import("react-icons/ri").then((mod) => ({ default: mod.RiTailwindCssFill }))
  ),
  Nuxt: lazy(() =>
    import("react-icons/si").then((mod) => ({ default: mod.SiNuxtdotjs }))
  ),
  React: lazy(() =>
    import("react-icons/fa").then((mod) => ({ default: mod.FaReact }))
  ),
  HTML: lazy(() =>
    import("react-icons/fa").then((mod) => ({ default: mod.FaHtml5 }))
  ),
  CSS: lazy(() =>
    import("react-icons/fa").then((mod) => ({ default: mod.FaCss3Alt }))
  ),
  JavaScript: lazy(() =>
    import("react-icons/fa").then((mod) => ({ default: mod.FaJs }))
  ),
  TypeScript: lazy(() =>
    import("react-icons/si").then((mod) => ({ default: mod.SiTypescript }))
  ),
};
const Projects = () => {
  const projects = db.projects;
  return (
    <section id="projetos" className={style.projects}>
      <Title>Meus projetos</Title>

      <div className={style.projectsContent}>
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={index}
            className={style.projectCard}
          >
            <img
              src={project.imagem}
              alt="Mock site"
              className={style.projectImg}
            />
            <div className={style.projectTextContainer}>
              <div className={style.projectDetails}>
                <h3 className={style.projectName}>{project.nome}</h3>
                <div className={style.projectTechnologies}>
                  {project.tecnologias.map((tech, idx) => {
                    const TechIcon = techComponents[tech];
                    if (!TechIcon) return null;
                    return (
                      <div key={idx} className={style.iconWrapper}>
                        <span className={style.tooltip}>{tech}</span>
                        <TechIcon className={style.icons} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className={style.projectDescription}>{project.descricao}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
