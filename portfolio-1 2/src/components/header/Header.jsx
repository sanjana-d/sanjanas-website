import React from 'react'
import "./header.css"
import Typist from 'react-typist'








export const Header = () => {
  return (
    <div id="header">
      <Typist avgTypingDelay={120}>
        <span className="header-title">
          {"hi, it's "}
          <span className="header-name"> {"sanjana."}</span>
        </span>
      </Typist>

      <div className="header-body">
        I am a software engineer and full time Comp Eng undergrad at the University of Toronto. I possess a strong passion for technical projects, artificial intelligence, and programming.
      </div>

      <a
        href="mailto:sanjana.dasadia@gmail.com"
        className="header-button"
      >
        {"Say hi!"}
      </a>   
    </div>
  )
}
export default Header