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
      </Header>
      <Content>

        <Home />
        <About />

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
