import { useState } from "react";

export function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  return [count, increment, decrement];
}
