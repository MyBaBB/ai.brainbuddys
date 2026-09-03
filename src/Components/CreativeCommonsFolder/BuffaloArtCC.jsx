import  { useState } from "react";
import "./CreativeCommons.css";
import { GiBullyMinion } from "react-icons/gi";


const BuffaloArtCC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="cc-BuffaloArt-badge-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {/* Collapsed Header Pill */}
      <div className="cc-BuffaloArt-badge-header">
        <span className="cc-icon scale-x-[-1] "><GiBullyMinion  /></span>
        <span className="cc-title">Background Art CC</span>
        <span className="cc-arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Expanded Pop-Out Menu */}
      {isOpen && (
        <div className="cc-BuffaloArt-details-popout">
          <p className="cc-BuffaloArt-detail-item">
            <strong>Artwork:</strong> Steppe Bison (Chauvet Cave)
          </p>
          <p className="cc-BuffaloArt-detail-item">
            <strong>Discovery:</strong> The &quot;Higgs Bison&quot; Hybrid
          </p>
          <p className="cc-BuffaloArt-detail-item">
            <strong>Photo Credit:</strong> Carole Fritz / Sci.News
          </p>
          <p className="cc-BuffaloArt-detail-item">
            <strong>License:</strong> CC BY-SA / Fair Use Attribution
          </p>
          <div className="cc-BuffaloArt-divider" />
          <a
            href="https://www.sci.news/archaeology/higgs-bison-hybrid-cave-art-04285.html"
            target="_blank"
            rel="noopener noreferrer"
            className="cc-BuffaloArt-source-link"
            onClick={(e) => e.stopPropagation()}
          >
            Read &quot;Higgs Bison&quot; Article ↗
          </a>
        </div>
      )}
    </div>
  );
};

export default BuffaloArtCC;