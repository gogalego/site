import './projects.css'
import { FiExternalLink } from 'react-icons/fi'

import TaskasIMG from '../../assets/images/taskasPreview.png'
import DDrawerIMG from '../../assets/images/dDrawerPreview.gif'
import CatCleanerIMG from '../../assets/images/catCleanerPreview.png'

const projects = [
  {
    id: 1,
    title: 'Taskas.pt',
    description: 'A front-end solution that helps users discover quality restaurants at affordable prices',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://www.taskas.pt/',
    image: TaskasIMG,
    objectFit: 'cover',
    buttonLabel: 'Live Demo'
  },
  {
    id: 2,
    title: 'Desktop Drawer',
    description: 'A desktop app to drawer over your screen',
    technologies: ['Electron'],
    liveUrl: 'https://ddrawer.gogalego.com',
    image: DDrawerIMG,
    objectFit: 'contain',
    buttonLabel: 'Website'
  },
    {
    id: 3,
    title: 'CatCleaner',
    description: 'A mobile app to clean up images in your gallery',
    technologies: ['Kotlin'],
    liveUrl: 'https://catcleaner.gogalego.com',
    image: CatCleanerIMG,
    objectFit: 'cover',
    buttonLabel: 'Website'
  }
]

const Projects = () => {

  return (
    <div className="projects-container" id="projects">
      <div className="projects-content">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} style={{ objectFit: (project.objectFit as 'cover' | 'contain' | 'fill' | 'none' | 'scale-down') || 'cover' }} />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-footer">
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
                      {project.buttonLabel}
                    </a>
                  </div>
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