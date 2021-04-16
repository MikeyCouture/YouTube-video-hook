import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import Banner from "./Banner";
import Footer from "./Footer";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("snowboarding");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="main-container">
      <Banner />
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="sixteen wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="vid-section">
              <VideoList
                onVideoSelect={video => setSelectedVideo(video)}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
