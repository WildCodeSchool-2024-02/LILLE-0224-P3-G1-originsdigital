import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

export default function ContactPage()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ldvm0ww", "template_509zrsb", form.current, {
        publicKey: "_c2F4970FQz2gIDVR",
      })
      .then(
        () => {
          
        },
        () => {
          
        }
      );
  };

  return (
    
      <div className="sectionForm">
        <h1>Contact</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label className="champs" htmlFor="name">Name</label>
          <input className="champs" type="text" name="from_name" />
          <label className="champs"htmlFor="email">Email</label>
          <input className="champs" type="email" name="from_email" />
          <label className="champs" htmlFor="message">Message</label>
          <textarea className="champs" name="message" />
          <input className="btnSend" type="submit" value="Send" />
        </form>
      </div>
    
  );
};
