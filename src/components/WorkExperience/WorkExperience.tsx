/* filepath: src/components/WorkExperience/WorkExperience.tsx */
import React from 'react'
import './workExperience.css'

const WorkExperience = () => {
  const experienceData = [
    {
      id: 1,
      company: 'Devscope',
      position: 'Software Developer',
      duration: '2018 - Present',
      description: 'Worked on multiple projects in a full stack role, developing both frontend and backend solutions.',
      technologies: ['.NET','React', 'TypeScript', 'SQL', 'PostgreSQL', 'Tailwind CSS', 'Azure']
    },
    {
      id: 2,
      company: 'ISEP - Porto',
      position: 'Computer Science Bachelor',
      duration: '2015 - 2018',
      description: 'Developed and maintained multiple client websites and web applications. Worked with both frontend and backend technologies to deliver complete solutions.',
      technologies: ['Java', 'C','C++','C#', 'MongoDB', 'Angular']
    }
  ]

  return (
    <div className="work-experience-container" id="workExperience">
      <div className="work-experience-content">
        <h2 className="work-experience-title">Work Experience</h2>
        
        <div className="work-experience-timeline">
          {experienceData.map((experience) => (
            <div key={experience.id} className="work-experience-item">
              <div className="work-experience-header">
                <div>
                  <h3 className="work-experience-company">{experience.company}</h3>
                  <h4 className="work-experience-position">{experience.position}</h4>
                </div>
                <span className="work-experience-duration">{experience.duration}</span>
              </div>
              
              <p className="work-experience-description">
                {experience.description}
              </p>
              
              <div className="work-experience-technologies">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="work-experience-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience