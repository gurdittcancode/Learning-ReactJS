import { useState, useEffect, useRef } from "react";
import "./styles/AddVideo.css";
import useVideoDispatch from "../hooks/useVideoDispatch";

const initialVideoState = {
  time: "Just now",
  channel: "gurdittcancode",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({ editingVideo }) {
  const dispatch = useVideoDispatch();
  const [video, setVideo] = useState(initialVideoState);
  const inputRef = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(video);

    if (editingVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialVideoState);
  }

  function handleChange(evt) {
    evt.stopPropagation();
    setVideo({ ...video, [evt.target.name]: evt.target.value });
  }

  useEffect(() => {
    if (editingVideo) setVideo(editingVideo);
    // inputRef.current.focus()
    // inputRef.current.value = "INPUT REF";

    inputRef.current.placeholder = "";

    "type here".split("").forEach((char, idx) => {
      setTimeout(() => {
        inputRef.current.placeholder += char;
      }, 150 * idx);
    });
  }, [editingVideo]);

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="video title"
        value={video.title}
      />
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
