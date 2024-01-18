import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvrxqii",
        "template_l1xtld2",
        form.current,
        "sfYFaIQG9-BxiiBZM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="mainContact">
        <div id="contactTitle">
          <h1>Contact Me</h1>
        </div>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="name "
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="from_email"
            className="email "
            placeholder="Enter your email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          <button className="submitbtn" value="Send" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
