import { useState, useReducer, useContext } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { videosDB } from "./data/data";
import { ThemeContext } from "./context/ThemeContext.jsx";
import VideoDispatchContext from "./context/VideoDispatchContext";
import videoReducer from "./reducer/videoReducer";
import Counter from "./components/Counter";

import "./App.css";
// import useLocalStorage from "./useLocalStorage";
// import useUpdateLogger from "./useUpdateLogger";

function App() {
  const [editingVideo, setEditingVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme);

  function editVideo(id) {
    console.log("Editing vid #", id);
    setEditingVideo(videos.find((video) => video.id === id));
  }

  // const [name, setName] = useLocalStorage("name", "");
  // useUpdateLogger(name);

  return (
    <ThemeContext.Provider value={mode}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className={`App ${mode}`}>
          <Counter />
          <button
            onClick={() => {
              mode == "lightMode" ? setMode("darkMode") : setMode("lightMode");
            }}
          >
            Change Theme
          </button>
          <div>
            <AddVideo editingVideo={editingVideo} />
          </div>
          <div>
            <VideoList editVideo={editVideo} videos={videos}/>
          </div>
        </div>
      </VideoDispatchContext.Provider>
    </ThemeContext.Provider>

    // <>
    //   <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    // </>
  );
}

export default App;
