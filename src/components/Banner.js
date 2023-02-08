import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/banner.webp";

export function Banner({ language }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const deletingPeriod = Math.random() * 150 + 100;
  const typingPeriod = Math.random() * 320 + 180;
  const [period, setPeriod] = useState(typingPeriod);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, period);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    const setFullText = () => {
      if (language === "english") return "Frontend Web Developer";
      else return "Desarrolador Web Frontend";
    };
    let fullText = setFullText();
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setPeriod(deletingPeriod);
    } else setPeriod(typingPeriod);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
    }
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="alling-items-center">
          <Col xs={12} md={12} lg={7} xl={6}>
            <article>
              <span className="tagline d-flex align-items-center justify-content-center d-sm-inline-block">
                {language === "english"
                  ? "Welcome to my portfolio"
                  : "Bienvenidos a mi portafolio"}
              </span>
              <h1>
                {language === "english"
                  ? "Hi, I'm Freddy Alfonzo"
                  : "Hola, Soy Freddy Alfonzo"}{" "}
                <br></br>
                <span className="wrap">{text}</span>
              </h1>

              <p>
                {language === "english"
                  ? "I am a self-taught React frontend developer interested in working full remotely offering my services. Looking to improve myself, learn new technologies every day and get more experience in the IT world. Currently focusing on javascript backend technologies to become a fullstack developer. After learning those technologies i will start making some personal fullstack projects to put on this portfolio."
                  : "Soy un programador frontend autodidácta (React.js) con intereses en trabajar ofreciendo mis servicios de forma remota. En busca de mejorar como desarrollador, aprender nuevas tecnologías cada día y obtener experiencia en el mundo tecnológico. Actualmente estoy enfocado en aprender tecnologias backend de javascript para convertirme en un desarrollador fullstack. Luego de aprender dichas tecnologías construiré proyectos personales fullstack que pondré en este portafolio."}
              </p>
            </article>
          </Col>
          <Col xs={12} md={12} lg={5} xl={6} className="mt-lg-5">
            <img src={headerImg} alt="headerImg" className="ms-lg-5" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
