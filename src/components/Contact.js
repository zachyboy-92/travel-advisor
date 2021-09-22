import React from "react";
import emailjs from "emailjs-com";
import "./styles/Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_wcu6yxb",
        e.target,
        "user_mw21lTZBiCJzPGeXCHxw2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <form onSubmit={sendEmail}>
        <label for="first_name">First Name</label>
        <input id="first_name" type="text" name="first_name" required />
        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" required />
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required />
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
        <label for="comment">Leave a comment</label>
        <textarea
          name="message"
          id="comment"
          cols="60"
          rows="10"
          required
        ></textarea>
        <button id="submit_btn" type="submit">
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default Contact;
