import "./App.css";
import { videos } from "./data.js";

import Video from "./components/Video";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App" onClick={() => console.log("Clicked App")}>
      <div>Videos</div>
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
        {/* <PlayButton message="Advanced Pause" onSmash={(msg) => alert(msg)}>
          Pause
        </PlayButton> */}
      </div>
    </div>
  );
}

export default App;
