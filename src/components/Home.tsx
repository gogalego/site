import React, { useState, useEffect } from "react";
import "./home.css";
import profileImage from "../assets/images/profile.png";
import {
  BsLinkedin,
  BsInstagram,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";

enum jobTitleEnum {
  SoftwareDeveloper = "Software Developer",
  FrontEnd = "Front-End",
  BackEnd = "Back-End",
}

const Home = () => {
  const [jobTitle, setJobTitle] = useState(jobTitleEnum.SoftwareDeveloper);

  const handleIndex = () => {
    switch (jobTitle) {
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
  };

  useEffect(() => {
    setTimeout(handleIndex, 5000);
  }, [jobTitle]);

  return (
    <div className="home-container" id="home">
      <div className="home-profile">
        <div className="home-profile-description">
          <p>Hello!</p>
          <p>Gonçalo Galego</p>

          <p
            className="jobTitle"
            style={
              jobTitle === jobTitleEnum.SoftwareDeveloper
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {jobTitleEnum.SoftwareDeveloper}
          </p>
          <p
            className="jobTitle"
            style={
              jobTitle === jobTitleEnum.FrontEnd
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {jobTitleEnum.FrontEnd}
          </p>
          <p
            className="jobTitle"
            style={
              jobTitle === jobTitleEnum.BackEnd
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {jobTitleEnum.BackEnd}
          </p>

          <p className="home-profile-socials">
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
              <BsInstagram />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1LM4D0w59q7JmocUE74zaCmp0tBz4gqbG"
              target="_blank"
              rel="noreferrer"
            >
              <BsFillFileEarmarkPersonFill />
            </a>
          </p>
        </div>
        <div className="home-profile-photo-container">
          <img className="home-profile-photo" src={profileImage} alt="person" />
        </div>
      </div>
    </div>
  );
};

export default Home;
