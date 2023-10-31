import { useState, useRef } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  let numOfClicks = useRef(0);

  function handleClick(evt) {
    evt.stopPropagation();

    // setNumber(number + 1);
    // setNumber(number + 1);
    //baar baar we are setting number = 1, because state vars don't get updated until next render
    //This way is incorrect if your new state depends on previous state

    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    /*
        React will put these in a queue & start executing asynchronously. Run the first one, number = 0, and set it to 1
        Then the second one runs, takes number = 1, and sets it to 2. And the third one...
    */
   console.log(number);

    numOfClicks.current++;
    console.log(numOfClicks.current);

  }

  return (
    <>
      <h1>
        {number} {numOfClicks.current}
      </h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
}

export default Counter;
