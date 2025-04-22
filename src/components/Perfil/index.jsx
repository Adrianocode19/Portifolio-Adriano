import style from "./style.module.css";
import avatar from "/assets/avatar.webp";

const Perfil = () => {
  return (
    <main id="inicio" className={style.header}>
      <img src={avatar} alt="Avatar Adriano" className={style.avatar} />
      <h1 className={style.headerTitle}>Adriano Carlos</h1>
      <p className={style.headerSubTitle}>Desenvolvedor Front End</p>
    </main>
  );
};

export default Perfil;
