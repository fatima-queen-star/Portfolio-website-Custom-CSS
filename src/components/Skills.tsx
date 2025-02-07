import React from 'react'
import "../app/Styles/skills.css";

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        {/* first column: Heading and Pragraph*/}
        <div data-aos="zoom-in-down" className='skills-left'>
          <h2 className='skills-heading'>Technologies I work with</h2>
          <p className='skills-text'>
          I have a solid function in wep development specializing in HTML, CSS, Javascript. 
          My experience extends to using framework like React and Next.js to create dynamic and user-friendly application. 
          I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay update on the latest technologies to enhance my skills set and contribute effectively to projects.  
          </p>
        </div>

        {/* Second Column: Skills */}
        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-down">Typescript</h2>
              <h2 data-aos="zoom-in-down">react.js</h2>
              <h2 data-aos="zoom-in-down">Next.js</h2>
            </div>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-down">Tailwind</h2>
              <h2 data-aos="zoom-in-down">CSS</h2>
              <h2 data-aos="zoom-in-down">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
