import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="about-left">
                    <img src={require("../../assets/images/rogelio.jpg").default} alt="Rogelio Sanchez" />
                </div>
                <div className="about-right">
                    <p>
                        I am an aspiring full-stack web developer. I am currently honing my skills in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;