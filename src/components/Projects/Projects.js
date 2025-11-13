import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LinkPost"
              description="A platform for Linkedin that help you create content AI and planning posts in one week or month."
              ghLink="https://github.com/cuongnguyencnn/videobridge"
              demoLink="https://linkpost.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AutoWordpress"
              description="A platform for Wordpress that help you create content AI and planning posts in one week or month."
              ghLink="https://github.com/cuongnguyencnn/autowordpress"
              demoLink="https://autowordpress.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RobotFleet"
              description="A unified dashboard to control, monitor, and optimize hundreds of AGV robots in real-time."
              ghLink="https://github.com/cuongnguyencnn/Editor.io"
              demoLink="https://robotfleet.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Standup Reminder"
              description="A chrome Extension remind you stand up and take break for 5 , 10 ... minutes "
              ghLink="https://github.com/cuongnguyencnn/Plant_AI"
              demoLink="https://chromewebstore.google.com/detail/stand-up-reminder+/jgaaeeodkgfgdonlmidadghiapmdjcgg?authuser=0&hl=vi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Auto Make Friend Facebook"
              description="A chrome extension help you automatically make friends on Facebook."
              ghLink="https://github.com/cuongnguyencnn/AI_For_Social_Good"
              demoLink="https://chromewebstore.google.com/detail/auto-add-friends-on-faceb/alfanhonjngfkflgmjnimieglhhngbjm?authuser=0&hl=vi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="NoteFlow AI"
              description="Smart note-taking from videos, PDFs, YouTube, and recordings — in text or mind map format. Boost productivity and retain knowledge."
              ghLink="https://github.com/cuongnguyencnn/NoteFlowAI"
              demoLink="https://noteflowai.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
