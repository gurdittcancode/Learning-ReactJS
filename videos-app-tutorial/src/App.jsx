import { useState, useReducer, useContext } from "react";
import { videosDB } from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { ThemeContext } from "./context/ThemeContext.jsx";

import "./App.css";

function App() {
  const [editingVideo, setEditingVideo] = useState(null);

  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  //name of variable, dispatch function = reducer function, initial state

  function videoReducer(videos, action) {
    //videos is the (previous) state

    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE": {
        let index = videos.findIndex((v) => v.id === action.payload.id);
        let newVids = [...videos];
        newVids.splice(index, 1, action.payload);
        setEditingVideo(null);
        return newVids;
      }

      default:
        return videos;
    }
  }

  // function deleteVideo(id) {
  //   dispatch({ type: "DELETE", payload: id });
  // setVideos(videos.filter((video) => video.id !== id));
  // }

  function editVideo(id) {
    console.log("Editing vid #", id);
    setEditingVideo(videos.find((video) => video.id === id));
  }

  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme);

  return (
    <ThemeContext.Provider value={mode}>
      <button
        onClick={() => {
          mode == "lightMode" ? setMode("darkMode") : setMode("lightMode");
        }}
      >
        Change Theme
      </button>
      <div className={`App ${mode}`}>
        <div>
          <AddVideo
            dispatch={dispatch}
            videos={videos}
            editingVideo={editingVideo}
          />
        </div>
        <div>
          <VideoList
            videos={videos}
            dispatch={dispatch}
            editVideo={editVideo}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
