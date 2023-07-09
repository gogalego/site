import React from 'react';
import './about.css';
import { FaPaintBrush } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";

enum skillTitleEnum{
  FrontEnd ='Front-End',
  BackEnd ='Back-End',
  DevOps = 'DevOps'
}

const description = 
"Gonçalo Galego, a 27-year-old software developer with a passion for coding and problem-solving."

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      <h2>I'm a Software Developer working from home</h2>
      <p className='about-description'>
        {description}
      </p>

      <div className='about-skills-container'>
        <div className='about-skill-item'>
          <div className='about-skill-item-content'>
            <p className='skill-title'>
              {skillTitleEnum.FrontEnd}
            </p>
            <div className='skill-icon'>
             <FaPaintBrush/>
            </div>
          </div>
        </div>

        <div className='about-skill-item'>
          <div className='about-skill-item-content'>
            <p className='skill-title'>
              {skillTitleEnum.BackEnd}
            </p>
            <div className='skill-icon'>
             <VscServerProcess/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;