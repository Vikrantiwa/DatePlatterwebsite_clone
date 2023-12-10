import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topsec from "./Components/Topsec";
import Topmidsec from "./Components/Topmidsec";
import Planexp from "./Components/Planexp";
import Aboutdateplatter from "./Components/Aboutdateplatter";
import Dateplatter from "./Components/Dateplatter";
import Experience from "./Components/Experience";
import "./App.css";
import { Footer } from "./Components/Footer";
import Recogination from "./Components/Recogination";
// import "animate.css";
// import Recogination from "./Components/Recogination";
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check the scroll position of the page
      const scrollY = window.scrollY;

      // Set isScrolled based on the scroll position
      setIsScrolled(scrollY > 0);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container fluid>
        <Row className="bg-dark ">
          <Col>
            <Topsec />
          </Col>
        </Row>
        <Row
          className={`bg2  ${
            isScrolled ? "animate__animated animate__zoomIn" : ""
          }`}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <Col>
            <Topmidsec />
          </Col>
        </Row>
        <Row className="">
          <Col>
            <Planexp />
          </Col>
        </Row>
        <Row>
          <Col>
            <Aboutdateplatter />
          </Col>
        </Row>
        <Row className=" mx-auto dateplater">
          <Col className="">
            <Dateplatter />
          </Col>
        </Row>
        <Row className="mt-4 exper">
          <Col className=" text-center ">
            <Experience />
          </Col>
        </Row>
        <Row className="  ">
          <Col className=" text-center ">
            <Recogination />
          </Col>
        </Row>
        <Row className="  ">
          <Col className=" text-center ">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
