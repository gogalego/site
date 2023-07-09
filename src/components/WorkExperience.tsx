import React from 'react';
import './workExperience.css';

const experienceData = [
  {
    date: 'October, 2018 - Now',
    title: 'Software Developer',
    company: 'Devscope, Porto'
  },
  {
    date: 'February, 2018 - September, 2018',
    title: 'Software Developer Internship',
    company: 'Devscope, Porto'
  },
  {
    date: 'September, 2015 - September, 2018',
    title: 'Computer Science Bachelor',
    company: 'ISEP, Porto'
  }
];

const WorkExperience = () => {
  return (
    <div className="work-container" id="workExperience">
      <h1>Work Experience</h1>

      <div className="work-list">
        {experienceData.map((item)=>{
          return  <div className="work-list-item">
                    <div className="work-list-item-date">
                     {item.date}
                    </div>
                    <div className="work-list-item-resume">
                      <div className="work-list-item-title">
                        {item.title}
                      </div>
                      <div className="work-list-item-company">
                        {item.company}
                      </div>
                    </div>
                  </div>
        })}  

      </div>

    </div>
  );
};

export default WorkExperience;