/* filepath: src/components/About/About.tsx */
import React from 'react'
import './about.css'

const About = () => {
  const skills = {
    frontend: ['React', 'Angular', 'Blazor','TypeScript', 'JavaScript', 'Tailwind CSS', 'Jest'],
    backend: ['.NET', 'Rabbitmq', 'REST APIs', 'Clean Architecture'],
    database: ['MongoDB', 'PostgreSQL', 'SQL'],
    tools: ['Git', 'Docker', 'Azure', 'VS Code', 'Figma', 'Postman']
  }

  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm a passionate software developer with a love for creating efficient, 
            scalable, and user-friendly applications. With experience in both frontend 
            and backend development, I enjoy tackling complex problems and turning 
            ideas into reality through code.
          </p>
          
          <div className="about-skills">
            <div className="about-skill-category">
              <h3 className="about-skill-title">Frontend</h3>
              <div className="about-skill-list">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="about-skill-item">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="about-skill-category">
              <h3 className="about-skill-title">Backend</h3>
              <div className="about-skill-list">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="about-skill-item">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="about-skill-category">
              <h3 className="about-skill-title">Database</h3>
              <div className="about-skill-list">
                {skills.database.map((skill, index) => (
                  <span key={index} className="about-skill-item">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="about-skill-category">
              <h3 className="about-skill-title">Tools & Others</h3>
              <div className="about-skill-list">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="about-skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="about-decoration"></div>
        </div>
      </div>
    </div>
  )
}

export default About