import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/project-img.jpg";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
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
          target: "_blank",
        },
        {
          title: "Spotify clone",
          description:
            "Clone of spotify app consuming an music API where you can play any music, see top charts, top songs around you, artist details page and song details page with lyrics and related songs",
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects",
        },
        {
          title: "TrailerAddict App",
          description:
            "A Trailer app that shows you the video trailer, description, release date and more about any movie or tv show using TMDB API",
          imgUrl: projImg3,
          link: "https://trailer-addict.netlify.app",
          repository: "https://github.com/freddy-alfonzo/trailer-addict",
          target: "_blank",
        },
        {
          title: "Weather app",
          description:
            "Weather app that tracks your location or allow you to search for any other location",
          imgUrl: projImg4,
          link: "https://freddy-weather.netlify.app",
          repository: "https://github.com/freddy-alfonzo/weather-app",
          target: "_blank",
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
          target: "_blank",
        },
        {
          title: "Clon de Spotify",
          description: `Clon de la app de Spotify utilizando un API de musica, en esta app puedes reproducir cualquier cancion, ver los artistas o las canciones populares del momento, el top de canciones alrededor de ti, paginas individuales para cada artista y cada cancion con sus letras.`,
          imgUrl: projImg,
          link: "#projects",
          repository: "#projects",
        },
        {
          title: "TrailerAddict App",
          description:
            "Aplicación donde puedes encontrar todas las películas o series con su trailer,  su descripcion y la fecha de estreno utilizando el API de TMDB",
          imgUrl: projImg3,
          link: "https://trailer-addict.netlify.app",
          repository: "https://github.com/freddy-alfonzo/trailer-addict",
          target: "_blank",
        },
        {
          title: "Aplicación del Clima",
          description:
            "Aplicación que accede a tu ubicación o te permite buscar en cualquier parte del mundo",
          imgUrl: projImg4,
          link: "https://freddy-weather.netlify.app",
          repository: "https://github.com/freddy-alfonzo/weather-app",
          target: "_blank",
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
                ? "I made these frontend projects using technologies as ReactJS, Redux, a preprocessor as SASS and CSS frameworks such as Tailwind or Bootstrap"
                : "Hice estos proyectos frontend con tecnologías como ReactJS, Redux, un preprocesador como SASS y frameworks de CSS como Tailwind o Bootstrap"}
            </p>
          </Col>

          {projects.map((project, index) => {
            return <ProjectCard key={index} language={language} {...project} />;
          })}
        </Row>
      </Container>
    </section>
  );
}
