import React from 'react';

const Rectangle = () => {
  return (
    <div className="top-0 left-0 w-full h-screen fixed z-[-1] overflow-hidden">
      {/* Horizontal lines */}
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 w-full h-px bg-gray-300"
          style={{ top: `${i * 24}px` }}
        />
      ))}

      {/* Vertical lines */}
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 h-full w-px bg-gray-300"
          style={{ left: `${i * 24}px` }}
        />
      ))}

      <div className='runned'>
        <div className="absolute left-[23.5px] w-[2px] h-[100px] bg-black animate-moveX" />
        <div className="absolute right-[23.5px] w-[2px] h-[100px] bg-black animate-moveX" />
        <div className="absolute top-[23.5px] h-[2px] w-[100px] bg-black animate-moveX" />
        <div className="absolute bottom-[23.5px] h-[2px] w-[100px] bg-black animate-moveX" />
      </div>
    </div>
  );
};

export default Rectangle;
