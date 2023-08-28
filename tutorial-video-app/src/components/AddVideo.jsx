import { useState } from "react";
import "./styles/AddVideo.css";

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState({
    time: "Just now",
    channel: "gurdittcancode",
    verified: true,
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(video);

    addVideos(video);
  }

  function handleChange(evt) {
    evt.stopPropagation();
    // console.log(evt.target.name, evt.target.value);
    setVideo({ ...video, [evt.target.name]: evt.target.value });
    //LHS of an object can't be an expression, so add [] to tell JS to evaluate it first

    // console.log(video);
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="video title"
      />
      {/* {video.title} */}
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="video views"
      />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}

export default AddVideo;
