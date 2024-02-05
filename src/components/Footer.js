import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import spanishCV from "../assets/img/FreddyAlfonzoCV.pdf"
import englishCV from "../assets/img/CVFreddyAlfonzo.pdf"


export const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="align-items-center p-3">
          <Col lg={6}>
            <h3 className="fw-bold p-4 m-0 d-none d-lg-block">
              Freddy Alfonzo
            </h3>
          </Col>
          <Col
            size={12}
            lg={6}
            className="text-center text-sm-center text-lg-end"
          >
            <span> freddy.alfonzo01@gmail.com</span>
            <nav className="social-icon">
              <a
                href="https://github.com/freddy-alfonzo"
                target="_blank"
                rel="noreferrer"
                title="GitHub"

              >
                <img src={navIcon1} alt="github-icon" />
              </a>
              <a
                href="https://linkedin.com/in/freddyalfonzo/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <img src={navIcon2} alt="linkedin-icon" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJbPfwBnBKSfhcjsZDvVlNLnpcWnrRnptWkTVtbVSpjtsKLjRPfCjwTVWsFVrmRgfPxg"
                target="_blank"
                rel="noreferrer"
                title="Email"
              >
                <img src={navIcon3} alt="email-icon" />
              </a>
              <a
                href={language === "english" ? englishCV : spanishCV}
                download={language === "english" ? "Freddy Alfonzo resume" : "Freddy Alfonzo CV"}
                title={language === "english" ? "Download resume" : "Descargar CV"}
              >
                <img src={navIcon4} alt="email-icon" />
              </a>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
