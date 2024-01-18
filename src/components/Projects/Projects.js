import React from "react";
import "./Projects.css";
import Daraz from "../../assets/DarazClone.png";
import Form from "../../assets/TextForm.png";
import Portfolio from "../../assets/My-Portfolio.png";

const Projects = () => {
  return (
    <>
      <div id="projectTitle">
        <h1 className="projectHeading">My Projects</h1>
      </div>
      <p className="projectDesc">
        Here are some of My Projects based on{" "}
        <span className="reactTitle">React.js</span>!
      </p>
      <div className="projectsImages">
        <img className="projectImg" src={Daraz} alt=" Website" />
        <img className="projectImg" src={Portfolio} alt=" Website" />
        <img className="projectImg" src={Form} alt=" Website" />
      </div>
    </>
  );
};

export default Projects;
