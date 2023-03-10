import React from "react";
import '../styles/pages/project.css'
import image from '../images/cool.png'
import east from '../images/east.png'

const Project = () => {
    return (
      <div id = "project">
        <h1>My projects </h1>
        <div id = "wallet">
          <div class = "card" id="card1">
            <img src={image} alt="card"></img>
            <h1>Example 1</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div class="butt">
              <img class="arrow" src={east} alt="arrow"></img>
            </div>
          </div>


          <div class = "card" id="card2" >
            <img src={image} alt="card" ></img>
            <h1>Image</h1>
          </div>
            <div class = "card" id="card3" onClick={() => {
              window.location.href = 'https://youtube.com';
              return null;
          }}>
              <img src={image} alt="card"></img>
              <h1>Image</h1>
            </div>
          
      </div>
      </div>
    );
};

export default Project;