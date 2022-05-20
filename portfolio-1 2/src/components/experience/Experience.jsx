import React from 'react'
import "./experience.css"


const Experience = () => {
  return (
    <div id="experience">
      <span className="experience-title">experience</span>
        <div className="experience-box-small">
          <span className="experience-box-title">{"Software Engineer Intern @ Intel"}</span>
          <div>
            <span className="experience-box-date">{"May 2022 - Current"}</span>
          </div>
          <div className="experience-hide-block">
            <div classname="experience-box-content">
              <ul className="experience-description">
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-box-small">
          <span className="experience-box-title">{"Tech Team Associate @ IEEE UofT"}</span>
          <div>
            <span className="experience-box-date">{"May 2021 - May 2022"}</span>
          </div>
          <div className="experience-hide-block">
            <div classname="experience-box-content">
              <ul className="experience-description">
                <li>{"Plan and lead Arduino and Django technical workshops"}</li>
                <li>{"Assist in building software/hardware projects"}</li>
                <li>{"Demonstrated leadership and mentoring during workshops and hackathons like NewHacks and MakeUofT"}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-box-small">
          <span className="experience-box-title">{"Operations Associate @ Google Dev Student Clubs UofT"}</span>
          <div>
            <span className="experience-box-date">{"Sep 2020 - May 2022"}</span>
          </div>
          <div className="experience-hide-block">
            <div classname="experience-box-content">
              <ul className="experience-description">
                <li>{"Assist in conducting DSC events like Career fair and Women in Tech Conference, and help host 1 tech workshop per month"}</li>
                <li>{"Served as a Solution Challenge technical mentor and shared my expertise in tech and development with my mentees"}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-box-small">
          <span className="experience-box-title">{"Operations Officer II Summer Student @ TD Bank"}</span>
          <div>
            <span className="experience-box-date">{"May 2020 - Sep 2020"}</span>
          </div>
          <div className="experience-hide-block"> 
            <div classname="experience-box-content">
              <ul className="experience-description">
                <li>{"Designed 3 Business guides, bringing a fresh perspective to help identify efficiences in processes"}</li>
                <li>{"Covered 65+ topics to provide a holistic view on each team by interviewing with colleagues and collaborating with managers"}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience-box-small">
          <span className="experience-box-title">{"International Finalist @ DECA ICDC"}</span>
          <div>
            <span className="experience-box-date">{"April 2019 - May 2019"}</span>
          </div>
          <div className="experience-hide-block"> 
            <div classname="experience-box-content">
              <ul className="experience-description">
                <li>{"Recieved Certificate of Achievement and Top 6 Provincial Champion through demonstrating skills in financial, economic, and entrepreneurial literacy in international case study competition"}</li>
                <li>{"Proposed a marketing campaign to a judge through an effective business presentation & report"}</li>
              </ul>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Experience