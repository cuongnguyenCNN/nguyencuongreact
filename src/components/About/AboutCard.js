import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Cuong Nguyen</span> from{" "}
            <span className="purple">Ho Chi Minh City</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer & AI Engineer</span>
            <br />I hold an Bachelor in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">University of Science HCMC</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Cuong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
