import { useState, useEffect } from "react";
// import Video from "./components/Video";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { videosDB } from "./data.js";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

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

  // UNDERSTAIND USEEFFECT HOOK!
  const [count, setCount] = useState(0);
  const [divColor, setDivColor] = useState("blue");
  useEffect(() => {
    //The code that we want to run
    console.log("The count is:", count);

    //Optional return function

    return () => {
      console.log("Don't change color!");
      setDivColor("blue");
    };
  }, [count]); //The dependency array

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

    // UNDERSTANDING USEEFFECT
    <>
      <div>
        <h1>You've clicked this button {count} times</h1>
        <button onClick={() => setCount(count + 1)}>DON'T CLICK!!!</button>

        <div
          style={{ height: "200px", width: "200px", backgroundColor: divColor }}
        ></div>
        <button onClick={() => setDivColor("green")}>Change Color</button>
      </div>
    </>
  );
}

export default App;
