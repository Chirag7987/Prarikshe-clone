import React, { useState } from 'react';
import Button from '../components/Button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-us">
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries or support</p>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p><a href="mailto:contactus@parikshe.in">contactus@parikshe.in</a></p>
                </div>
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p><a href="tel:6366548224">6366548224</a></p>
                </div>
                <div className="contact-item">
                  <h3>Institutional Queries</h3>
                  <p><a href="mailto:padmashree@parikshe.in">padmashree@parikshe.in</a></p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook">📘 Facebook</a>
                  <a href="#" aria-label="Instagram">📷 Instagram</a>
                  <a href="#" aria-label="LinkedIn">💼 LinkedIn</a>
                  <a href="#" aria-label="YouTube">📺 YouTube</a>
                  <a href="#" aria-label="WhatsApp">💬 WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;