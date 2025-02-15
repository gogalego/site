import './projects.css'
import { Card } from 'antd'
import { Image } from 'antd'
import TaskasIMG from '../../assets/images/taskasPreview.png'

const projects = [
  {
    name: 'Taskas',
    image: TaskasIMG,
    url: 'https://www.taskas.pt',
  },
]

const WorkExperience = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-list">
        {projects.map((item, index) => (
          <Card
            key={index}
            style={{ width: 300, cursor: 'pointer' }}
            title={
              <div style={{ backgroundColor: 'white', color: 'black' }}>
                {item.name}
              </div>
            }
            onClick={() => window.open(item.url, '_blank')}
          >
            <Image
              src={item.image}
              style={{ width: '100%', height: '100%' }}
              preview={false}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
