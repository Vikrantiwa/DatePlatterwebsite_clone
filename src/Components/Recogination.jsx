import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Style/Recogination.module.css";
import "animate.css";
const Recogination = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // useEffect(() => {
  //   // Function to handle the scroll event
  //   const handleScroll = () => {
  //     // Check the scroll position of the page
  //     const scrollY = window.scrollY;

  //     // Set isScrolled based on the scroll position
  //     setIsScrolled(scrollY > 0);
  //   };

  //   // Attach the scroll event listener when the component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // Detach the scroll event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Container
        className={styles.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Row>
          <Col>
            <h1>recogination</h1>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col
            sm={4}
            className={`${styles.col1} ${
              isHovered ? "animate__animated animate__zoomIn" : ""
            }`}
          >
            <div className={styles.mobframe}>
              <img
                className={styles.mobimg}
                src="/Images/certi1.jpg"
                alt="dhcd"
              />
            </div>
          </Col>
          <Col sm={4} className={`${styles.col2}  `}>
            <div className={styles.mobframe}>
              <img className={styles.mobimg1} src="/Images/cert3.png" alt="" />
            </div>
          </Col>
          <Col
            sm={4}
            className={`${styles.col3} ${
              isHovered ? "animate__animated animate__zoomIn" : ""
            }`}
          >
            <div className={styles.mobframe}>
              <img className={styles.mobimg} src="/Images/cert2.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Recogination;
