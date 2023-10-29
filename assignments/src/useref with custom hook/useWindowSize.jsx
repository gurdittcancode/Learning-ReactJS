import { useRef } from "react";

export function useWindowSize() {
  const windowDimensions = useRef([window.innerWidth, window.innerHeight]);
  return windowDimensions.current;
}
