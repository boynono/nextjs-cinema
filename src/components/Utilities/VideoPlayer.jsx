"use client";
import { XCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const options = { width: 300, height: 300 };

  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className='fixed bottom-2 right-2'>
        <button
          className='text-color-primary float-right bg-color-secondary px-3 mb-1'
          onClick={handleVideoPlayer}>
          {/* <XCircle size={32} /> */}X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={() => alert("video not found")}
        />
      </div>
    );
  };
  const ButtonOpenPlayer = () => {
    return (
      <button
        className='fixed bottom-4 right-4 bg-color-primary text-color-dark px-3 mb-1 text-xl hover:bg-color-accent transition-all shadow-xl rounded-md'
        onClick={handleVideoPlayer}>
        show
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
