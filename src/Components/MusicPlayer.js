import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../styles/MusicPlayer.css";

const MusicPlayer = () => {
  return (
    <div className="music-player p-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src="https://i.imgur.com/cFddyiG.png"
          alt="Album Cover"
          className="album-cover mr-3"
        />
        <header>
          <h5 className="mb-0">Kesariya</h5>
          <p className="text-muted mb-0">Pritam</p>
        </header>
      </div>
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="controls d-flex align-items-center">
          <i className="bi bi-shuffle mx-2" aria-label="Shuffle"></i>
          <i className="bi bi-skip-start-fill mx-2" aria-label="Previous"></i>
          <i className="bi bi-play-circle-fill mx-2" aria-label="Play"></i>
          <i className="bi bi-skip-end-fill mx-2" aria-label="Next"></i>
          <i className="bi bi-list mx-2" aria-label="Playlist"></i>
        </div>
        <div className="progress-container d-flex align-items-center w-100 mx-3">
          <span className="time-start">00:06</span>
          <ProgressBar now={50} className="mx-2 flex-grow-1" />
          <span className="time-end">00:10</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-fullscreen mx-2" aria-label="Fullscreen"></i>
        <i className="bi bi-gear mx-2" aria-label="Settings"></i>
        <i className="bi bi-volume-up mx-2" aria-label="Volume"></i>
        <input type="range" className="volume-slider" aria-label="Volume Control" />
      </div>
    </div>
  );
};

export default MusicPlayer;
