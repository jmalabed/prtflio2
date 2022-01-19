import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  let [isShow, setIsShow] = useState("about");

  const handleAboutClick = () => {
    if (isShow === "proj") setIsShow("about");
  };

  const handleProjClick = () => {
    if (isShow === "about") setIsShow("proj");
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
      <hr className="pageDivide" />
      <Container className="d-flex justify-content-between">
        <h1 onClick={handleProjClick} className="mb-5">
          <u>My Projects</u>
        </h1>

        <h1 onClick={handleAboutClick} className="mb-5">
          <u>About</u>
        </h1>
      </Container>
      {tabTog()}
    </Container>
  );
}

export default App;
