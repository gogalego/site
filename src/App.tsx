/* filepath: src/App.tsx */
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Projects from './components/Projects/Projects'
import {
  BsLinkedin,
  BsInstagram,
  BsFillFileEarmarkPersonFill,
} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <Navigation />
        </div>
      </header>

      <main className="content">
        <Home />
        <About />
        <WorkExperience />
        <Projects />
      </main>

      <footer className="site-footer">
        <div className="site-footer-links">
          <a
            href="https://www.linkedin.com/in/gogalego22"
            target="_blank"
            rel="noreferrer"
            className="site-footer-link"
            aria-label="LinkedIn profile"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/gogalego"
            target="_blank"
            rel="noreferrer"
            className="site-footer-link"
            aria-label="Instagram profile"
          >
            <BsInstagram />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1LM4D0w59q7JmocUE74zaCmp0tBz4gqbG"
            target="_blank"
            rel="noreferrer"
            className="site-footer-link"
            aria-label="Download resume"
          >
            <BsFillFileEarmarkPersonFill />
          </a>
        </div>
        <p className="site-footer-note">Gonçalo Galego</p>
      </footer>
    </div>
  )
}

export default App