import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import footer1 from "./footer1.png";

function Footer() {
  return (
    <footer className="footer">
      {" "}
      {/* Usa la clase que definiste */}
      <Container>
        <Row>
          <Col className="text-center py-3"> Información de contacto: </Col>
          <Col className="text-center py-3"> </Col>
          <Col className="text-center py-3"> </Col>
          <Col className="text-center py-3"> VIO Cosmetics</Col>
        </Row>
        <Row>
          <Col className="text-center py-3"> viocosmetics@hotmail.com </Col>
          <Col className="text-center py-3"> </Col>
          <Col className="text-center py-3"> </Col>
          <Col className="text-center py-3"> </Col>
        </Row>
        <Row>
          <Col className="text-center py-3"> +52 656 134 24 65 </Col>
          <Col className="text-center py-3"> </Col>
          <Col className="text-center py-3"> </Col>
          <img src={footer1} alt="" height="130" />
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
