import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Style/Dateplatter.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
const Dateplatter = () => {
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
        className={`${styles.container} `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Row className={`${styles.row1} `}>
          <Col className={`${styles.colheading}  text-center`}>
            DatePlatter for All...
          </Col>
        </Row>
        <Row className={styles.row2}>
          <Col sm={3} className={`${styles.col1} text-center`}>
            <Card className={`${styles.card}`}>
              <Card.Body className={`${styles.cardbody}`}>
                <Card.Title className={`${styles.title}`}>
                  Advance intuitive tools to visualize and personalize the
                  complete experience journey.
                </Card.Title>
                <Card.Img
                  className={`${styles.img1} img-fluid`}
                  src="/Images/img5.jpg"
                />

                <Button className={`${styles.btn}`} variant="primary">
                  for individuals
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className={`${styles.col2} text-center `}>
            <Card className={`${styles.card}`}>
              <Card.Body className={`${styles.cardbody}`}>
                <Card.Title
                  className={`${styles.title} ${
                    isHovered ? "animate__animated animate__zoomIn" : ""
                  }`}
                >
                  Centralized Platform for the stress and hassle of planning and
                  managing customer experiences
                </Card.Title>
                <Card.Img
                  className={`${styles.img1} img-fluid`}
                  src="/Images/img6.jpg"
                />

                <Button className={`${styles.btn}`} variant="primary">
                  for small businesses
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className={`${styles.col3} text-center `}>
            <Card className={`${styles.card}`}>
              <Card.Body className={`${styles.cardbody}`}>
                <Card.Title className={`${styles.title}`}>
                  Data analytics and insights using AI to optimize planning and
                  execution strategy.
                </Card.Title>
                <Card.Img
                  className={`${styles.img1} img-fluid`}
                  src="/Images/img7.jpg"
                />

                <Button className={`${styles.btn}`} variant="primary">
                  for enterprises
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dateplatter;
