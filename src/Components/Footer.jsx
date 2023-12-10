// import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Style/footer.module.css";
import "animate.css";
import {
  FaYoutube,
  FaInstagramSquare,
  FaTwitter,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaLinkedin
} from "react-icons/fa";
export const Footer = () => {
  const youtubeColor = "#FF0000"; // Red
  const linkedinColor = "#0077B5"; // LinkedIn Blue
  const instagramColor = "#E4405F"; // Pink
  const twitterColor = "#1DA1F2"; // Twitter Blue
  const facebookColor = "#1877F2"; // Facebook Blue
  const whatsappColor = "#25D366";
  return (
    <>
      <Container className={`${styles.container}`}>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <h1 className={`${styles.row} `}>DatePlatter</h1>

            <p>
              <span className={`${styles.span} `}>info@dateplatter.com</span>
              <br />
              <span className={`${styles.span} `}>+91-9582560741</span>
            </p>
            <p>
              <span className={`${styles.span} `}>Office Address:</span>
              <br />
              <span className={`${styles.span} `}>
                201, Tower C , Civitech Sampriti, Gh 02/C , <br />
                Sector 77, Noida, Uttar Pradesh - 201301
              </span>
            </p>

            <div className={styles.icons1}>
              <p>Connect with us</p>
              <div className={styles.icons}>
                <FaYoutube style={{ color: youtubeColor }} />
                <FaLinkedin style={{ color: linkedinColor }} />
                <FaInstagramSquare style={{ color: instagramColor }} />
                <FaTwitter style={{ color: twitterColor }} />
                <FaFacebookSquare style={{ color: facebookColor }} />
                <FaWhatsappSquare style={{ color: whatsappColor }} />
              </div>
              <div
                className={`${styles.animatedTitle} animate__animated `}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
