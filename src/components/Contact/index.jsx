import { useState } from "react";
import Title from "../Title";
import style from "./style.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const number = "5567992539374";

  const sendMsg = (event) => {
    const text = `Olá me chamo ${name}, ${message}`;
    const formattedMsg = encodeURIComponent(text);
    const url = `https://whatsa.me/${number}/?t=${formattedMsg}`;
    window.open(url, "_blank");
    event.preventDefault();
  };
  return (
    <section id="contato" className={style.contact}>
      <Title>Entre em contato</Title>
      <form
        id="form"
        className={style.contactForm}
        onSubmit={(e) => {
          sendMsg(e);
        }}
      >
        <div className={style.formContainer}>
          <input
            type="text"
            placeholder="Nome"
            className={style.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={style.formContainer}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Digite sua Mensagem"
            className={style.formInput}
            required
          ></textarea>
        </div>
        <button type="submit" className={style.formButton}>
          Enviar via Whatsapp
        </button>
      </form>
    </section>
  );
};

export default Contact;
