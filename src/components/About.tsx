import React from 'react';
import './about.css';
import { FaPaintBrush, } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { SiAzuredevops } from "react-icons/si";

enum skillTitleEnum{
  FrontEnd ='Front-End',
  BackEnd ='Back-End',
  DevOps = 'DevOps'
}


const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <h2>I'm a Software Developer working from home</h2>
      <p className='about-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea quaerat alias accusamus voluptas autem! Alias odit voluptates in totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde veniam dolorum ipsum doloribus.</p>

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

        <div className='about-skill-item'>
          <div className='about-skill-item-content'>
            <p className='skill-title'>
              {skillTitleEnum.DevOps}
            </p>
            <div className='skill-icon'>
             <SiAzuredevops/>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;