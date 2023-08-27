import { useState } from "react";

function ImageHover() {
  const [scale, setScale] = useState("1");

  function handleMouseEnter() {
    setScale("1.25");
  }
  function handleMouseLeave() {
    setScale("1");
  }

  return (
    <div>
      <img
        style={{ scale: scale }}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
        alt="troll face XD"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default ImageHover;
