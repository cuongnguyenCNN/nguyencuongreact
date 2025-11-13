import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
// import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../contact";

function Home() {
  const [showModal, setShowModal] = useState(false);

  // 👉 Tự động bật modal sau 10 giây và lặp lại
  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setShowModal(true);

      // Lần thứ hai sau 15 giây kể từ lần đầu
      const secondTimeout = setTimeout(() => {
        setShowModal(true);
      }, 15000); // 15s sau lần đầu

      // Dọn dẹp khi component unmount
      return () => clearTimeout(secondTimeout);
    }, 2000); // Hiện lần đầu sau 2s

    // Dọn dẹp khi component unmount
    return () => clearTimeout(firstTimeout);
  }, []);

  const handleClose = () => setShowModal(false);
  return (
    <>
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
        {/* <Home2 /> */}
        <About></About>
        <Projects></Projects>

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
              <h4 style={{ color: "white" }}>
                {" "}
                Let's me help you and receive newsletter
              </h4>
              <Contact></Contact>
            </Col>
          </Row>
        </Container>
        <br></br>
      </section>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <div>
            <Modal.Title>📬 Contact Me</Modal.Title>
            <h4> Let's me help you and receive newsletter</h4>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Contact></Contact>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
