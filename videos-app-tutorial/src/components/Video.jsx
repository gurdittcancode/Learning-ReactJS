import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useVideoDispatch from "../hooks/useVideoDispatch";

import "./styles/Video.css";

function Video({
  title,
  channel,
  views,
  time,
  verified,
  id,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();

  return (
    <div className={`container ${theme}`}>
      <button
        className="close"
        onClick={() => dispatch({ type: "DELETE", payload: id })}
      >
        ❌
      </button>
      <button className="edit" onClick={() => editVideo(id)}>
        Edit
      </button>
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="random pic" />
      </div>

      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified && "✔️"}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Video;
