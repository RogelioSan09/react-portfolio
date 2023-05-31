import React from 'react';
import '../../styles/About.css';
import Header from './Header';
import Footer from './Footer';

export default function About() {
    return (
        <div className="about-container">
        <Header />
            <div className="about">
                <h1>About Me</h1>
                    <div >
                        <p>
                            I am an aspiring full-stack web developer. I am currently honing my skills in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js.
                        </p>
                    </div>
            </div>
            <Footer />
        </div>
       
    );
}
