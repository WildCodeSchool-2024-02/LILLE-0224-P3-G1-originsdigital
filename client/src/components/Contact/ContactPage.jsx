import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ldvm0ww", "template_509zrsb", form.current, {
        publicKey: "_c2F4970FQz2gIDVR",
      })
      .then(
        () => {},
        () => {}
      );
  };

  return (
    <div className="sectionForm">
      <h1>Contact</h1>

      <form ref={form} onSubmit={sendEmail} className="form-contact">
        <label className="fields" htmlFor="name">
          Name
        </label>
        <input className="fields" type="text" name="from_name" />
        <label className="fields" htmlFor="email">
          Email
        </label>
        <input className="fields" type="email" name="from_email" />
        <label className="fields" htmlFor="message">
          Message
        </label>
        <textarea className="fields" name="message" />
        <input className="btnSend" type="submit" value="Send" />
      </form>
    </div>
  );
}
