import React from 'react'
import './projects.css'
import {FaGithub} from "react-icons/fa";





const Projects = () => {
  return (
    <div id="projects">
      <span className="projects-title">projects</span>
      <div classname="projects-grid">
        <div className='projects-box'>
          <a href="https://github.com/sanjana-d/LOC8-Geographic-Interface-Software-Program" target="_blank" rel="noreferrer"> 
            <div id="github-icon">
              <FaGithub size={30}/>
            </div>
          </a>
          {"LOC8: Geographic Interface Software Program"}
          <div className='projects-description'>
            <br/>
            {"Designed GPS software in C++ that visualizes maps (streets, intersections etc.) and solves travel optimization- shortest path problem and displays the path using EZGL. "}
            {"Used multi-threading to speed up software by 4x, allowing time for perturbations."}
          </div>
          <div className='projects-tech'>
            <br/>
            {"Dijkstra, A*, BFS/DFS, API's, STL, GIT, Perturbations"}
          </div>
        </div>
        


          
        <div className='projects-box'>
          <a href="https://github.com/sanjana-d/ece361-Computer-Networks/tree/master/TextConference" target="_blank" rel="noreferrer"> 
            <div id="github-icon">
              <FaGithub size={30}/>
            </div>
          </a>
          {"Text Conference Chat Room"}
          <div className='projects-description'>
            <br/>
            {"Implemented a server in C++ that allows multiple clients to create, join, leave, message different sessions/chat rooms.  "}
            {"Used UNIX TCP sockets & I/O multiplexing in server to listen for multiple incoming connections from clients"}
          </div>
          <div className='projects-tech'>
            <br/>
            {"UNIX TCP sockets, Synchronus I/O Multiplexing"}
          </div>
        </div>
        

        <div className='projects-box'>
          <a href="https://github.com/sanjana-d/Monopoly-JAVA" target="_blank" rel="noreferrer"> 
            <div id="github-icon">
              <FaGithub size={30}/>
            </div>
          </a>
          {"Monopoly"}
          <div className='projects-description'>
            <br/>
            {"Programmed Monopoly in Java using Object-Oriented Programming and Java Swing for UI."}
          </div>
          <div className='projects-tech'>
            <br/>
            {"Java, OOP, Swing"}
          </div>
        </div>

        <div className='projects-box'>
          <a href="https://github.com/sanjana-d/Reversi" target="_blank" rel="noreferrer"> 
            <div id="github-icon">
              <FaGithub size={30}/>
            </div>
          </a>
          {"Reversi"}
          <div className='projects-description'>
            <br/>
            {"Programmed the popular game-Reversi in C. Implemented a computer player to play against a human. "}
            {"AI computer player performed better against 2 staff developed programs"}
          </div>
          <div className='projects-tech'>
            <br/>
            {"C, Predict Next Human Move"}
          </div>
        </div>

        <div className='projects-box'>
          
            <div id="github-icon">
              <FaGithub size={30}/>
            </div>
          
          {"ThermoComforter: Relief from Hot Flashes"}
          <div className='projects-description'>
            <br/>
            {"Lead an engineering team to propose a product for relieving symptoms of hot flashes and outlined design requirements and measures of success. "}
            {"Desgin is a blanket with tubing that will change the amount of thermal energy exposed to the body."}
          </div>
          <div className='projects-tech'>
            <br/>
            {"Leadership, Collaboration"}
          </div>
        </div>

      </div>
      <div className='projects-end'><br/><br/><br/></div>
      


      
    </div>
  )
}

export default Projects