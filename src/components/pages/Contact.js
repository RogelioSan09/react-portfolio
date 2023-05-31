import React from 'react';
import '../../styles/Contact.css';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

function Contact() {
    return (
        <div className="contactForm">
            <Header />
            <h1>Contact Me</h1>
            <form>
                <div className="formGroup">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label for="message">Message:</label>
                    <input type="message" id="message" name="message" />

                    <button type="submit">Submit</button>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default Contact;