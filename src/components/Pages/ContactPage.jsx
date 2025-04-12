import React, { useState } from 'react';
import './ContactPage.css';
import ButtonLabel from '../ButtonLabel';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email) {
      alert('Please fill in at least your name and email.');
      return;
    }

    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/923021172899?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="contactPage">
        <ButtonLabel title="Contact Us" />

        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name*"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email*"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button onClick={handleSend}>Send </button>
          <hr />
        </div>

        <div className="socialAccounts">
          <div className="socialicons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div><FaLinkedin size={30} color="#ffffff" /></div>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div><FaFacebook size={30} color="#ffffff" /></div>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div><FaInstagram size={30} color="#ffffff" /></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
