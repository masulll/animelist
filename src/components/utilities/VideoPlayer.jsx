"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "300",
    heigth: "200",
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const BtnOpenTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className=" rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
        onError={() => alert("video is broken, please try another")}
      >
        tonton trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <BtnOpenTrailer />;
};

export default VideoPlayer;
