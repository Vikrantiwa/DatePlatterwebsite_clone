import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Style/Topmidsec.module.css";

const Topmidsec = () => {
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
      <Container
        className={`${styles.container} ${
          isScrolled ? "animate__animated animate__zoomIn" : ""
        }`}
      >
        <Row className={`${styles.row} `}>
          <Col sm={6} className={styles.col1}>
            <div className={styles.textdiv}>
              <p className={`${styles.text} text-break`}>
                AI based <br /> Moments Platting <br />
                Platform to plan your <br /> experience !!
              </p>
            </div>
            <div className={styles.textdiv}>
              <p className={`${styles.text} text-break`}>
                DatePlatter is an AI powered platform thats here to change
                <br />
                the way you plan your <br />
                experiences.
              </p>
            </div>
            <button className={`${styles.btn}`}>comingsoon...</button>
          </Col>
          <Col sm={6} className={`${styles.col2} `}>
            <div className={styles.mobframe}>
              <div
                className={`${styles.mobimg} `}
                // src="/Images/0ea41f567ff2728f07080fb0f1d220c3.jpg"
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Topmidsec;
