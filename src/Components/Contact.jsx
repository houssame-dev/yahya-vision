import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Contact.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillCircleFill, BsClock } from "react-icons/bs";
import { useLocation } from "react-router-dom";

function Contact() {
  const currentYear = new Date().getFullYear();
  const authorName = "Yahyavision";
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

  return (
    <div className="contact">
      <ToastContainer />
      <div className="second-contact">
        <Row className="row">
          <Col lg={12}>
            <div className="wrapper">
              <div>
                <span>Say</span>
                <div className="scroller">
                  <div>
                    <span>hello.</span>
                    <span>bonjour.</span>
                    <span>hola.</span>
                    <span>مرحبًا.</span>
                    <span>hello.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-para">
              <span>
                Want to kick off a project and need a special spark? Get in
                touch!
              </span>
            </div>
            <div className="contact-available">
              <BsFillCircleFill className="avl" />
              <span>Available for work</span>
            </div>
          </Col>
          <Col lg={8} xl={7} xxl={6} className="contact-form">
            <Form onSubmit={handleSubmit} className="form">
              <div className="name-email">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </div>
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
              <Button variant="light" type="submit" className="send-btn">
                Send
              </Button>
              <div className="avg">
                <span className="a">
                  <BsClock /> Avg. response
                </span>
                <span className="b">01 hour</span>
              </div>
            </Form>
          </Col>
        </Row>
        <div className="copyright">
          <span>
            &copy; {currentYear} {authorName}.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
