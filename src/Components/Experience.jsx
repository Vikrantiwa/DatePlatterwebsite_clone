import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Style/Experience.module.css";
import "animate.css";
const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Container
        className={styles.container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Row className={styles.row1}>
          <Col className={`${styles.experience} text-center`}>
            Plan Experience, Create Moments with AI
          </Col>
        </Row>
        <Row className={styles.row2}>
          <Col sm={5} className={styles.col1}>
            <div className={styles.imgage}>
              <video
                autoPlay
                muted
                loop
                className={`${styles.myVideo} ${
                  isHovered ? "animate__animated animate__zoomIn" : ""
                }`}
                id="myVideo"
              >
                <source
                  src="/Images/DatePlatter - Plan Experience Create Moments - Personal - Microsoft_ Edge 2023-12-07 15-13-48 (online-video-cutter.com).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Col>
          <Col sm={7} className={`${styles.col2}`}>
            <div className={`${styles.paragraph}`}>
              <p
                className={`${styles.p} ${
                  isHovered ? "animate__animated animate__lightSpeedInLeft" : ""
                }`}
              >
                At DatePlatter, were leveraged the latest technology, combining
                it with human expertise to provide a service thats truly unique.
              </p>
            </div>
            <div className={`${styles.paragraph}`}>
              <p className={`${styles.p}`}>
                Access to intuitive tools that allow you to design and
                personalize your experience journey.
              </p>
            </div>
            <div className={`${styles.paragraph}`}>
              <p className={`${styles.p}`}>
                DatePlatter is not just a platform, its a revolution in event
                tech, making experience planning simple and smart.
              </p>
            </div>
            <div className={`${styles.paragraph}`}>
              <p className={`${styles.p}`}>
                No more stress, no more hassle, just the joy of planning an
                experience that truly reflects your vision.
              </p>
            </div>
            <div className={`${styles.paragraph}`}>
              <p className={`${styles.p}`}>
                Make your next experience an effortless success with our
                innovative platform.
              </p>
            </div>
            <div className={`${styles.paragraph}`}>
              <p className={`${styles.p}`}>
                were here to save you time, reduce costs and maximize your
                experiences.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience;
