import React from "react";
import VideoItem from "./VideoItems";

const VideoList = ({ videos, onVideoSelect, currSlide }) => {
  const renderedList = videos.map((video, i) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
        index={i}
        currSlide={currSlide}
      />
    );
  });
  // props.videos <--available here now
  return <div className="vid-list">{renderedList}</div>;
};

export default VideoList;
