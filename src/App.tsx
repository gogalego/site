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

      <main>
        <Home />
        <About />
        <WorkExperience />
        <Projects />
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: 'var(--space-4)', 
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
          <a
            href="https://www.linkedin.com/in/gogalego22"
            target="_blank"
            rel="noreferrer"
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'var(--font-size-2xl)',
              transition: 'var(--transition-normal)'
            }}
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/gogalego"
            target="_blank"
            rel="noreferrer"
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'var(--font-size-2xl)',
              transition: 'var(--transition-normal)'
            }}
          >
            <BsInstagram />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1LM4D0w59q7JmocUE74zaCmp0tBz4gqbG"
            target="_blank"
            rel="noreferrer"
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: 'var(--font-size-2xl)',
              transition: 'var(--transition-normal)'
            }}
          >
            <BsFillFileEarmarkPersonFill />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App