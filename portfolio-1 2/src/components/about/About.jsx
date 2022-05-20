import React from 'react'
import './about.css'

const About = () => {
  return (
    <div id="about">
      <span className="about-title">about me</span>
    

      <div className= "about-content">
        {"I am a third year student majoring in "}
        <span className="about-green-text"> {"Computer Engineering"}</span>
        {" and minoring in "}
        <span className="about-green-text"> {"Artifical Intelligence"}</span>
        {" at the University of Toronto. I enjoy taking on technical challenges and set deterministic goals."}
        {" I keep up with advancements in technology and constantly learn and promote new skills from my school clubs. Currently I am working as a SWE intern at "}
        <span className="about-green-text"> {"Intel."}</span>
        <div>
          <br/>
          {"Technologies I've worked with: "}
          <ul className="about-description">
            <div>
              <li className="about-description">{"C/C++"}</li>
              <li className="about-description">{"Python/Numpy/Tensorflow"}</li>
              <li className="about-description">{"Java"}</li>
              <li className="about-description">{"Verilog"}</li>
              <li className="about-description">{"MATLAB"}</li>
            </div>

            <div>
              <li className="about-description">{"Github"}</li>
              <li className="about-description">{"HTML & CSS"}</li>
              <li className="about-description">{"Django"}</li>
              <li className="about-description">{"React"}</li>
              <li className="about-description">{"Arduino"}</li>
            </div>

          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default About