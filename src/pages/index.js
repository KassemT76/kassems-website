import React, { useEffect, useState } from 'react';
import '../styles/pages/index.css'
import cool from '../images/cool.png'
import { Link, useNavigate } from 'react-router-dom';

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

import webproj from '../images/websiteproject.png'

import Mail from '../images/Mail.png'
import Linkedin from '../images/LinkedIn.png'
import Github from '../images/GitHub.png'
  
export default function Home() {
  const nav = useNavigate()

  const titles = ["HTML", "Java", "Node", "Python", "Swift", "Javascript", "MySQL", "Linux", "Problem Solving"]
  const images = [HTML, Java, Node, Python, Swift, Javascript, MySQL, Linux, cool]

  const [title, setTitle] = useState("C")
  const [image, setImage] = useState(C)

  const [titleTwo, setTitleTwo] = useState("Express")
  const [imageTwo, setImageTwo] = useState(Express)

  const [titleThree, setTitleThree] = useState("Firebase")
  const [imageThree, setImageThree] = useState(Firebase)
  
  var i = 0

  const  NavigateToProjects = () => {
    nav("/project")
  }
  const NavigateToAbout = () => {
    nav("/about")
  }
  function incremen(){
    if (i < images.length-1){
      i++
    }
    else {
      i = 0
    }
  }


  useEffect( () => {
    const interval = setInterval(() => {
      incremen()
      setTitle(titles[i])
      setImage(images[i])
      console.log("first" + i)
      incremen()
      setTitleTwo(titles[i])
      setImageTwo(images[i])
      console.log("second" + i)
      incremen()
      setTitleThree(titles[i])
      setImageThree(images[i])
      console.log("third" + i)
    }, 3000)
  }, [])
  return (
   
    <div id = "home">   
      <h1 id='A'>Kassem Taha</h1>
      <p>A coder with a very impressive website. Wow!</p>
      <br></br>
      <div id = "landing">
        <div id = "skillsHome">
          <h2>Skills:</h2>
          <p>In my journey as a software engineer, I have learnt many skills and languages:</p>
          <div id = "imageholder">    
            <figure className='animatedfigure'>
              <img src={image} alt='cool' className='skillImageHome'></img>
              <figcaption>{title}</figcaption>
            </figure>
            <figure className='animatedfigure'>
              <img src={imageTwo} alt='cool' className='skillImageHome'></img>
              <figcaption>{titleTwo}</figcaption>
            </figure>
            <figure className='animatedfigure'>
              <img src={imageThree} alt='cool' className='skillImageHome'></img>
              <figcaption>{titleThree}</figcaption>
            </figure>
          </div>
          <div id="buttonHolder">
           <button onClick={NavigateToAbout}>Learn More!</button>
          </div>
        </div>
        <div id='projectHome'>
          <h2>Projects</h2>
          <p>Along my journey, I have done a lot of projects</p>
          <div id="imageholderProject">
              <figure className='grid1'>
                <img src={webproj} alt='cool' className='projectImageHome'></img>
                <figcaption>Project 1</figcaption>
              </figure>
              <figure className='grid1'>
                <img src={webproj} alt='cool' className='projectImageHome'></img>
                <figcaption>Project 2</figcaption>
              </figure>
              <figure className='grid2'>
                <img src={webproj} alt='cool' className='projectImageHome'></img>
                <figcaption>Project 3</figcaption>
              </figure>
              <figure className='grid2'>
                <img src={webproj} alt='cool' className='projectImageHome'></img>
                <figcaption>Project 3</figcaption>
              </figure>
          </div>
          <button onClick={NavigateToProjects}>Learn More!</button>
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
