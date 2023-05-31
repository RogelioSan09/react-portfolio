import React from 'react';
import '../../styles/Resume.css';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

function Resume() {
    return (
        <div className="resume">
            <Header />
            <h1>Resume</h1>
            <div className="resume-container">
                <div className="resume-left">
                    <h2>Proficiencies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Resume;