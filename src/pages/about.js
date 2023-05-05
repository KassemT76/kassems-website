import React from "react";
import '../styles/pages/about.css'

import cool from '../images/cool.png'
import reacticon from '../images/reacticon.png'
import suitcase from '../images/Suitcasesvg.svg'
import down from '../images/down.svg'
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
var isCollapsed = true;

function display(){
  console.log("Hello");
  const parent = document.getElementById("skillHolder")
  const hide = document.getElementById("skillHolder").childNodes[2];
  const arrow = document.getElementById("skillHolder").childNodes[1].childNodes[0];
  if (isCollapsed){
    parent.style.height = "500px"
    hide.style.opacity = "100";
    arrow.style.transform = "rotate(180deg)";
    isCollapsed = false;
  }
  else {
    parent.style.height = "170px"
    hide.style.opacity = "0";
    arrow.style.transform = "rotate(0deg)";
    isCollapsed = true
  }

}
const About = () => {
    return (
        <div id="about">   
          <h1>About Me</h1>
          <br></br>
          <div id="desc-container">
            <p id="desc">I am a high school student at Port Credit Secondary School with a passion 
            for software enginnering. I have experience with many languages such as Swift, 
            Javascript, HTML+CSS, Java, Python, and REACT</p>
            <img src={reacticon} id="myPic" alt="hello"></img>
          </div>
          <div id="skills">
              <h2>Skills</h2>
              <br></br>
              <p>
                Lmao what skills
              </p>
              <div id="skillHolder" classname="shownDiv">    
                <img id="skillImage" src={cool} alt="Java"></img>
                <div id="arrowContainer" onClick={display}>
                  <img src={down} id="down" alt="hello"></img>
                </div>
                <div className="hiddenDiv">
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
              </div>
          </div>
          <div id="experience">
            <h2>Experience</h2>
            <br></br>
            <p>
              Lies.
            </p>
            <div id = "imageholder">    
                <figure>
                  <img src={suitcase} alt='cool' id='skillImage'></img>
                  <figcaption>Skill 1</figcaption>
                </figure>
                <figure>
                  <img src={suitcase} alt='cool' id='skillImage'></img>
                  <figcaption>Skill 1</figcaption>
                </figure>
                <figure>
                  <img src={suitcase} alt='cool' id='skillImage'></img>
                  <figcaption>Skill 1</figcaption>
                </figure>
            </div>
          </div>
        </div>
    );
};


export default About;