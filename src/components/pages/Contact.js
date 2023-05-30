import React from 'react';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact-form">
            <h1>Contact Me</h1>
            <form>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label for="message">Message:</label>
                    <input type="message" id="message" name="message" />
                </div>
            </form>
        </div>
    )
}

export default Contact;