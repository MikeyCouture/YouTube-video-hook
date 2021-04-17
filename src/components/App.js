import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import Banner from "./Banner";
import SliderButtons from "./SliderButtons";
import Footer from "./Footer";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("snowboarding");
  const [currSlide, setCurrSlide] = useState(0);

  const slides = document.querySelectorAll(".vid-item");
  const maxSlides = slides.length;

  const increment = () => {
    currSlide === maxSlides - 1 ? setCurrSlide(0) : setCurrSlide(currSlide + 1);
  };
  const decrement = () => {
    currSlide === 0 ? setCurrSlide(maxSlides - 1) : setCurrSlide(currSlide - 1);
  };

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
                currSlide={currSlide}
              />
            </div>
            <SliderButtons onNextChange={increment} onPrevChange={decrement} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
