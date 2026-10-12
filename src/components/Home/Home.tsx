/* filepath: src/components/Home/Home.tsx */
import { useState, useEffect, useCallback } from 'react'
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
  AgentDeveloper = 'Agent Developer'
}

const Home = () => {
  const [jobTitle, setJobTitle] = useState(jobTitleEnum.SoftwareDeveloper)
  const [isVisible, setIsVisible] = useState(true)

  const handleIndex = useCallback(() => {
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
          setJobTitle(jobTitleEnum.AgentDeveloper)
          break
        case jobTitleEnum.AgentDeveloper:
          setJobTitle(jobTitleEnum.SoftwareDeveloper)
          break
        default:
          setJobTitle(jobTitleEnum.SoftwareDeveloper)
          break
      }
      setIsVisible(true)
    }, 300)
  }, [jobTitle])

  useEffect(() => {
    const interval = setInterval(handleIndex, 3000)
    return () => clearInterval(interval)
  }, [handleIndex])

  return (
    <div className="home-container" id="home">
      <div className="home-inner">
      <div className="home-profile animate-fade-in-up">
        <div className="home-profile-description">
          <p className="home-greeting">Hello! I'm</p>
          <h1 className="home-name">Gonçalo <span className="home-name-accent">Galego</span></h1>

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
              aria-label="LinkedIn profile"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/gogalego"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              aria-label="Instagram profile"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1LM4D0w59q7JmocUE74zaCmp0tBz4gqbG"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              aria-label="Download resume"
            >
              <BsFillFileEarmarkPersonFill size={20} />
            </a>
          </div>
        </div>

        <div className="home-profile-photo-container">
          <img className="home-portrait" src={profileImage} alt="Gonçalo Galego" width="300" height="300" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home