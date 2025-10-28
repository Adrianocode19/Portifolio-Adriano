import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Nav";
import Perfil from "./components/Perfil";
import Projects from "./components/Projects";
import "./styles/variables.css";
import Effect from "./components/Effect";
import Footer from "./components/Footer";

const App = () => {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Volte sempre!😄";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 3000); // tempo da animação
  });

  return (
    <>
      <div id="loading-screen">
        <h1>Carregando...</h1>
        <div className="loader-bar">
          <div className="progress"></div>
        </div>
      </div>

      <div id="main-content" style={{ display: "none" }}>
        <Effect />
        <Navigation />
        <Perfil />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
