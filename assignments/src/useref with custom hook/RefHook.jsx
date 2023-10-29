import { useWindowSize } from "./useWindowSize";

const RefHook = () => {
  const [width, height] = useWindowSize();
  return (
    <h1 className="text-4xl">
      Size of window: {width}px * {height}px
    </h1>
  );
};

export default RefHook;
