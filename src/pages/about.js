import React from "react";
import '../styles/pages/about.css'

import reacticon from '../images/reacticon.png'
import suitcase from '../images/Suitcasesvg.svg'
import down from '../images/down.svg'

import Java from '../images/Java.png'
import HTML from '../images/HTML.PNG'
import Node from '../images/Node.png'
import Python from '../images/Python.png'
import Swift from '../images/swift.png'
import Express from '../images/express-facebook-share.png'
import MySQL from '../images/MySQL.png'
import Firebase from '../images/Firebase.jpg'
import C from '../images/C.png'
import Linux from '../images/Tux.svg.png'
import Javascript from '../images/JavaScript.png'

import face from '../images/face.jpg'
import robot from '../images/logo.png'
import apple from '../images/Apple_logo_grey.svg.png'
import { Link } from "react-router-dom";

function display(id){
  
  const parent = document.getElementById(id);
  const head = parent.childNodes[0]
  const arrow = parent.childNodes[1];
  const hide = parent.childNodes[2];
  
  console.table(parent.offsetHeight)
  if (parent.offsetHeight <= 210){
    parent.style.height = "500px";
    head.style.height = "160px";
    arrow.style.height = "40px";
    hide.style.height = "60%";

    hide.style.opacity = "100";

    arrow.childNodes[0].style.transform = "rotate(180deg)";
  } else {
    parent.style.height = "200px"
    head.style.height = "160px";
    arrow.style.height = "40px";
    hide.style.height = "0%";

    hide.style.opacity = "0";
    arrow.childNodes[0].style.transform = "rotate(0deg)";
  }

}

