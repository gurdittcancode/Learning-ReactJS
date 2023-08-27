import "./App.css";

import { useState } from "react";
import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import { videosDB } from "./data.js";

function App() {
  console.log("Rendering App");

  const [videos, setVideos] = useState(videosDB);

  return (
    <div className="App">
      <div>Videos</div>

      <button
        onClick={() => {
          //REMEMBER TO NOT UPDATE THE STATE VARIABLE DIRECTLY

          setVideos([
            ...videos,
            {
              id: videos.length + 1,
              title: "MongoDB tutorial",
              views: "1M",
              time: "30 minutes ago",
              channel: "gurdittcancode",
              verified: true,
            },
          ]);
        }}
      >
        Add Video
      </button>

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

      <div style={{ clear: "both" }}>
        <Counter />
      </div>
    </div>
  );
}

export default App;
