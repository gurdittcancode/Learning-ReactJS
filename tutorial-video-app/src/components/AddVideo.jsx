import { useState } from "react";
import "./styles/AddVideo.css";

const initialVideoState = {
  time: "Just now",
  channel: "gurdittcancode",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialVideoState);

  //Why are we creating a state variable? You could achieve the same thing using 2 variables
  //but it would be a bit time-consuming to do that. This is easier.

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(video);

    addVideos(video);
    setVideo(initialVideoState);
  }

  function handleChange(evt) {
    evt.stopPropagation();
    // console.log(evt.target.name, evt.target.value);
    setVideo({ ...video, [evt.target.name]: evt.target.value });
    //LHS of an object can't be an expression, so add [] to tell JS to evaluate it first
  }

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
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}

export default AddVideo;
