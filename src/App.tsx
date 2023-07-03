import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import About from './components/About';
import Home from './components/Home';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <BrowserRouter>
      <Layout className='layout'>
      <Header className='header'>
        
        <div className='logo-container'>
          <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jR3imVo_HTPboBgj-9SE6REqz7y3wzaNtcY5r4Ml1Wj3iALlRaeEtF56sWulUJC4PSQ&usqp=CAU'></img>
        </div>

        <div className='anchor-container'>
          <a className='anchor'>About</a>
          <a className='anchor'>Projects</a>
          <a className='anchor'>Contact</a>
        </div>
      </Header>
      <Content>

        <Home />

      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
      </Footer>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
