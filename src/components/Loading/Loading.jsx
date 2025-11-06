import { useEffect, useState } from "react";

export default function LoadingBar({ loading }) {
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (loading) {
      setProgress(0);
      setAnimate(true);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 10;
          return prev;
        });
      }, 200);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setAnimate(false);
        setProgress(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <div
      // className=""
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        backgroundColor: "#007bff",
        width: `${progress}%`,
        transition: `${animate ? "width 0.3s ease-in-out" : "none"}`,
        zIndex: 9999,
      }}
    />
  );
}
