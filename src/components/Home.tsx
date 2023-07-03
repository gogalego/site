import React, { useState, useEffect } from 'react';
import './home.css';
import profileImage from '../assets/images/profile.png';

enum jobTitleEnum{
  SoftwareDeveloper = "SoftwareDeveloper",
  FrontEnd ='Front-End',
  BackEnd ='Back-End'
}


const Home = () => {
  const [ jobTitle , setJobTitle] = useState(jobTitleEnum.SoftwareDeveloper);

  useEffect(()=>{
    const interval = setInterval(()=>{
      switch(jobTitle){
        case jobTitleEnum.SoftwareDeveloper:
          setJobTitle(jobTitleEnum.FrontEnd);
          break;
        case jobTitleEnum.FrontEnd:
          setJobTitle(jobTitleEnum.BackEnd);
          break;
        case jobTitleEnum.BackEnd:
          setJobTitle(jobTitleEnum.SoftwareDeveloper);
          break;
        default:
          setJobTitle(jobTitleEnum.SoftwareDeveloper);
          break;
      }
    }, 2500);
      
      //Fix

      return () => clearInterval(interval);

    }, []);

  return (
    <div className="home-container">
      <div className="home-profile">
        <div className='home-profile-description'>
            <p>Hello!</p>
            <p>Gonçalo Galego</p>
            <p>{jobTitle}</p>
        </div>
        <div className='home-profile-photo-container'>
          <img  className='home-profile-photo' src={profileImage} alt="person"/>
        </div>
      </div>
    </div>
  );
};

export default Home;