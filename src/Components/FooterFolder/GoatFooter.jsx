// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GiGoat } from "react-icons/gi"
import { FaRegCopyright } from "react-icons/fa"
import BatSignal from "../ContactMeFolder/ContactMe.jsx"
import HippieFootprints from "../HippieFootprintsFolder/HippieFootprints.jsx"
import './GoatFooter.css'

const GoatFooter = () => {
  return (
    <footer className="goat-footer-wrapper relative min-h-[230px] w-full overflow-hidden border-2 border-red-500">
      {/* ABSOLUTE BACKGROUND IMAGE (ART OF NATURE PLACEHOLDER) */}
      <div 
        className="footer-nature-bg absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url('https://picsum.photos/1920/600?nature')` // Placeholder: replace with your nature art URL later
        }}
      />

      {/* FOOTER CONTENT LAYER */}
      <div className="relative z-10 h-full w-full">
        <span className="copyRightInstaller absolute bottom-[1.23rem] left-4 z-10 h-10 w-10 bg-transparent">
          <a href="https://mybabb.com/youtubepageecho">
            <div className="copyRightAnchorTag2">
              <div className="copyRightContainer2 flex flex-col items-center justify-center px-8 py-4">
                <span className="copyRightCool2 absolute left-4 top-[50%] -translate-y-1/2 transform">
                  <FaRegCopyright />
                </span>

                <span className="noLeftBorder2 inline-block font-Itim-Regular">
                  <span className="webDevFancyWords2 whitespace-nowrap">
                    Hybrid&nbsp;Web-Craft
                  </span>
                </span>
              </div>
            </div>
          </a>
        </span>

        {/* CONTACT ASIDE */}
        <aside className="contact-aside relative">
          <span className="absolute bottom-[-4.5rem] right-4 z-50">
            <BatSignal />
          </span>
        </aside>

        {/* BACK TO TOP BUTTON */}
        <div className="goat relative m-auto mb-4 mt-4 w-fit whitespace-nowrap text-amber-200">
          <button
            className="backToTopBtn "
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <GiGoat size={50} />
            <span className="tooltip hidden sm:block">Back to Top</span>
          </button>
        </div>

        <div className="absolute bottom-0 z-50">
          <HippieFootprints />
        </div>
      </div>
    </footer>
  )
}

export default GoatFooter