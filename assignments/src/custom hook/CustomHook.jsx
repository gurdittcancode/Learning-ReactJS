import { useCounter } from "./useCounter"

function CustomHook() {
    const [count, increment, decrement] = useCounter(10);
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CustomHook