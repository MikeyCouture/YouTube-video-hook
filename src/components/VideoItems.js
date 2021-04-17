import "./VideoItem.css";
import React from "react";

const VideoItems = ({ video, onVideoSelect, index, currSlide }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="vid-item"
      style={{ transform: `translateX(${110 * (index - currSlide)}%)` }}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItems;
