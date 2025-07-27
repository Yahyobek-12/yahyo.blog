"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const down = () => setIsClicked(true);
    const up = () => setIsClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-black pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px) scale(${isClicked ? 0.7 : 1})`,
        }}
      />
      {/* Inner cursor */}
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-black pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      />
    </>
  );
}
