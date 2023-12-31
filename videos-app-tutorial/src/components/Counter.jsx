import { useState, useRef, useMemo, useCallback } from "react";

function Counter() {
  const [number, setNumber] = useState(10);

  let numOfClicks = useRef(0);

  function handleClick(evt) {
    evt.stopPropagation();

    // setNumber(number + 1);
    // setNumber(number + 1);
    //baar baar we are setting number = 1, because state vars don't get updated until next render

    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    /*
        React will put these in a queue & start executing asynchronously. Run the first one, number = 0, and set it to 1
        Then the second one runs, takes number = 1, and sets it to 2. And the third one...
    */

    numOfClicks.current++;
    console.log(numOfClicks.current);
  }

  // function fib(n) {
  //   if (n <= 1) return n;
  //   return fib(n - 1) + fib(n - 2);
  // }

  const fibFnMemoized = useCallback(function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fiboMemoized = useMemo(() => {
    //calculation function (wo value jo store karni hai)
    return fibFnMemoized(number);
  }, [number, fibFnMemoized]); //dependency array

  return (
    <>
      <h1>
        {number} | {fiboMemoized}
      </h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
}

export default Counter;
