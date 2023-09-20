import { useState, useReducer } from "react";
// import Video from "./components/Video";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { videosDB } from "./data.js";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  // const [videos, setVideos] = useState(videosDB);

  const [videos, dispatch] = useReducer(videoReducer, videosDB);
  //name of variable, dispatch function = reducer function, initial state

  const [editingVideo, setEditingVideo] = useState(null);

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

  function addVideos(vid) {
    dispatch({ type: "ADD", payload: vid });
    //this is the convention, you have to follow it
    // setVideos([...videos, { ...vid, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    dispatch({ type: "DELETE", payload: id });
    // setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    console.log("Editing vid #", id);
    setEditingVideo(videos.find((video) => video.id === id));
  }

  function updateVideos(video) {
    dispatch({ type: "UPDATE", payload: video });
    // setVideos(newVids);
  }

  return (
    <div className="App">
      <div>
        <h1>Videos</h1>
        <AddVideo
          addVideos={addVideos}
          videos={videos}
          editingVideo={editingVideo}
          updateVideos={updateVideos}
        />
      </div>
      <div>
        <VideoList
          videos={videos}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        />
      </div>
    </div>
  );
}

export default App;
