import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import About from './components/About/About'
import Home from './components/Home/Home'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Projects/Projects'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header">
          <Navigation />
        </Header>
        <Content className="content">
          <Home />
          <About />
          <WorkExperience />
          <Projects />
        </Content>
        <Footer className="footer">
          <h4>GoGalego</h4>
          <a
            href="https://www.linkedin.com/in/gogalego22"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/gogalego"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}

export default App
