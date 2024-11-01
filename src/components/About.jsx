import React from 'react';
import '../styles/About.css';
import backgroundImage from '../assets/background.png';

const About = () => {
    return (
        <div className="about-section">
            <img 
                src={backgroundImage} 
                alt="Background" 
                className="background-image"
            />
            
            <div className="inner-container">
                <h1>Informacion</h1>
                <div className="text">
                    Informacion del seminario no tengo idea de que podria ser y me da mucho miedo que me mires asi danilo andres montezuma ibarra que te esta pasando de verdad, siento que tienes un pollon de 2 kilometros de distancia debes cuidarte eso es malo para la salud
                </div>
                <div className="skills">
                    <span>Web Design</span>
                    <span>Photoshop & Illustrator</span>
                    <span>Coding</span>
                </div>
            </div>
        </div>
    );
};

export default About;