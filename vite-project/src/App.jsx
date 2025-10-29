import React, { useState } from "react";

const App = () => {
  const [Dot, setDot] = useState([]);
  const [Redo, setRedo] = useState([]);

  const colors = [
    "red",
    "blue",
    "green",
    "gray",
    "yellow",
    "black",
    "pink",
    "purple",
  ];

  function bodyClick(e) {
    const { clientX, clientY } = e;
   

    if (e.target.tagName === "BUTTON") return;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setDot((prevDot) => [
      ...prevDot,
      { x: clientX, y: clientY, color: randomColor },
    ]);
  }

 
  function handleUndo(e) {
    e.stopPropagation(); 
    if (Dot.length === 0) return;
    const newDots = [...Dot];
    const removedDot = newDots.pop();
    setDot(newDots);
    setRedo((prevRedo) => [...prevRedo, removedDot]);
  }

  
  function handleRedo(e) {
    e.stopPropagation();
    if (Redo.length === 0) return;
    const newRedo = [...Redo];
    const restoredDot = newRedo.pop();
    setDot((prevDot) => [...prevDot, restoredDot]);
    setRedo(newRedo);
  }


  function handleReset(e) {
    e.stopPropagation();
    setDot([]);
    setRedo([]);
  }

  return (
    <div
      onClick={bodyClick}
      className="box w-full h-screen relative overflow-hidden"
    >
     
      <div className="flex gap-2.5 absolute top-4 left-4 z-10">
        <button
          onClick={handleReset} disabled={Dot.length===0}
          className="reset border-2 px-5 py-0.5"
        >
          Reset
        </button>
        <button
          onClick={handleUndo}
          className="undo border-2 px-5 py-0.5"
        disabled={Dot.length===0} bg-black>
          Undo
        </button>
        <button
          onClick={handleRedo}
          className="redo border-2 px-5 py-0.5"
        >
          Redo
        </button>
      </div>

     
      {Dot.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            top: dot.y - 10,
            left: dot.x - 10,
            width: "20px",
            height: "20px",
            backgroundColor: dot.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
  