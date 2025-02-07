import React from 'react';
import "../app/Styles/about.css";

const About = () => {
  return (
    <div id='about' className ='about-container'>
        <h2 className ='about-heading' data-aos="zoom-in-down">
          About Me
          </h2>
        <p className ='about-text' data-aos="zoom-in-down">
         I am a student at GIAIC, pursuing a course in Artificial, 3.0, & Metaverse...
         Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.    
        </p>
    </div>
  );
};

export default About;
