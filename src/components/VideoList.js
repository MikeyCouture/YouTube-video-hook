import React from "react";
import VideoItem from "./VideoItems";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, i) => {
    console.log(video);
    video.styleTransform = `translateX(${100 * (i - 1)}%)`;
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  // props.videos <--available here now
  return <div className="vid-list">{renderedList}</div>;
};

export default VideoList;
