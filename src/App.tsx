import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Tecnologies from './components/Technologies';

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
