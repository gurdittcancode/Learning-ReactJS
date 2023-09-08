import { useState, useEffect } from "react";
import "./styles/AddVideo.css";

const initialVideoState = {
  time: "Just now",
  channel: "gurdittcancode",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideos, editingVideo, updateVideos }) {
  const [video, setVideo] = useState(initialVideoState);

  //Why are we creating a state variable? You could achieve the same thing using 2 variables
  //but it would be a bit time-consuming to do that. This is easier.

  function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(video);

    if (editingVideo) {
      updateVideos(video);
    } else {
      addVideos(video);
    }

    setVideo(initialVideoState);
  }

  function handleChange(evt) {
    evt.stopPropagation();
    setVideo({ ...video, [evt.target.name]: evt.target.value });
    //LHS of an object can't be an expression, so add [] to tell JS to evaluate it first
  }

  useEffect(() => {
    console.log("useEffect triggered");

    if (editingVideo) setVideo(editingVideo);
  }, [editingVideo]);
  //editingVideo jab bhi badlega to ye useEffect chalega

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="video title"
        value={video.title}
      />
      {/* {video.title} */}
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="video views"
        value={video.views}
      />
      <button onClick={handleSubmit}>
        {editingVideo ? "Edit" : "Add"} Video
      </button>
    </form>
  );
}

export default AddVideo;
