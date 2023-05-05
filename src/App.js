import logo from "./logo.svg";
import "./App.css";
import NavBAr from "./Components/NavBAr";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="container-fluid one">
      <NavBAr />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
