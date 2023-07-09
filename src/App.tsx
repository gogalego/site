import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import About from './components/About';
import Home from './components/Home';
import Tecnologies from './components/Technologies';
import WorkExperience from './components/WorkExperience';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <BrowserRouter>
      <Layout className='layout'>
      <Header className='header'>
      </Header>
      <Content className='content'>

        <Home />
        <About />
        <Tecnologies />
        <WorkExperience />

      </Content>
      <Footer className='footer'>
       <h4>GoGalego</h4>
      </Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
