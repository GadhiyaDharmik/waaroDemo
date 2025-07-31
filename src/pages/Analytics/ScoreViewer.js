import React, { useEffect, useState } from "react";

const ScoreViewer = ({ score }) => {
  const [displayedScore, setDisplayedScore] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplayedScore(Math.floor(progress * score));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [score]);

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 334 334"
        fill="none"
      >
        {/* Static SVG structure from your file */}
        <circle cx="167" cy="167" r="160" stroke="#ccc" strokeWidth="14" />
        <circle
          cx="167"
          cy="167"
          r="160"
          stroke="#FF5A5F"
          strokeWidth="14"
          strokeDasharray={2 * Math.PI * 160}
          strokeDashoffset={2 * Math.PI * 160 * (1 - score / 100)}
          strokeLinecap="round"
          transform="rotate(-90 167 167)"
        />

        {/* Dynamic Score Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="48"
          fill="#333"
          fontWeight="bold"
        >
          {displayedScore}
        </text>
      </svg>
    </div>
  );
};

export default ScoreViewer;
