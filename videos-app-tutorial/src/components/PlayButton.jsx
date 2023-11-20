import { useContext, useState, memo } from "react";
import "./styles/PlayButton.css";
import { ThemeContext } from "../context/ThemeContext";

const PlayButton = memo(function PlayButton({ children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);

  function handleClick(evt) {
    evt.stopPropagation();

    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  const theme = useContext(ThemeContext);

  return (
    <button onClick={handleClick} className={`button ${theme}`}>
      {children} {playing ? "⏸️" : "⏯️"}
    </button>
  );
});

export default PlayButton;
