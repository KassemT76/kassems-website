import React from 'react';
import '../styles/pages/index.css'
import cool from '../images/cool.png'
import { useNavigate } from 'react-router-dom';



  
export default function Home() {
  const nav = useNavigate()

  const  NavigateToProjects = () => {
    nav("/project")
  }
  const NavigateToAbout = () => {
    nav("/about")
  }
  return (
   
    <div id = "home">   
      <h1>Kassem Taha</h1>
      <p>A coder with a very impressive website. Wow!</p>
      <br></br>
      <div id = "landing">
        <div id = "skillsHome">
          <h2>Skills:</h2>
          <p>In my journey as a software engineer, I have learnt many skills and languages:</p>
          <br></br>
          <div id = "imageholder">    
            <figure>
              <img src={cool} alt='cool' id='skillImage'></img>
              <figcaption>Skill 1</figcaption>
            </figure>
            <figure>
              <img src={cool} alt='cool' id='skillImage'></img>
              <figcaption>Skill 1</figcaption>
            </figure>
            <figure>
              <img src={cool} alt='cool' id='skillImage'></img>
              <figcaption>Skill 1</figcaption>
            </figure>
          </div>
          <button onClick={NavigateToAbout}>Learn More!</button>
        </div>
        <div id='projectHome'>
          <h2>Projects</h2>
          <p>Along my journey, I have done a lot of projects</p>
          <div id="gallery">
            <figure>
                <img src={cool} alt='cool' id='skillImage'></img>
                <figcaption>Project 1</figcaption>
              </figure>
              <figure>
                <img src={cool} alt='cool' id='skillImage'></img>
                <figcaption>Project 2</figcaption>
              </figure>
              <figure>
                <img src={cool} alt='cool' id='skillImage'></img>
                <figcaption>Project 3</figcaption>
              </figure>
          </div>
          <button onClick={NavigateToProjects}>Learn More!</button>
        </div>
        <div id="footer">
          <h2>Contact me</h2>
          <p>Email: kassemtaha06@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
