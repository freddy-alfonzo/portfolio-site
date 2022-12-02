import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/project-img.jpg";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export function Projects({ language }) {
  const setProjects = () => {
    if (language === "english") {
      return [
        {
          title: "VPN Landing Page",
          description:
            "Mordern landing page for a VPN company that wants to sell its product",
          imgUrl: projImg1,
          link: "https://xayavpn.netlify.app",
          repository: "https://github.com/freddy-alfonzo/vpn-landing-page",
          target: "_blank"
        },
        {
          title: "Spotify clone",
          description:
            "Clone of spotify app consuming an music API and same functionalities",
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects"
        },
        {
          title: "Movies App",
          description:
            "A movies app consuming an API where you can find all movies and trailers",
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects"
        },
        {
          title: "Weather app",
          description:
            "Weather app that tracks your location or allow you to search for any other location",
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects",
          
        },
      ];
    } else {
      return [
        {
          title: "Página a empresa VPN",
          description:
            "Pagina moderna para una compañia que ofrece servicios VPN y busca promocionarse",
          imgUrl: projImg1,
          link: "https://xayavpn.netlify.app",
          repository: "https://github.com/freddy-alfonzo/vpn-landing-page",
          target: "_blank"
          
        },
        {
          title: "Clon de Spotify",
          description: `Clon de la aplicación de música "Spotify" con todas sus funcionalidades`,
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects"
        },
        {
          title: "Aplicación de Películas",
          description:
            "Aplicación donde puedes encontrar todas las películas y sus trailers",
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects"
        },
        {
          title: "Aplicación del Clima",
          description:
            "Aplicación que accede a tu ubicación o te permite buscar en cualquier parte del mundo",
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects"
        },
      ];
    }
  };
  const projects = setProjects();

  return (
    <section className="project" id="projects">
      <img className="background-image-right" src={colorSharp2} alt="bgimg2" />
      <Container>
        <Row>
          <Col size={12} sm={12}>
            <h2>{language === "english" ? "Projects" : "Proyectos"}</h2>
            <p>
              {language === "english"
                ? "Currently, i am building these frontend projects using technologies as ReactJS, a preprocessor as SASS and CSS frameworks such as Tailwind or Bootstrap"
                : "Actualmente me encuentro construyendo estos proyectos frontend con tecnologías como ReactJS, un preprocesador como SASS y frameworks de CSS como Tailwind o Bootstrap"}
            </p>
          </Col>

          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </Container>
    </section>
  );
}
