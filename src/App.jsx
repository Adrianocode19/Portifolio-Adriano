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

  return (
    <>
      <Effect />
      <Navigation />
      <Perfil />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
