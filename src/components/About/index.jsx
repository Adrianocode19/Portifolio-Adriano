import style from "./style.module.css";
import Title from "../../components/Title";
import dowloadIcon from "/assets/downloadIcon.svg";

const About = () => {
  return (
    <section id="sobre" className={style.about}>
      <Title>Sobre mim</Title>
      <div className={style.aboutContent}>
        <p className={style.aboutText}>
          Sou o Adriano e, aos 25 anos, sou formado em desenvolvimento
          Front-End. Busco constantemente me aprimorar e enfrentar novos
          desafios para me tornar um profissional completo.
          <br />
          <br />
          Minha jornada na área de desenvolvimento começou em 2022, quando tive
          a oportunidade de fazer um curso de HTML e CSS. Desde então, fiquei
          cada vez mais fascinado por entender como a internet funciona por
          baixo dos panos. Trabalhei por quatro anos como operador de
          empilhadeira e, nas horas vagas, estudava e buscava clientes para
          divulgar meu trabalho.
          <br />
          <br />
          Tenho conhecimentos sólidos em HTML, CSS, JavaScript e nos frameworks
          React e Vue, criando aplicações responsivas e interativas, sempre com
          foco em manter um código limpo e de fácil compreensão.
          <br />
          <br />
          Vamos Trabalhar juntos ?
        </p>
        <a href="/CV_Adriano.pdf" download className={style.buttonCV}>
          <img
            src={dowloadIcon}
            alt="Icone de download"
            className={style.dowloadIcon}
          />
          Baixe meu CV
        </a>
      </div>
    </section>
  );
};

export default About;
