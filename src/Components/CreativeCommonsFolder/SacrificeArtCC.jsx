import React, { useState } from "react";
import "./CreativeCommons.css";

const SacrificeArtCC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="cc-SacrificeArt-badge-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {/* Collapsed Header Pill */}
      <div className="cc-SacrificeArt-header">
        <span className="cc-SacrificeArt-icon">🪶</span>
        <span className="cc-SacrificeArt-title">
          Offering to the Great Spirit - E.I. Couse
        </span>
        <span className="cc-SacrificeArt-arrow">{isOpen ? "▼" : "▲"}</span>
      </div>

      {/* Expanded Pop-Out Menu (Expands Upward) */}
      {isOpen && (
        <div className="cc-SacrificeArt-details-popout">
          <p className="cc-SacrificeArt-detail-item">
            <strong>Artwork:</strong> Offering to the Great Spirit (1921)
          </p>
          <p className="cc-SacrificeArt-detail-item">
            <strong>Artist:</strong> E. Irving Couse (Taos Art Colony)
          </p>
          <p className="cc-SacrificeArt-detail-item">
            <strong>Medium:</strong> Oil on Canvas
          </p>
          <p className="cc-SacrificeArt-detail-item">
            <strong>Record:</strong> Featured Masterpiece Lot
          </p>
          <div className="cc-SacrificeArt-divider" />
          <a
            href="https://scottsdaleartauction.com/artwork/offering-to-the-great-spirit/"
            target="_blank"
            rel="noopener noreferrer"
            className="cc-SacrificeArt-source-link"
            onClick={(e) => e.stopPropagation()}
          >
            View Fine Art Auction Archive ↗
          </a>
        </div>
      )}
    </div>
  );
};

export default SacrificeArtCC;