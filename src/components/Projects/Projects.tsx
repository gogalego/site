import './projects.css'
import { FiExternalLink } from 'react-icons/fi'

import TaskasIMG from '../../assets/images/taskasPreview.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Taskas.pt',
      description: 'A front-end solution that helps users discover quality restaurants at affordable prices',
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
      liveUrl: 'https://www.taskas.pt/',
      image: TaskasIMG
    }
  ]

  return (
    <div className="projects-container" id="projects">
      <div className="projects-content">
        <h2 className="projects-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    <FiExternalLink style={{ marginRight: '0.5rem', display: 'inline' }} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects