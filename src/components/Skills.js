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
import typescript from "../assets/img/typescript.svg"
import next from "../assets/img/next.png"
import bootstrap from "../assets/img/bootstrap.svg";
import tailwind from "../assets/img/tailwind.png";
import git from "../assets/img/git.svg";
import redux from "../assets/img/redux.svg";
import reactNative from "../assets/img/reactnative.svg";
import electron from "../assets/img/electron.svg";
import nodejs from "../assets/img/nodejs2.svg";
import express from "../assets/img/express.svg";
import mongodb from "../assets/img/mongodb.svg";
import mysql from "../assets/img/mysql.svg";
import graphql from "../assets/img/graphql.svg";
import jest1 from "../assets/img/jest.svg";
import cypress from "../assets/img/cypress.svg";

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
                  ? "These are the technologies i have laboral experience with and used on my projects/portfolio"
                  : "Estas son las tecnologías con las que tengo experiencia laboral y he usado en mis proyectos/portafolio"}
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
                  <img src={typescript} alt="typescript svg"></img>
                  <h5> Typescript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react svg"></img>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={reactNative} alt="react svg"></img>
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={electron} alt="react svg"></img>
                  <h5>Electron</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="redux svg"></img>
                  <h5>Redux Toolkit</h5>
                </div>
                <div className="item">
                  <img src={next} alt="next png" style={{width:"56%"}}></img>
                  <h5 style={{marginTop:"-6%" }}> NextJS</h5>
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
                <div className="item">
                  <img src={nodejs} alt="git svg"></img>
                  <h5> NodeJS</h5>
                </div>
                <div className="item">
                  <img src={express} alt="git svg"></img>
                  <h5> Express</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="git svg"></img>
                  <h5> MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="git svg"></img>
                  <h5> MySQL</h5>
                </div>
                <div className="item">
                  <img src={graphql} alt="git svg"></img>
                  <h5>GraphQL</h5>
                </div>
                <div className="item">
                  <img src={jest1} alt="git svg"></img>
                  <h5>Jest</h5>
                </div>
                <div className="item">
                  <img src={cypress} alt="git svg"></img>
                  <h5>Cypress</h5>
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
