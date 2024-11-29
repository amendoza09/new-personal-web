import React, { useState } from 'react';
import './Contact.css';
import linkedin from './assets/linkedin.png';
import email from './assets/email.png';
import emailjs from 'emailjs-com';


const Contact = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ty4f7xj', 'service_ty4f7xj', e.target, 'umAsYB4JTgRP-RiWP')
            .then((result) => {
                console.log("Message sent successfully!");
                setIsSent(true);
                setError(null);
                setFormData({ name: '', email: '', message: ''});
            })
            .catch((error) => {
                console.error("Error sending message");
                setError("Failed to send message. Please try agian later.")
            })
    }

    return (
        <section className="contact transition-fade">
            <div className="contact-container">
                <h2 className="page-title">Get in Contact!</h2>
                <div className="external-links">
                    <a className="external-btn" href="mailto:mendoza.a01@outlook.com" target="_blank">
                        <img className="contact-logo" src={email} alt="email picture"/>
                        <p>mendoza.a01@outlook.com</p>
                    </a>
                    <a className="external-btn" href="https://linkedin.com/in/antonio-mendoza01/" target="_blank">
                        <img className="contact-logo" src={linkedin} alt="linkedin button"/>
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div className="form-container">
                    <h3 className="form-title">Or send a message</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
                        <button type="submit" className="send-btn">Send</button>
                    </form>
                    {isSent && <p className="success-message">Your message has been sent!</p>}
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </section>
    );
};

export default Contact;