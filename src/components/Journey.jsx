import { useState } from "react";
import FadeIn from "./FadeIn.jsx";

const journeyItems = [
  {
    role: "Software Engineering Student",
    company: "DSEC",
    dates: "2023 - Present",
    summary:
      "Focused on full-stack projects, cloud fundamentals, and applied machine learning.",
    location: "trichy, India",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub",
    dates: "2022 - Present",
    summary:
      "Collaborated on UI improvements, documentation cleanups, and developer tooling.",
    location: "Remote",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    dates: "2021 - 2022",
    summary:
      "Built small business sites, landing pages, and automation scripts for local teams.",
    location: "Kerala, India",
  },
  
];

export default function Journey() {
  const [zoom, setZoom] = useState(1);
  const zoomMin = 1;
  const zoomMax = 1.6;
  const zoomStep = 0.1;

  const zoomIn = () => {
    setZoom((value) => Math.min(zoomMax, Math.round((value + zoomStep) * 10) / 10));
  };

  const zoomOut = () => {
    setZoom((value) => Math.max(zoomMin, Math.round((value - zoomStep) * 10) / 10));
  };

  const handleWheel = (event) => {
    if (!event.ctrlKey) return;
    event.preventDefault();
    setZoom((value) => {
      const next = value - event.deltaY * 0.002;
      const clamped = Math.min(zoomMax, Math.max(zoomMin, next));
      return Math.round(clamped * 100) / 100;
    });
  };

  return (
    <section className="journey" id="journey">
      <div className="journey-heading">My Journey</div>
      <div className="journey-grid">
        <FadeIn className="journey-timeline" once={false}>
          <h3>Journey Timeline</h3>
          <div className="journey-list">
            {journeyItems.map((item) => (
              <div className="journey-item" key={`${item.role}-${item.company}`}>
                <div className="journey-role">
                  {item.role} <span className="journey-company">@ {item.company}</span>
                </div>
                <div className="journey-dates">{item.dates}</div>
                <p className="journey-desc">{item.summary}</p>
                <div className="journey-location">
                  <span className="material-icons-outlined">location_on</span>
                  {item.location}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="journey-map" once={false}>
          <div className="journey-map-viewport" onWheel={handleWheel}>
            <img
              className="journey-map-image"
              src="./journey-map.png"
              alt="Journey map with highlighted locations"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
              style={{ transform: `scale(${zoom})` }}
            />
          </div>
          <div className="map-controls" aria-label="Map zoom controls">
            <button type="button" aria-label="Zoom in" onClick={zoomIn} disabled={zoom >= zoomMax}>+</button>
            <button type="button" aria-label="Zoom out" onClick={zoomOut} disabled={zoom <= zoomMin}>-</button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
