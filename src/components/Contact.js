import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = ({ language }) => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const setButtonLanguage = () => {
    if (language === "english") {
      return "Send";
    } else {
      return "Enviar";
    }
  };
  const button = setButtonLanguage();

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(button);
  const [status, setStatus] = useState({});

  useEffect(() => {
    setButtonText(button);
  }, [language, button]);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let namesRegExp = /^([a-zA-ZùÙüÜäàáëèéïìíöòóüùúÄÀÁËÈÉÏÌÍÖÒÓÜÚñÑ\s]+)$/;
    let emailRegExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    let phoneRegExp = /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm;
    let firstNameOK = namesRegExp.test(formDetails.firstName);
    let lastNameOK = namesRegExp.test(formDetails.lastName);
    let emailOK = emailRegExp.test(formDetails.email);
    let phoneOK = phoneRegExp.test(formDetails.phone);

    if (firstNameOK === false) {
      setStatus({
        success: false,
        message: "Invalid first name ",
        message2: "Nombre inválido",
      });
      return;
    }
    if (lastNameOK === false) {
      setStatus({
        success: false,
        message: "Invalid last name ",
        message2: "Apellido inválido",
      });
      return;
    }
    if (emailOK === false) {
      setStatus({
        success: false,
        message: "Invalid email",
        message2: "Email inválido",
      });
      return;
    }
    if (phoneOK === false) {
      setStatus({
        success: false,
        message: "Invalid phone number",
        message2: "Número de teléfono inválido",
      });
      return;
    }
    if (formDetails.message === "") {
      setStatus({
        success: false,
        message: "Write a message",
        message2: "Escribe un mensaje",
      });
      return;
    }
      //SERVER.JS nodemailer config

   /* if (language === "english") {
      setButtonText("Sending...");
    } else {
      setButtonText("Enviando...");
    }

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText(button);
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent successfully",
        message2: "Mensaje enviado correctamente",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
        message2: "Algo salió mal, por favor intente más tarde",
      });
    } */
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2 className="d-flex justify-content-center">
                {language === "english" ? "Get in Touch" : "Contacto"}
              </h2>
              <form method="POST" data-netlify="true">
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder={
                        language === "english" ? "First name" : "Nombre"
                      }
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder={
                        language === "english" ? "Last name" : "Apellido"
                      }
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.email}
                      placeholder={
                        language === "english"
                          ? "Email Address"
                          : "Correo Eléctronico"
                      }
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder={
                        language === "english"
                          ? "Phone number"
                          : "Número de Teléfono"
                      }
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder={
                        language === "english" ? "Message" : "Mensaje"
                      }
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                  </Col>
                  <Col size={12} sm={12}>
                    <button type="submit" className="d-flex my-0 mx-auto">
                      <span>{buttonText}</span>
                    </button>
                  </Col>

                  <Col size={12} sm={12}>
                    <p
                      className={
                        status.success === false
                          ? "danger m-2 text-center fs-5"
                          : "success m-2 text-center fs-5"
                      }
                    >
                      {language === "english"
                        ? status.message
                        : status.message2}
                    </p>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
