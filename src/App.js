import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  let [isShow, setIsShow] = useState("about");
  let [isHoverP, setIsHoverP] = useState(false);
  let [isHoverA, setIsHoverA] = useState(false);
  const mouseEnter = (e) => {
    if (e.target.id === "about") {
      setIsHoverA(true);
    } else {
      setIsHoverP(true);
    }
  };

  const mouseLeave = (e) => {
    if (e.target.id === "about") {
      setIsHoverA(false);
    } else {
      setIsHoverP(false);
    }
  };

  const handleClick = (e) => {
    if (e.target.id === "about") setIsShow("about");
    else setIsShow("proj");
  };

  const tabTog = () => {
    if (isShow === "proj") {
      return <Projects />;
    } else {
      return <About />;
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center app">
      <Navbar />
      <hr className="pageDivideZM" />
      <Container className="d-flex justify-content-between">
        <h3 className="mb-5">
          {isHoverP ? (
            <u
              onClick={handleClick}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <b id="project">My Projects</b>
            </u>
          ) : (
            <u
              id="project"
              onClick={handleClick}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              My Projects
            </u>
          )}
        </h3>

        <h3 className="">
          {isHoverA ? (
            <u
              onClick={handleClick}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <b id="about">About</b>
            </u>
          ) : (
            <u
              id="about"
              onClick={handleClick}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              About
            </u>
          )}
        </h3>
      </Container>

      {tabTog()}
    </Container>
  );
}

export default App;
