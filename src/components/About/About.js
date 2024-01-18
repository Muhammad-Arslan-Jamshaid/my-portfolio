import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div id="aboutTitle">
        <h1 className="aboutHeading">About Me</h1>
      </div>
      <div className="aboutDesc">
        <p>
          Hello! I'm <span className="aboutName">Muhammad Arslan</span>, a
          passionate{" "}
          <span className="aboutSkill">Full Stack Web Developer</span> eager to
          turn ideas into interactive and seamless digital experiences. Armed
          with a robust skill set in both front-end and back-end technologies, I
          specialize in crafting intuitive user interfaces using modern
          frameworks like <span className="React">React.js</span> . My expertise
          extends to server-side development, database management, and API
          design, allowing me to bring a holistic approach to web development
          projects. From concept to deployment, I thrive on creating innovative,
          scalable, and high-performance solutions that make a lasting impact.
          Let's build something amazing together!
        </p>
      </div>
    </>
  );
};

export default About;
