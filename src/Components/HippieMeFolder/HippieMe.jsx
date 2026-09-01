import React from 'react'
import NotRobot from '../NotRobotFolder/NotRobot.jsx'
import './HippieMe.css'



const HippieMe = () => {
  return (
    <>
       <div className="NotRobotGradient relative m-auto mb-2 mt-4 h-[100px] w-[100px]">
            <a
              href="https://about.us.mybabb.com/aboutuspage#"
              className="not-robot-link hybridTooltip2 absolute"
            >
              <NotRobot />
              <div className="tooltipTextLayer">
                Human Hands Craft Better Energy{" "}
              </div>
              <div className="tooltipTextLayer2">Robot Art is Optional</div>
              <div className="tooltipTextLayer3">It is Your Choice</div>
            </a>
          </div>




    </>
  )
}

export default HippieMe