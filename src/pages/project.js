import React from "react";
import '../styles/pages/project.css'
import image from '../images/cool.png'
import east from '../images/east.png'
import { Link } from "react-router-dom";

import Mail from '../images/Mail.png'
import Linkedin from '../images/LinkedIn.png'
import Github from '../images/GitHub.png'

const Project = () => {
    return (
      
      <div id = "project">
        <h1>My projects </h1>
        <div id = "wallet">
          {/* Card 1 */}
          <div class = "card" id="card1">
            <div class = "head">
              <div className="imagerow">
                <img src={image} alt="card"></img>
              </div>
              <h2>Our Wave Hub - IOS Development</h2>
              <p>At Our Wave hub, I learned how to develop in Swift and the Xcode enviroment. On top of that, I also learned how to design an app and the stages of app development. I learned things like UI/UX design, A/B testing, marketing, and Wireframing.</p>
            </div>
            <Link to="/project/card1" className="butt">  
            <div>
                <img class="arrow" src={east} alt="arrow"></img>
            </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div class = "card" id="card2">
            <div class = "head">
              <div className="imagerow">
                <img src={image} alt="card"></img>
              </div>
              <h2>4659 Warrior Robotix - Lead Programmer/Captain</h2>
              <p>At 4659 Robotix, I worked with a team to construct and program a robot to take part of the 2022-2023 VEX robotics game "Spin Up!" At 4659 Warrior Robotix, I learned how to work with my peers and lead them to make a finished project. I refined my skills in Python and I learned how to code multiple robot functionalities like Odometry, an auto-aiming function, PID, and an effective drive control.</p>
            </div>
            <Link to="/project/card2" className="butt">  
            <div>
                <img class="arrow" src={east} alt="arrow"></img>
            </div>
            </Link>
          </div>
          {/* Card 3 */}
          <div class = "card" id="card3">
          <div class = "head">
              <div className="imagerow">
                <img src={image} alt="card"></img>
              </div>
              <h2>Example 3</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <Link to="/project/card3" className="butt">  
            <div>
                <img class="arrow" src={east} alt="arrow"></img>
            </div>
            </Link>
          </div>
        </div>
        <div id="footer">
          <p>Contact me</p>
          <div id="contacts">
            <a href="mailto:kassemtaha06@gmail.com">
                <img src={Mail} alt='Email Link' className='linksImage'></img>
              </a>
              <Link to="https://www.linkedin.com/in/kassem-taha-b366b422a/">
                <img src={Linkedin} alt='Linkedin Link' className='linksImage'></img>
              </Link>
              <Link to="https://github.com/KassemT76">
                <img src={Github} alt='Github Link' className='linksImage'></img>
              </Link>
          </div>
        </div>
      </div>
    );
};

export default Project;