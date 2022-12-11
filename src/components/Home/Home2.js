import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={6}>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item"
            src="https://www.youtube.com/embed/WyprXhvGVYk" 
            title="What are the most important moral problems of our time? | Will MacAskill" 
            allowfullscreen >
            </iframe>
          </div>
          </Col>
          <Col md={6} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              How to do <span className="purple"> Good Better </span> ?
            </h1>
            <p className="home-about-body">
              Everyone wants to do <b className="purple">good</b>, but many ways of doing good are 
              <b className="purple"> ineffective </b> or <b className="purple">actively harmful</b>. 
              The EA community arose out of a desire to make sure that attempts to do good <b className="purple">
              actually</b> work. We want to help people question deeply <b className="purple">what</b> it means to do good, <b className="purple">why</b> doing good 
              matters, and <b className="purple">how</b> they can play a role in solving some 
              of the world's <b className="purple">biggest problems</b>.
              <br />
              <br />
              <b className="purple">Arete Fellowship NYU Shanghai</b> is a community of caring, rationally-minded people trying to apply the principles of <b className="purple">effective altruism </b>
              to help everyone have a larger positive social impact with their lives, 
              whether that's by pursuing a <b className="purple">high impact career</b> that tackles a pressing global problem or 
              through <b className="purple">donating</b> to effective charities.
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find out more</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:nyush.arete@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
       
              <li className="social-icons">
                <a
                  href="https://twitter.com/afnyush"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/afnyush/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
