import React from 'react';
import './home.css';
import profileImage from '../assets/images/profile.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-profile">
        <div className='home-profile-description'>

        </div>
        <div className='home-profile-photo-container'>
          <img  className='home-profile-photo' src={profileImage} alt="person"/>
        </div>
      </div>
    </div>
  );
};

export default Home;