import React from 'react'
import './nav.css'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {AiTwotoneMail} from "react-icons/ai";


const Nav = () => {
  return (
    <div className='nav'>
      <div className='sidebar-logos'>
        <a href="https://github.com/sanjana-d" target="_blank">
          <li><FaGithub size={24} /></li>
        </a>
        <a href="https://www.linkedin.com/in/sanjana-dasadia-965352198" target="_blank">
          <li><FaLinkedin size={24} /></li>
        </a>
        <a href="mailto:sanjana.dasadia@gmail.com" target="_blank">
          <li><AiTwotoneMail size={24} /></li>
        </a>
      </div>
      <div className='nav-links'>
        <a href="#header">
          <li>{"/home"}</li>
        </a>
        <a href="#about">
          <li>{"/about"}</li>
        </a>
        <a href="#experience">
          <li>{"/experience"}</li>
        </a>
        <a href="#projects">
          <li>{"/projects"}</li>
        </a>
      </div>
    </div>
  )
}

export default Nav