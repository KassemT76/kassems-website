import React from 'react';
import '../styles/pages/home.css'
import cool from '../images/cool.png'
  
const Home = () => {
  return (
   
    <div id = "home">
      
      <h1 id='tit'>Kassem Taha</h1>
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
          <button>Learn More!</button>
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
        </div>
        <div id="footer">
          <h2>Contact me</h2>
          <p>Email: kassemtaha06@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
  
export default Home;