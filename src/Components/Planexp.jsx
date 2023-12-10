// import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Style/Planexp.module.css";
const Planexp = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col sm={5} className={styles.col}>
            <h3 className={styles.heading}>
              Plan your next <br /> experience with <br />
              DatePlatter,
              <br />
              to create perfect <br /> moments.
            </h3>
            <p className={styles.para}>
              Introducing DatePlatter, a cutting-edge solution to the intricate
              challenges of experience planning. Powered by AI, this platform is
              set to usher in a new era of effortless and intuitive experiences,
              revolutionizing everything from personal celebrations to corporate
              gatherings. Bid farewell to the arduous and time-consuming process
              of event management and welcome the convenience and enchantment of
              DatePlatter.
            </p>
          </Col>
          <Col sm={7} className={styles.col2}>
            <div className={styles.mobframe}>
              <img
                className={`${styles.img} img-fluid`}
                src="/Images/gif2.gif"
                alt="kjdghfkrjde"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Planexp;
