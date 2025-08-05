import React, { useState } from 'react';
import './Contact.css'; // স্টাইলিং এর জন্য CSS ফাইল
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনি ফর্ম ডেটা সার্ভারে পাঠাতে পারেন
    console.log('Form data submitted:', formData);
    alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে!');
    // ফর্ম রিসেট
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <section className="contact-info-section">
        <h2>যোগাযোগ করুন</h2>
        <p>
          আপনার কোনো প্রশ্ন থাকলে, আমাদের সাথে নির্দ্বিধায় যোগাযোগ করুন। আমরা আপনার প্রশ্নের উত্তর দিতে প্রস্তুত।
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>123 Main Street, Cityville, State, 12345</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>+880 123-456-7890</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>info@example.com</p>
          </div>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </section>

      <section className="contact-form-section">
        <h3>আমাদের কাছে একটি বার্তা পাঠান</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="আপনার নাম"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="আপনার ইমেল"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="বিষয়"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="আপনার বার্তা"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="submit-button">বার্তা পাঠান</button>
        </form>
      </section>

      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153285.49526716035!2d90.28585641776517!3d23.784577843813936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b08702b8d9%3A0xc3f4cd0f42b8e3a2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1625032822589!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map of our location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;