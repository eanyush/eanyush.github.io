import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FellowshipCards from "./ProjectCards";
import Particle from "../Particle";
import ea_reading from "../../Assets/ea_reading.jpg";
import second_d from "../../Assets/second_d.svg";
import DSC_6129_JPG from "../../Assets/DSC_6129_JPG.webp";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/F22_NYUSH_Syllabus.pdf"; 
import { AiOutlineDownload } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import FAQ from './FAQ.js';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// import leaf from "../../Assets/Fellowship/leaf.png";
// import emotion from "../../Assets/Fellowship/emotion.png";
// import editor from "../../Assets/Fellowship/codeEditor.png";
// import chatify from "../../Assets/Fellowship/chatify.png";
// import suicide from "../../Assets/Fellowship/suicide.png";
// import bitsOfCode from "../../Assets/Fellowship/blog.png";
const resumeLink =
  "https://drive.google.com/file/d/11a62xtOVeTZx3TXyunrFZHHnJzXMpakZ/view?usp=sharing";

function Fellowship() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  const [faqs, setfaqs] = useState([
    {
      question: 'What is the format of the Arete Fellowship?',
      answer: 'The Fellowship is a series of eight 1 hour-long in-person discussions with 5-8 participants and 1-2 discussion leaders in each section. Before each meeting, participants will be provided with required readings. Discussion leaders will prompt participants with questions related to the readings, but most of the conversation is carried by the participants.  ',
      open: true
    },
    {
      question: 'When will sections be held? What if I can\'t make one of the times?',
      answer: 'A list of time slots is listed in the application.  If you cannot make any of the meeting times, then we will try to accommodate your time preferences; if we cannot accommodate them, then you are free to do the Arete Fellowship another semester without needing to reapply.',
      open: false
    },
    {
      question: 'Who should apply for the Arete Fellowship?',
      answer: 'The Fellowship is an excellent introduction to effective altruism (EA) for NYU students of any major (or school) who have never heard of EA or are not heavily engaged with EA. For those already involved in EA, please explore the Arete fellowship website or contact current members of Arete Fellowship NYU Shanghai or EA NYU for more targeted opportunities to be involved.',
      open: false
    },
    {
      question: 'How much time do participants need to commit?',
      answer: 'Readings for each meeting are expected to take around one hour. Each meeting is also one hour long, with an option to stay for longer for ongoing discussion.  There are eight weeks in total. ',
      open: false
    },
    {
      question: 'Can I participate in the Arete Fellowship if I\'m not a NYU student?',
      answer: 'Anyone affiliated with any NYU school can join the Arete Fellowship.  If you are not affiliated with NYU, we recommend that you check out the Introductory EA Virtual Program (https://www.effectivealtruism.org/virtual-programs/introductory-program).',
      open: false
    },
    {
      question: 'What\'s the timeline for the Fellowship, including application due date?',
      answer: 'The application window is usually the first few weeks of classes, and the Fellowship itself lasts eight weeks.',
      open: false
    },
    {
      question: 'Whom do I contact with additional questions?',
      answer: 'Please email nyush.arete@gmail.com with any additional questions.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <section>
    <Container fluid className="fellowship-section">
      <Particle />
      <Container>
        <h1 className="fellowship-heading">
          <strong className="purple">Arete </strong>Fellowship
        </h1>
        <Row>
          <Col md={5}>
          <img 
                src={ea_reading}
                alt="ea reading princeton"
                className="img-fluid"
                style={{ maxHeight: "450px", paddingBottom: 10 }}
              />
            
            Representative image of a Princeton reading group, discussing effective careers in government
          </Col>
          <Col md={7} className="fellowship-first">
            <p>
              The Arete fellowship is a 8-week program 
          where fellows learn how to maximize their 
          positive impact to tackle the biggest issues 
          humanity faces today.
            </p>
            <p>
              Our readings will cover topics ranging from Animal Welfare to AI Safety, and from Extreme Poverty to Global Catastrophic Risks. During the program, fellows will actively lead and engage in intensive discussions revolving around ideas and strategies to mitigate these global issues.
            </p>
            <p> 
              As an Arete Fellow, you will join a global community of scholars from Oxford, Harvard, Yale, Stanford, Brown, and many renowned institutions around the world for networking, research, and entrepreneurship opportunities.

              </p>        
          </Col>
        </Row>

        <Row>
        <Col md={14}>
        <span id="diamond" className="wave" role="img" aria-labelledby="wave">
        </span>
        </Col>
        </Row>

        <Row>
        <Col md={9}>
        <h1 className="fellowship-subheading">
              What is the <span className="purple"> fellowship </span> ?
            </h1>
        </Col>
        </Row>

        <Row className="fellowship-first">
        <Col md={9}>
        <p> Some efforts to improve the world can be much more impactful than others. Smallpox eradication, the abolitionist movement, germ theory, and the Green Revolution demonstrate what's possible when people come together to solve pressing problems. </p>
        <p>But these exceptional opportunities to do good are few and far between. At the other end of the spectrum, many well-intentioned initiatives are ineffective or even counterproductive. Doing good better is one of the defining challenges of our time. Recognizing this need, we established the Arete Fellowship to equip students with the knowledge to do good in the world more effectively, and the tools to think critically about their career ambitions.</p> 
        <p>By the end of the term, fellows have the knowledge of a few key large-scale and neglected global problems, tools for prioritizing among them, and practical interventions for solving them. Fellows also have access to in-depth career advice and connections. We look forward to learning with you.
        </p>
        </Col>
        <Col md={3}>
        <img 
                src={second_d}
                alt="help symbol https://attractionsymbols.com/as-dictionary/"
                className="img-fluid"
                style ={{ width: "100%"}}
                // style={{ maxHeight: "250px" }}
              />
        </Col>
        </Row>

        <Row>
          <span className="hrl"></span>
        </Row>
        
        <Row className="fellowship-syllabus">
          <Col md={4}>
            <Row>
             <Document file={pdf} className="d-flex justify-content-center" >
            <Page pageNumber={1} scale={0.6} />
          </Document> 

          </Row>
          <Row className="syllabus-button">
          
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download Syllabus
          </Button>
          </Row>

          
          </Col>
          
          <Col md={8} className="fellowship-first">
          <h1 className="fellowship-subheading2">
                What to <span className="purple"> expect </span>?
              </h1>

        <p> To get an idea of what to expect, you can see the curriculum for the previous term's fellowship. </p>
        <p> The fellowship is designed for people who are not already familiar with Effective Altruism. However, we recommend that interested applicants watch or read an introduction to Effective Altruism first, in order to give you some idea of what to expect: </p> 
        <ul><li>Watch this <a href="https://www.youtube.com/watch?v=qmSe9xC5N2w">talk</a></li>
        <li>Or read <a href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/">this article</a></li>
        </ul>
        </Col>
        </Row>

        <Row>
        <Col md={14}>
        <span id="diamond" className="wave" role="img" aria-labelledby="wave">
        </span>
        </Col>
        </Row>

        <Row>
        <Col md={7} className="fellowship-first">
        <h1 className="fellowship-subheading">
              What are the <span className="purple"> requirements </span> ?
            </h1>
        <ul>
          <li>Willingness to spend 2-3 hours each week preparing for the meeting</li>

          <li>Commitment to attending all eight weekly sessions (unless unforeseen circumstances arise)</li>

          <li>Excitement about making a positive impact</li>

          <li>Openness to changing your mind</li>

        </ul>
        <p>The fellowship is open to all, whether you're an undergraduate, postgraduate or a faculty member of NYU Shanghai. We are committed to building a diverse cohort of fellows. Evidence suggests that underprivileged individuals tend to underestimate their abilities. We do not want the application process to dissuade potential candidates and we strongly encourage interested students to apply regardless of gender, race, ethnicity, nationality, ability, etc.
        </p>
        </Col>
        <Col md={5}>
          <img 
                src={DSC_6129_JPG}
                alt="ea disc mit"
                className="img-fluid"
                style={{ maxHeight: "460px", paddingBottom: 10, paddingTop: 100, paddingLeft: 30}}
              />
            
            <p>MIT discussion group &#169; EA MIT </p>
          </Col>
          </Row>
        
        
          <h1 className="fellowship-subheading">
              <span className="purple"> FAQs </span>
            </h1>

          <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>

      </Container>
    </Container>

  
    
    </section>
  );
}

export default Fellowship;
