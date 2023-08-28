import { useState } from "react";

function Stack() {
  const [stack, setStack] = useState([]);

  function handlePushClick() {
    const element = Math.floor(Math.random() * 9) + 1;
    setStack([...stack, element]);
  }

  function handlePopClick() {
    const updatedStack = stack.slice(0, stack.length - 1);
    setStack(updatedStack);
  }

  return (
    <div>
      <div>{stack}</div>
      <div>
        <button onClick={handlePushClick}>Push to stack</button>
        <button onClick={handlePopClick} disabled={stack.length === 0}>
          Pop from stack
        </button>
      </div>
    </div>
  );
}

export default Stack;
