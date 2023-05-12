import React from "react";
import '../styles/pages/about.css'

import cool from '../images/cool.png'
import reacticon from '../images/reacticon.png'
import suitcase from '../images/Suitcasesvg.svg'
import down from '../images/down.svg'
import { Link } from "react-router-dom";

function display(id){
  
  const parent = document.getElementById(id);
  const head = parent.childNodes[0]
  const arrow = parent.childNodes[1];
  const hide = parent.childNodes[2];
  
  console.table(parent.offsetHeight)
  if (parent.offsetHeight <= 200){
    parent.style.height = "500px";
    head.style.height = "160px";
    arrow.style.height = "40px";
    hide.style.height = "60%";

    hide.style.opacity = "100";

    arrow.childNodes[0].style.transform = "rotate(180deg)";
  }
  else {
    parent.style.height = "200px"
    head.style.height = "160px";
    arrow.style.height = "40px";
    hide.style.height = "0%";

    hide.style.opacity = "0";
    arrow.childNodes[0].style.transform = "rotate(0deg)";
  }

}
const About = () => {
    return (
        <div id="about">   
          <h1>About Me</h1>
          <br></br>
          <div id="desc-container">
            <div id="aboutParagraph">
              <p id="desc">I am a high school student at Port Credit Secondary School with a passion 
              for software enginnering. I have experience with many languages such as Swift, 
              Javascript, HTML+CSS, Java, Python, and REACT</p>
            </div>
            <img src={reacticon} id="myPic" alt="hello"></img>
          </div>
          <div id="skills">
              <h2>Skills</h2>
              <br></br>
              <p>
                Lmao what skills
              </p>
              <div id="gallery">
                <div className="skillHolder" id="one">  
                  <div id="skillHead">
                    <img id="skillImage" src={cool} alt="Java"></img>
                    <p>Hello</p>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("one")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                  <h3> Proficient</h3>
                    <ul>
                      <li>Coded alot</li>
                      <li>Know a lot like: blah, blah, blah</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="two">  
                  <div id="skillHead">
                    <img id="skillImage" src={cool} alt="Java"></img>
                    <p>Hello</p>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("two")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                  <h3> Proficient</h3>
                    <ul>
                      <li>Coded alot</li>
                      <li>Know a lot like: blah, blah, blah</li>
                    </ul>                  
                  </div>
                </div>
                <div className="skillHolder" id="three">  
                  <div id="skillHead">
                    <img id="skillImage" src={cool} alt="Java"></img>
                    <p>Hello</p>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("three")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Proficient</h3>
                    <ul>
                      <li>Coded alot</li>
                      <li>Know a lot like: blah, blah, blah</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="four">  
                  <div id="skillHead">
                    <img id="skillImage" src={cool} alt="Java"></img>
                    <p>Hello</p>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("four")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Proficient</h3>
                    <ul>
                      <li>Coded alot</li>
                      <li>Know a lot like: blah, blah, blah</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="five">  
                  <div id="skillHead">
                    <img id="skillImage" src={cool} alt="Java"></img>
                    <p>Hello</p>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("five")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Proficient</h3>
                    <ul>
                      <li>Coded alot</li>
                      <li>Know a lot like: blah, blah, blah</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="six">  
                  <div id="skillHead">
                    <img id="skillImage" src={cool} alt="Java"></img>
                    <p>Hello</p>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("six")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Proficient</h3>
                    <ul>
                      <li>Coded alot</li>
                      <li>Know a lot like: blah, blah, blah</li>
                    </ul>
                  </div>
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
                  <Link to="/project">
                   <img src={suitcase} alt='cool' id='expImage'></img>
                  </Link>
                  <figcaption>Skill 1</figcaption>
                </figure>
                <figure>
                  <Link to="/project">
                   <img src={suitcase} alt='cool' id='expImage'></img>
                  </Link>
                  <figcaption>Skill 1</figcaption>
                </figure>
                <figure>
                  <Link to="/project">
                   <img src={suitcase} alt='cool' id='expImage'></img>
                  </Link>
                  <figcaption>Skill 1</figcaption>
                </figure>
            </div>
          </div>
        </div>
    );
};


export default About;