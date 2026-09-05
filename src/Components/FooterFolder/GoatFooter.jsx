// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiGoat } from "react-icons/gi";
import { FaRegCopyright } from "react-icons/fa";
import BatSignal from "../ContactMeFolder/ContactMe.jsx";
import HippieFootprints from "../HippieFootprintsFolder/HippieFootprints.jsx";
import TaosImage from "../../Images/ai.brainbuddys.webp";
import SacrificeArtCC from "../CreativeCommonsFolder/SacrificeArtCC.jsx";
import { GiSurprisedSkull } from "react-icons/gi";
import "./GoatFooter.css";

const GoatFooter = () => {
  return (
    <div className="goat-footer-outer-wrapper relative h-full w-full">
      {/* NATURE IMAGE BANNER PLACED DIRECTLY ON TOP OF THE FOOTER */}
      <div
        className="footer-nature-top-banner relative"
        style={{ backgroundImage: `url(${TaosImage})` }}
      >
        <SacrificeArtCC />
      </div>

      {/* FOOTER MAIN CONTAINER */}
      <footer className="goat-footer-wrapper relative mt-4 w-full">
        {/* FOOTER CONTENT LAYER */}
        <div className="relative z-10 h-full w-full">
          <span className="copyRightInstaller absolute bottom-[1.23rem] left-4 z-10 h-10 w-10 bg-transparent">
            <a href="https://mybabb.com/youtubepagecatwoman">
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
<div className="goat relative m-auto mb-8 w-fit whitespace-nowrap">
  <button
    className="backToTopBtn"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <GiGoat size={50} />
    <span className="tooltipGoat hidden sm:block"
            >      
      <GiSurprisedSkull />
      <span className="tooltipGoatText text-xl">Back to Top</span>
    </span>
  </button>
</div>

          {/* FOOTPRINTS ANCHORED AT THE BOTTOM OF THE FOOTER */}
          <div className="pointer-events-none absolute -bottom-4 left-0 z-[99999] w-full">
            <HippieFootprints />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoatFooter;
