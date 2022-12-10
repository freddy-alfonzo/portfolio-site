import { Col } from "react-bootstrap";

export const ProjectCard = ({ language, title, description, imgUrl, link, repository, target="" }) => {
  return (
    <>
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project card img" />
        <div className="proj-txtx">
          <h4 className="d-none d-lg-block">{title}</h4>
          <span className="d-none d-lg-block">{description}</span>
          <br></br>
          <a
            className="tagline my-2"
            href={link}
            target={target}
            rel="noreferrer"
          >
            {language === "english" ? "See page" : "Ver página"}
          </a>
          <a
            className="tagline"
            href={repository}
            target={target}
            rel="noreferrer"
          >
            {language === "english" ? "Repository" : "Repositorio"}
          </a>
        </div>
      </div>
      <div className="proj-txtx2 text-center mb-5 d-lg-none">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a
            className="tagline my-2"
            href={link}
            target={target}
            rel="noreferrer"
          >
            {language === "english" ? "See page" : "Ver página"}
          </a>
          <a
            className="tagline"
            href={repository}
            target={target}
            rel="noreferrer"
          >
            {language === "english" ? "Repository" : "Repositorio"}
          </a>
        </div>
    </Col>
    
    </>
    
  );
};