function displayall() {
  const skills = document.getElementById("gallery").childNodes;

  for (let i = 0; i < skills.length; i++){
    display(skills[i].id)
  }
  console.table(skills)

}
const About = () => {
    return (
        <div id="about">   
          <div id="aboutTitle">
            <h1 id="tit">About Me</h1>
          </div>
          <br></br>
          <div id="desc-container">
            <div id="aboutParagraph">
              <p id="desc">I am a high school student at Port Credit Secondary School, going into Computer Science at Carleton University next fall. I am well-versed in many languages, such as REACT, Java, and Python. I have a solid understanding of multiple computer science algorithms and am excited to learn more at Carleton. I have experience with team leadership at my school’s robotics team, where I was Lead Programmer, then later Captain. I also have an app design background from my co-op position at Our Wave Hub, where I designed and programmed an IOS social media app prototype from scratch. I am excited to continue learning computer science and building my career in something I love. I am a driven, tested future computer scientist ready to take on new challenges.</p>
            </div>
            <img src={face} id="myPic" alt="hello"></img>
          </div>
          <div id="skills">
              <h2>Technical Skills</h2>
              <br></br>
              <div id="gallery">
                <div className="skillHolder" id="one">  
                  <div id="skillHead">
                      <img id="skillImage" src={Java} alt="Java"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("one")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                  <h3> Proficient</h3>
                    <ul>
                      <li>Learned while in Grade 12 for AP Computer Science and Grade 11 for school course</li>
                      <li>Concepts: Recursion, Database Managent with SQL server, Search algorithms, Object Oriented Programming (Polymorphism, Inheritance, etc.)</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="two">  
                  <div id="skillHead">
                    <img id="skillImage" src={Python} alt="Python"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("two")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                  <h3>Proficient</h3>
                    <ul>
                      <li>Learned in Robotics Team and Grade 12 computer science</li>
                      <li>Concepts: Recursion, Data Structures, Search algorithms, algorithm analysis (Big O), Robtics Programming (Autonomus functions, Odometry, etc.)</li>
                    </ul>                  
                  </div>
                </div>
                <div className="skillHolder" id="three">  
                  <div id="skillHead">
                    <img id="skillImage" src={HTML} alt="HTML"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("three")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3>Proficient</h3>
                    <ul>
                      <li>Learned in Grade 11 and 12 computer science</li>
                      <li>Developed a Website with SQL integration and this Website</li>
                      <li>Knowledgable on CSS and JS to integrate well with HTML</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="four">  
                  <div id="skillHead">
                    <img id="skillImage" src={Javascript} alt="JavaScript"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("four")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Proficient</h3>
                    <ul>
                      <li>Learned in Grade 11 and 12 computer science</li>
                      <li>Coded websites which integrated SQL with JS and this website</li>
                      <li>Can code efficiently in OOP or functionially from skills learnt in Python and Java</li>
                      <li>Understand the DOM and data structures</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="five">  
                  <div id="skillHead">
                    <img id="skillImage" src={reacticon} alt="React icon"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("five")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Proficient</h3>
                    <ul>
                      <li>Learned in Grade 12 computer science</li>
                      <li>COded this website with this framework and know how to work well with it</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="six">  
                  <div id="skillHead">
                    <img id="skillImage" src={Node} alt="Node"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("six")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Proficient</h3>
                    <ul>
                      <li>Base for all websites I have coded</li>
                      <li>Understand modules, and how to work effectively with programs using Node</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="seven">  
                  <div id="skillHead">
                    <img id="skillImage" src={Express} alt="Express"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("seven")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3>Limited</h3>
                    <ul>
                      <li>Learned in Grade 11 computer science</li>
                      <li>Developed SQL server using this framework where I learned how to route and use the DOM</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="eight">  
                  <div id="skillHead">
                    <img id="skillImage" src={MySQL} alt="SQL"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("eight")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Limited</h3>
                    <ul>
                      <li>Learned in Grade 11 computer science</li>
                      <li>Know how to manipulate and take queries from databases using SQL</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="nine">  
                  <div id="skillHead">
                    <img id="skillImage" src={Swift} alt="Swift"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("nine")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Limited</h3>
                    <ul>
                      <li>Learned at Our Wave Hub as an IOS developer</li>
                      <li>I can create an IOS app and know how to use Swift to effectively interact with other frameworks and the app</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="ten">  
                  <div id="skillHead">
                    <img id="skillImage" src={Firebase} alt="Firebase"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("ten")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Limited</h3>
                    <ul>
                      <li>Learned at Our Wave Hub</li>
                      <li>Know how to use Firebase to store data in the database, use authentication, and more.</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="eleven">  
                  <div id="skillHead">
                    <img id="skillImage" src={Linux} alt="Linux"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("eleven")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3> Limited</h3>
                    <ul>
                      <li>Learned in Grade 11 computer science</li>
                      <li>I have coded my website in Linux, created my own sever in Linux and code in C on my Linux machine.</li>
                    </ul>
                  </div>
                </div>
                <div className="skillHolder" id="twelve">  
                  <div id="skillHead">
                    <img id="skillImage" src={C} alt="C++"></img>
                  </div>   
                  <div id="arrowContainer" onClick={() => display("twelve")}>
                    <img src={down} id="down" alt="hello"></img>
                  </div>
                  <div className="hiddenDiv">
                    <h3>Limited</h3>
                    <ul>
                      <li>Learned in Grade 11 and 12</li>
                      <li>I learned about pointers and making effienct programmers in competitive programming</li>
                    </ul>
                  </div>
                </div>
              </div>
              <h2>Soft Skills</h2>
              <div id="gallery">
                <div className="skillHolder" id="thirteen">  
                    <div id="skillHead">
                      <h2 id="soft">App Design</h2>
                    </div>   
                    <div id="arrowContainer" onClick={() => display("thirteen")}>
                      <img src={down} id="down" alt="hello"></img>
                    </div>
                    <div className="hiddenDiv">
                      <ul>
                        <li>Learned in Our Wave Hub and designing my own websites</li>
                        <li>Concepts: Storyboarding, Wireframing, A/B Testing, and Marketing</li>
                      </ul>
                    </div>
                </div>
                <div className="skillHolder" id="fourteen">  
                    <div id="skillHead">
                      <h2 id="soft">Leadership</h2>
                    </div>   
                    <div id="arrowContainer" onClick={() => display("fourteen")}>
                      <img src={down} id="down" alt="hello"></img>
                    </div>
                    <div className="hiddenDiv">
                      <ul>
                        <li>Developed in Robotics Team</li>
                        <li>Went from programmer, to Lead Programmer, to finally Team Captain in a span of 4 months as I showed the most initiative and leadership on my team</li>
                        <li>Led my team to win Judge's Award at iDesign in Toronto, and qualify to provincials.</li>
                        <li>For our first year, comprised of only beginners, I led my team to go to provinvials where we were the top 50% in Ontario. </li>
                      </ul>
                    </div>
                </div>
              </div>
              <button onClick={displayall}>Collapse</button>
          </div>
          <div id="experience">
            <h2>Experience</h2>
            <br></br>
            <div id = "imageholder">    
                <figure>
                  <Link to="/project">
                   <img src={robot} alt='cool' id='expImage'></img>
                  </Link>
                  <figcaption>4659 Warrior Robotix</figcaption>
                </figure>
                <figure>
                  <Link to="/project">
                   <img src={apple} alt='cool' id='expImage'></img>
                  </Link>
                  <figcaption>IOS Development</figcaption>
                </figure>
                <figure>
                  <Link to="/project">
                   <img src={suitcase} alt='cool' id='expImage'></img>
                  </Link>
                  <figcaption>Web Development</figcaption>
                </figure>
            </div>
          </div>
          <div id="footer">
            <h2>Contact me</h2>
            <p>Email: kassemtaha06@gmail.com</p>
          </div>
        </div>
    );
};


export default About;