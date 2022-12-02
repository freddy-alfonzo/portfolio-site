import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={12} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project card img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a
            className="tagline my-2"
            href="https://xayavpn.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            See page
          </a>
          <a
            className="tagline"
            href="https://github.com/freddy-alfonzo/vpn-landing-page"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </Col>
  );
};
