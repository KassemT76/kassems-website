import React from "react";
import '../styles/pages/project.css'
import image from '../images/cool.png'
import east from '../images/east.png'
import { Link } from "react-router-dom";

const Project = () => {
    return (
      
      <div id = "project">
        <h1>My projects </h1>
        <div id = "wallet">
          {/* Card 1 */}
          <div class = "card" id="card1">
            <div class = "head">
              <img src={image} alt="card"></img>
              <h1>Example 1</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <Link to="/project/example1">
              <div class="butt">
                <img class="arrow" src={east} alt="arrow"></img>
              </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div class = "card" id="card2">
            <div class = "head">
              <img src={image} alt="card"></img>
              <h1>Example 2</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div class="butt" onClick={() => {
              window.location.href = 'https://youtube.com';
              return null;
             }}>
              <img class="arrow" src={east} alt="arrow"></img>
            </div>
          </div>
          {/* Card 3 */}
          <div class = "card" id="card3">
            <div class = "head">
              <img src={image} alt="card"></img>
              <h1>Example 3</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div class="butt" onClick={() => {
              window.location.href = 'https://youtube.com';
              return null;
             }}>
              <img class="arrow" src={east} alt="arrow"></img>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Project;