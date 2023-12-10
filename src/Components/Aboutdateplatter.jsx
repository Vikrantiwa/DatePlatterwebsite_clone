// import React from 'react'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Style/Aboutdateplatter.module.css";
const Aboutdateplatter = () => {
  return (
    <>
      <Container fluid className={`${styles.container} `}>
        <Row className={styles.row}>
          <Col className={`${styles.colheading} text-center`}>
            A Little About DatePlatter
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col sm={4} className={`${styles.col1} text-center `}>
            <div className={`${styles.heading}`}>01</div>
            <p className={`${styles.para} text-break`}>
              With our customer experience visualization, scoring and
              optimization tools, you can be sure that your experience will be
              the best it can be.
            </p>
          </Col>
          <Col sm={4} className={`${styles.col2} text-center `}>
            <div className={`${styles.heading}`}>02</div>
            <p className={`${styles.para} text-break`}>
              02 With our AI driven data analytics and insights, youll have the
              power to optimize your planning and execution strategy, ensuring
              that every experience is a success.
            </p>
          </Col>
          <Col sm={4} className={`${styles.col3} text-center `}>
            <div className={`${styles.heading}`}>03</div>
            <p className={`${styles.para} text-break`}>
              03 Powered with experience orchestration and recommendation tools,
              DatePlatter has it all, to create everlasting memorable moments
              for all planned experiences.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Aboutdateplatter;
