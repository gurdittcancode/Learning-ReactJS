import { useState } from "react";

function Queue() {

  const [queue, setQueue] = useState([]);

  function handlePushClick() {
    const element = Math.floor(Math.random() * 9) + 1;
    setQueue([...queue, element]);
  }

  function handlePopClick() {
    const updatedQ = queue.map((e) => e);
    setQueue(updatedQ.shift());
    setQueue(updatedQ);
  }

  return (
    <div>
      {queue}
      <div>
        <button onClick={handlePushClick}>Push to queue</button>
        <button onClick={handlePopClick} disabled={queue.length === 0}>
          Pop from queue
        </button>
      </div>
    </div>
  );
}

export default Queue;
