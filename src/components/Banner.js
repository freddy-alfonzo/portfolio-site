import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

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
                  ? "I am a self-taught React frontend developer interested in working full remotely offering my services. Looking to improve myself, learn new technologies every day, get more experience in the IT world and becoming a fullstack web developer. Currently focusing on some personal projects to put on this portfolio. I also have interest in Backend development or any technologie that makes easier the development process; therefore, after building some frontend projects my next goal will be learn backend technologies."
                  : "Soy un programador frontend autodidácta (react.js) con intereses en trabajar ofreciendo mis servicios de forma remota. En busca de aprender nuevas tecnologías cada día, obtener experiencia en el mundo tecnológico y convertirme en desarrollador web fullstack. Actualmente me encuentro construyendo proyectos personales que pondré en este portafolio. También tengo intereses en desarrollo Backend o cualquier tecnología que me facilite el proceso de desarrollo; asi que luego de construir algunos proyectos frontend mi siguiente meta será aprender tecnologías backend."}
              </p>
            </article>
          </Col>
          <Col xs={12} md={12} lg={5} xl={6} className="my-lg-5 my-xl-0">
            <img src={headerImg} alt="headerImg" className="my-lg-5 my-xl-0" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
