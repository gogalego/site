/* filepath: src/components/Home/Home.tsx */
import { useState, useEffect } from 'react'
import './home.css'
import profileImage from '../../assets/images/profile.png'
import {
  BsLinkedin,
  BsInstagram,
  BsFillFileEarmarkPersonFill,
} from 'react-icons/bs'

enum jobTitleEnum {
  SoftwareDeveloper = 'Software Developer',
  FrontEnd = 'Frontend Developer',
  BackEnd = 'Backend Developer',
}

const Home = () => {
  const [jobTitle, setJobTitle] = useState(jobTitleEnum.SoftwareDeveloper)
  const [isVisible, setIsVisible] = useState(true)

  const handleIndex = () => {
    setIsVisible(false)
    setTimeout(() => {
      switch (jobTitle) {
        case jobTitleEnum.SoftwareDeveloper:
          setJobTitle(jobTitleEnum.FrontEnd)
          break
        case jobTitleEnum.FrontEnd:
          setJobTitle(jobTitleEnum.BackEnd)
          break
        case jobTitleEnum.BackEnd:
          setJobTitle(jobTitleEnum.SoftwareDeveloper)
          break
        default:
          setJobTitle(jobTitleEnum.SoftwareDeveloper)
          break
      }
      setIsVisible(true)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(handleIndex, 3000)
    return () => clearInterval(interval)
  }, [jobTitle])

  return (
    <div className="home-container" id="home">
      <div className="home-profile animate-fade-in-up">
        <div className="home-profile-description">
          <p className="home-greeting">Hello! I'm</p>
          <h1 className="home-name">Gonçalo Galego</h1>
          
          <div className="home-job-title-container">
            <p className={`home-job-title ${isVisible ? 'visible' : ''}`}>
              {jobTitle}
            </p>
          </div>

          <div className="home-profile-socials">
            <a
              href="https://www.linkedin.com/in/gogalego22"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/gogalego"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1LM4D0w59q7JmocUE74zaCmp0tBz4gqbG"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <BsFillFileEarmarkPersonFill size={20} />
            </a>
          </div>
        </div>
        
        <div className="home-profile-photo-container">
          <div className="home-profile-photo-wrapper">
            <img className="home-profile-photo" src={profileImage} alt="Gonçalo Galego" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home