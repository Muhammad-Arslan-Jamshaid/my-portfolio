import React from "react";
import "./Intro.css";
import background from "../../assets/BackgroundResized.jpg";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello!</span>
          <span className="introText">
            I'm <span className="introName">Muhammad Arslan</span>
            <br />
            <span className="course">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Full Stack Web Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("MERN Stack Developer")
                    .start();
                }}
              />
            </span>
          </span>
          <p className="introParagraph">
            I'm a skilled and passionate web developer with a little experience
            in creating user-friendly and responsive websites.
          </p>
          <div className="hirebtnlink">
            <Link
              to="contactTitle"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="hirebtn">Hire Me</button>
            </Link>
          </div>
        </div>
        <img src={background} alt="Profile" className="backgroundImg" />
      </section>
    </>
  );
};

export default Intro;
