import style from "./style.module.css";
import Title from "../Title";
import db from "./db.json";

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
              <h3 className={style.projectName}>{project.nome}</h3>
              <p className={style.projectDescription}>{project.descricao}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
