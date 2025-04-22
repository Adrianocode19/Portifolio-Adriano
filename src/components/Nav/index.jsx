import style from "./style.module.css";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.menu}>
        <li>
          <a href="#inicio" className={style.menuLink}>
            Início
          </a>
        </li>
        <li>
          <a href="#sobre" className={style.menuLink}>
            Sobre
          </a>
        </li>
        <li>
          <a href="#projetos" className={style.menuLink}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#contato" className={style.menuLink}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
