import { useState, useReducer, useContext } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { videosDB } from "./data/data";
import { ThemeContext } from "./context/ThemeContext.jsx";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import videoReducer from "./reducer/videoReducer";

import "./App.css";

function App() {
  const [editingVideo, setEditingVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme);

  function editVideo(id) {
    console.log("Editing vid #", id);
    setEditingVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <button
              onClick={() => {
                mode == "lightMode"
                  ? setMode("darkMode")
                  : setMode("lightMode");
              }}
            >
              Change Theme
            </button>
            <div>
              <AddVideo editingVideo={editingVideo} />
            </div>
            <div>
              <VideoList editVideo={editVideo} />
            </div>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
