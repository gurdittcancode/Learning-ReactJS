import { useContext, useState } from "react";
import "./styles/PlayButton.css";
import { ThemeContext } from "../context/ThemeContext";

function PlayButton({ children, onPlay, onPause }) {
  // let playing = false; //don't use this appraoch, use State instead.
  const [playing, setPlaying] = useState(false);

  function handleClick(evt) {
    //evt is called Synthetic Base Event in React

    evt.stopPropagation();

    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  const theme = useContext(ThemeContext);

  return (
    // <button onClick={() => console.log("CLICKED!")}>Play</button>
    // Our onClick isn't working because it's executing console.log and placing the return
    //value of that function, which is nothing. Make it an arrow function or function reference

    <button onClick={handleClick} className={`button ${theme}`}>
      {children} {playing ? "⏸️" : "⏯️"}
    </button>
  );
}

export default PlayButton;
