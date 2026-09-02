import { useEffect } from "react";
import ReverseButton from "../../Components/ReverseButton/ReverseButton.jsx";
import HippieME from "../../Components/HippieMeFolder/HippieMe.jsx";
import GoatFooter from "../../Components/FooterFolder/GoatFooter.jsx";
import HippieFootprints from "../../Components/HippieFootprintsFolder/HippieFootprints.jsx";
import "./LocalArtist.css";

const LocalArtistFolder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="local-artist-wrapper absolute">
        {/* HEADER */}
        <header className="local-artist-header relative">
          <ReverseButton />
          <HippieME />
        </header>

        {/* MAIN CONTENT */}
        <main className="content-box relative">
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

     
         <GoatFooter />
        
      </div>
      
    </>
  );
};

export default LocalArtistFolder;