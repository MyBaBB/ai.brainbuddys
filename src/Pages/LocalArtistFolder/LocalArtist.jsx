import { useEffect } from "react";
import ReverseButton from "../../../src/Components/ReverseButton/ReverseButton.jsx";
import BatSignal from "../../Components/ContactMeFolder/ContactMe.jsx";
import { GiGoat } from "react-icons/gi";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import { FaRegCopyright } from "react-icons/fa"; // FaRegCopyright
import HippieME from "../../Components/HippieMeFolder/HippieMe.jsx";
 
import "./LocalArtist.css";
 
const LocalArtistFolder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="local-artist-wrapper absolute ">
        {/* HEADER */}
        <header className="local-artist-header relative">
        
         
          <ReverseButton />
          < HippieME />
          
        </header>

        {/* MAIN CONTENT */}
        <main className="content-box relative ">
          

          <ul className="groovy-list mt-4">
            <div className="items-enter relative flex w-full justify-center">
              <div className="traditionalSwapBlock w-[10rem] md:w-[15rem] traditionalWord">
                <div className="quoteLeft absolute left-2 top-[50%] -translate-y-1/2 scale-x-[-1] transform text-base xs:text-lg md:text-2xl">
                  ✌🏻
                </div>

                <span className="traditionalWordVapor whitespace-nowrap">
                  Welcome
                </span>

                <div className="quoteRight absolute right-2 top-[50%] -translate-y-1/2 transform text-base xs:text-lg md:text-2xl">
                  🛖
                </div>
              </div>
            </div>

            <li>🎨 Handmade art and illustration</li>
            <li>📸 Real photography shot by human eyes</li>
            <li>🖌️ Illustrator art and Vector Graphics</li>
            <li>🔷 Credited Artist From Source Libraries</li>
            <li>🍄 Human produced 3D Art Graphics</li>
            <li>✨ Photoshop for the digital artist</li>
            <li>🧑🏼‍💻 Custom Written CSS Animations</li>
          </ul>

          <p className="groovy-title">
            Digital art has been around for decades — long before AI — and it’s
            a real, soulful art form made by actual humans with actual vibes.
          </p>
        </main>

        {/* COPYRIGHT + HYBRID TOOLTIP */}

        <div className="relative ">
          <span className="absolute bottom-[1.23rem] left-4 z-0 h-10 w-10 bg-transparent">
            <a href="https://mybabb.com/youtubepageecho ">
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

          {/* FOOTER */}
          <footer className="badge relative m-auto mb-4 mt-4 w-fit whitespace-nowrap text-amber-200">
            <button
              className="backToTopBtn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <GiGoat size={50} />
              <span className="tooltip hidden sm:block">Back to Top</span>
            </button>
          </footer>

          <div className="absolute bottom-0 z-50">
            <HippieFootprints />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalArtistFolder;
