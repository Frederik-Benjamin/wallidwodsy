import React, { useState } from "react";
import { ContactStyled } from "./ContactStyled";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      let newErrors = {};
      if (!formData.name.match(/^[A-Za-z\s]{2,}$/)) {
        newErrors.name = "Indtast et gyldigt navn.";
      }
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = "Indtast en gyldig email.";
      }
      if (formData.message.length < 5) {
        newErrors.message = "Beskeden skal være mindst 5 tegn.";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log("Form data:", formData);
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    };
  
    return (
      <ContactStyled>
        <h2>Kontakt os</h2>
        <form onSubmit={handleSubmit}>
          <label>Dit navn: *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Indtast dit navn"
          />
          {errors.name && <p className="error">{errors.name}</p>}
  
          <label>Din email: *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Indtast din email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
  
          <label>Din besked: *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Indtast en besked"
            rows="4"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
  
          <div className="button-group">
            <button type="submit" className="submit">Send</button>
            <button type="reset" className="reset" onClick={() => setFormData({ name: "", email: "", message: "" })}>
              Annuller
            </button>
          </div>
        </form>
      </ContactStyled>
    );
  };
  
  export default ContactForm;