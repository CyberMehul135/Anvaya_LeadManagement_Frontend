import { useState } from "react";

export function useWindowSize(
  initialWidth = window.innerWidth,
  initialHeight = window.innerHeight
) {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return {
    width,
    height,
  };
}
