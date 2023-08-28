import "./App.css";

import { useState } from "react";
import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { videosDB } from "./data.js";
import AddVideo from "./components/AddVideo";

function App() {
  console.log("Rendering App");

  const [videos, setVideos] = useState(videosDB);

  function addVideos(vid) {
    setVideos([...videos, { ...vid, id: videos.length + 1 }]);
  }

  return (
    <div className="App">
      <div>
        <h1>Videos</h1>
        <AddVideo addVideos={addVideos} videos={videos} />
      </div>

      {videos.map((video) => (
        <Video key={Math.floor(Math.random() * 100 + 1)} {...video}>
          <PlayButton
            onPlay={() => console.log(`Playing ${video.title}`)}
            onPause={() => console.log(`Paused ${video.title}`)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;
