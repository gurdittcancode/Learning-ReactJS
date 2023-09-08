import { useState, useEffect } from "react";
// import Video from "./components/Video";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { videosDB } from "./data.js";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import axios from "axios";

function App() {
  const [videos, setVideos] = useState(videosDB);
  const [editingVideo, setEditingVideo] = useState(null);

  function addVideos(vid) {
    setVideos([...videos, { ...vid, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    console.log("Editing vid #", id);
    setEditingVideo(videos.find((video) => video.id === id));
  }

  function updateVideos(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    let newVids = [...videos];
    newVids.splice(index, 1, video);
    setVideos(newVids);
  }

  //   useEffect hook practice

  // const [resourceType, setResourceType] = useState("posts");

  console.log("render");

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => console.log(response));
  // }, [resourceType]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  //This will run on very first render, so we are adding an event listener on the window.

  return (
    // <div className="App">
    //   <div>
    //     <h1>Videos</h1>
    //     <AddVideo
    //       addVideos={addVideos}
    //       videos={videos}
    //       editingVideo={editingVideo}
    //       updateVideos={updateVideos}
    //     />
    //   </div>
    //   <div>
    //     <VideoList
    //       videos={videos}
    //       deleteVideo={deleteVideo}
    //       editVideo={editVideo}
    //     />
    //   </div>
    // </div>
    <div>
      {/* UNDERSTANDING USEEFFECT */}
      {/* <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1> */}

      <h1>{windowWidth}</h1>
    </div>
  );
}

export default App;
