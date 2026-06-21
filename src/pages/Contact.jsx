import React, { useState } from "react";
import "../styles/Contact.css";
import { send } from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log("SERVICE:", import.meta.env.VITE_SERVICE_ID);
    console.log("TEMPLATE:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("KEY:", import.meta.env.VITE_PUBLIC_KEY);

    send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log("FULL ERROR:", error);
        alert(error.text || error.message || JSON.stringify(error));
      }
    );
  }


  return (
    <div className="wrap">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-section">

          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.7120578422087!2d78.8268184736186!3d14.443750580900577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3727c85d0d483%3A0xf0f2fe721b115627!2sTelugu%20Ganga%20Water%20Project%20Office!5e0!3m2!1sen!2sin!4v1781932543322!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy">
            </iframe>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>

              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                onChange={changeHandler}
                placeholder="Enter your name"
              />

              <label>Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                onChange={changeHandler}
                placeholder="Enter your email"
              />

              <label>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                required
                onChange={changeHandler}
                rows="5"
                placeholder="Write your message here..."
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;