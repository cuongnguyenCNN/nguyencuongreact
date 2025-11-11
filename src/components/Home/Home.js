import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../Projects/Projects";
import About from "../About/About";

function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    if (!form.name || !form.email || !form.message)
      return "Please fill in all fields.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Invalid email format.";
    return "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setErrors(err);

    setLoading(true);
    setErrors("");
    setSuccess("");
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxKtlx_w4LsVGLvYdaUbH4aTchHyvIOOoqrK8DLRDFw1Jcllk6Wq5Xksi1EFFMYdZeN/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        }
      );
      const text = await response.text();
      if (text === "Success") {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else throw new Error("Failed to send");
    } catch (err) {
      setErrors("Something went wrong. Try again.");
    }
    setLoading(false);
  };
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Cuong Nguyen</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects></Projects>
      <About></About>
      <Container>
        {/* <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cuongnguyencnn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/cuongnguyencnn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cuong-nguyen-ngoc-2b7352140/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/cuongnguyencnn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h2
              className="project-heading pb-4"
              style={{ paddingBottom: "20px" }}
            >
              📩 Contact <strong className="purple"> Me</strong>
            </h2>
            <Form onSubmit={handleSubmit} className="text-start">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your message..."
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {errors && <p className="text-red-500 text-sm">{errors}</p>}
              {success && <p className="mt-3 text-success">{success}</p>}
              <div className="text-center">
                <Button variant="primary" type="submit" className="px-4">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <br></br>
    </section>
  );
}

export default Home;
