import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import html5 from "../assets/img/html5.svg";
import css3 from "../assets/img/css3.svg";
import sass from "../assets/img/sass2.svg";
import react from "../assets/img/react.svg";
import javascript from "../assets/img/javascript.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import tailwind from "../assets/img/tailwind.png";
import git from "../assets/img/git.svg";
import redux from "../assets/img/redux.svg";

export function Skills({ language }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>{language === "english" ? "Skills" : "Tecnologías"}</h2>
              <p>
                {language === "english"
                  ? "These are the technologies i have experience with and the ones that i used on my portfolio"
                  : "Estas son las tecnologías con las que tengo experiencia y he usado en mi portafolio"}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html5} alt="html5 svg"></img>
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="css3 svg"></img>
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="sass svg"></img>
                  <h5> SASS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript svg"></img>
                  <h5> Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react svg"></img>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="redux svg"></img>
                  <h5>Redux Toolkit</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap svg"></img>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="tailwind png" color="red"></img>
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={git} alt="git svg"></img>
                  <h5> GIT</h5>
                </div>
                              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bgimg" />
      <img className="background-image-right" src={colorSharp2} alt="bgimg2" />
    </section>
  );
}
