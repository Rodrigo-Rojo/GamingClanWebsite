import React from "react";
import ReactPlayer from "react-player";

export default function Carousel({clips}) {
  return (
    <section id="clips" className="carousel-seccion main-section">
      <div className="video-container container carousel-dark">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-video carousel-item active">
              <div className="player-wrapper">
                <h2 className="h2">Infinity Rage Clips</h2>
                <ReactPlayer
                  width="80%"
                  height="80%"
                  controls={true}
                  className="react-video"
                  key="default"
                  url="https://www.youtube.com/watch?v=-OvzzdRpfEg"
                />
              </div>
            </div>
            {clips.map((clip) => (
                <div className="carousel-video carousel-item">
                  <div className="player-wrapper">
                    <h2 className="h2">Infinity Rage Clips</h2>
                    <ReactPlayer
                      controls={true}
                      className="react-video"
                      width="80%"
                      height="80%"
                      key={clip._id}
                      url={clip.url}
                    />
                  </div>
                </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
