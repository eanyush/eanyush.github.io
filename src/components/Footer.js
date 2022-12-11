import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Arete Fellowship NYU Shanghai</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:nyush.arete@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/afnyush/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/afnyush/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
