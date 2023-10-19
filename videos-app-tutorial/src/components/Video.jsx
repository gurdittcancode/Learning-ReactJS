import { useContext } from "react";
import "./styles/Video.css";
import { ThemeContext } from "../context/ThemeContext";

function Video({
  title,
  channel,
  views,
  time,
  verified,
  id,
  children,
  dispatch,
  editVideo,
}) {

  const theme = useContext(ThemeContext);

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
