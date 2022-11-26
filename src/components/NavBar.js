import { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export function NavBar({ language, setLanguage }) {
  const [activeLink, setActiveLink] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <header>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container fluid className="p-0 px-lg-3">
          <div className="nav-box"></div>
          <Navbar.Brand href="#about">Freddy Alfonzo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about"
                    ? "active navbar-link about"
                    : "navbar-link about"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                {language === "english" ? "About" : "Sobre mi"}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {language === "english" ? "Skills" : "Tecnologías"}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                {language === "english" ? "Projects" : "Proyectos"}
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                {language === "english" ? "Contact" : "Contacto"}
              </Nav.Link>

              <NavDropdown
                title={language === "english" ? "Language" : "Idioma"}
                id="basic-nav-dropdown"
                className="nav-link navbar-link"
              >
                <NavDropdown.Item onClick={() => setLanguage("spanish")}>
                  {language === "english" ? "Spanish" : "Español"}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setLanguage("english")}>
                  {language === "english" ? "English" : "Inglés"}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
