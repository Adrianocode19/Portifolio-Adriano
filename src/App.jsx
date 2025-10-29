import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Nav";
import Perfil from "./components/Perfil";
import Projects from "./components/Projects";
import Effect from "./components/Effect";
import Footer from "./components/Footer";
import { initScrollEffect } from "./utils/scrollEffect";
import "./styles/variables.css";
import "./styles/main.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Efeito de scroll (só ativa depois do carregamento)
  useEffect(() => {
    if (!isLoading) {
      initScrollEffect();
    }
  }, [isLoading]);

  // Título da aba ao perder o foco
  useEffect(() => {
    const docTitle = document.title;
    const handleBlur = () => (document.title = "Volte sempre!😄");
    const handleFocus = () => (document.title = docTitle);

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div id="loading-screen">
          <h1>Carregando...</h1>
          <div className="loader-bar">
            <div className="progress"></div>
          </div>
        </div>
      ) : (
        <div id="main-content">
          <Effect />
          <Navigation />
          <div className="scroll-reveal">
            <Perfil />
          </div>
          <div className="scroll-reveal">
            <About />
          </div>
          <div className="scroll-reveal">
            <Projects />
          </div>
          <div className="scroll-reveal">
            <Contact />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
