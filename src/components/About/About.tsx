import './about.css'
import { DiReact, DiAngularSimple } from 'react-icons/di'
import { VscAzure, VscAzureDevops } from 'react-icons/vsc'
import { TbBrandPowershell } from 'react-icons/tb'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { TbBrandCSharp } from 'react-icons/tb'
import { SiNextdotjs } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

const description = `Hello! I'm Gonçalo Galego, a 28-year-old software developer with a passion for coding and problem-solving. 
I specialize in full stack development and my goals is to create efficient and effective software solutions that make a difference.`

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      <h2>I'm a Software Developer working from home</h2>
      <p className="about-description">{description}</p>

      <div className="tec-list">
        <DiReact title="React" />
        <TbBrandCSharp title=".NET" />
        <SiNextdotjs title="Next.js" />
        <DiAngularSimple title="Angular" />
        <VscAzure title="Azure" />
        <AiOutlineConsoleSql title="SQL" />
        <BiLogoPostgresql title="Postgresql" />
        <TbBrandPowershell title="Powershell" />
        <VscAzureDevops title="DevOps" />
      </div>
    </div>
  )
}

export default About
