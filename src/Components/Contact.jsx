import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./Contact.css";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BiSolidTimeFive } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [moroccoTime, setMoroccoTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yk8g4sq",
        "template_ukdosqa",
        formData,
        "vYsUdrWvFVz2rdXXc"
      )
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          toast.success("Message sent successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Message sending failed:", error);
          toast.error("Message sending failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const moroccoDate = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Casablanca",
      });
      setMoroccoTime(moroccoDate);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="contact">
      <Container>
        <ToastContainer />
        <Row className="row">
          <Col lg={12}>
            <h1>HAVE SOME QUESTIONS ?</h1>
            <h5>
              <span>
                <GiEarthAfricaEurope /> &nbsp; Morocco
              </span>
              <span>
                <BiSolidTimeFive />
                &nbsp; {moroccoTime}
              </span>
            </h5>
          </Col>
          <Col lg={12} className="contact-form">
            <Form onSubmit={handleSubmit} className="form">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleInputChange}
                required
              />

              <br />

              <Form.Control
                type="email"
                name="email"
                placeholder="What's your email ?"
                value={email}
                onChange={handleInputChange}
                required
              />

              <br />

              <Form.Control
                className="textarea"
                as="textarea"
                name="message"
                placeholder="Your questions ..."
                value={message}
                onChange={handleInputChange}
                style={{ height: "150px" }}
                required
              />

              <br />
              <Button variant="light" type="submit" className="send-btn">
                <BsSendFill /> SEND MESSAGE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
