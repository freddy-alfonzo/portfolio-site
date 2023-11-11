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
      if (language === "english") return "Fullstack Javascript Developer";
      else return "Desarrollador Fullstack Javascript";
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
                  ? "I am a Fullstack Javascript Developer with experience in leading projects and collaborating with teams to ensure robust and high-quality solutions within the requested timeframe. I am patient, proactive, and communicative, enabling me to effectively work within multidisciplinary teams and meet the deadlines required by the company or client. I am eager to join a dynamic team and contribute the company with my skills and experience."
                  : "Soy un desarrollador Fullstack (Javascript) con experiencia en liderar proyectos y trabajar en equipo para garantizar soluciones sólidas y de alta calidad en el tiempo límite solicitado. Soy paciente, proactivo y comunicativo, lo que me permite colaborar eficazmente en equipos multidisciplinarios y cumplir con los plazos requeridos por la empresa o cliente. Estoy entusiasmado por unirme a un equipo dinámico y contribuir a la empresa con mis habilidades y experiencia."}
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
