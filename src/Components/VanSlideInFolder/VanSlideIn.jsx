// eslint-disable-next-line no-unused-vars
import React from 'react'
import './VanSlideIn.css'
import { TbCamper } from "react-icons/tb";
import { GiCampCookingPot } from "react-icons/gi";
import { FaCampground } from "react-icons/fa";

const VanSlideIn = () => {
  return (
    <>
    
    <article className="van-groovy-title relative flex flex-col  
                        items-center justify-center text-center ">
            <h2>
              <span className="inline-block scale-x-[-1] text-base xs:text-lg md:text-2xl">
                <FaCampground color="limegreen" />
              </span>
              <span className=" inline-block whitespace-nowrap">
                &nbsp;&nbsp;Traditional&nbsp;&nbsp;
                <span className="tbCamper inline-block text-base xs:text-lg md:text-2xl">
                  <TbCamper color="limegreen" />
                </span>
                &nbsp;&nbsp;Style&nbsp;&nbsp;
              </span>
              <span className="inline-block text-base xs:text-lg md:text-2xl">
                <GiCampCookingPot color="limegreen" />
              </span>
            </h2>
     </article>
    
    
    
    </>
  )
}

export default VanSlideIn