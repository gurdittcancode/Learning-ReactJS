import { useState, useEffect, useReducer, useContext } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
// import { videosDB } from "./data/data";
import { ThemeContext } from "./context/ThemeContext.jsx";
import VideoDispatchContext from "./context/VideoDispatchContext";
import videoReducer from "./reducer/videoReducer";
import Counter from "./components/Counter";

import axios from "axios";

import "./App.css";
import { useCallback } from "react";
// import useLocalStorage from "./useLocalStorage";
// import useUpdateLogger from "./useUpdateLogger";

function App() {
  const [editingVideo, setEditingVideo] = useState(null);
  const [videos, dispatch] = useReducer(videoReducer, []);
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme);
  const [loading, setLoading] = useState(true);

  const editVideo = useCallback(
    function editVideo(id) {
      setEditingVideo(videos.find((video) => video.id === id));
    },
    [videos]
  );

  //this fn ain't changing so memoize it.

  const URL = "https://my.api.mockaroo.com/videos.json.json?key=4f067a70";

  useEffect(() => {
    async function getVideos() {
      let res = await axios.get(URL);
      dispatch({ type: "LOAD", payload: res.data });
      setLoading(false);
    }
    getVideos();
  }, []);

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
          {loading && <h1 className="text-4xl">Loading videos...</h1>}
          <div>
            <VideoList editVideo={editVideo} videos={videos} />
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
