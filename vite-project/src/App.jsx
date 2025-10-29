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


//   function bodyClick(e){
//     const{clientX,clientY}=e
//     if(e.target.tagName==="Button")return
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     console.log(randomColor)
//     setDot((prevDot)=>[
//       ...prevDot,
// {x:clientX,y:clientY,colors:randomColor},
//     ])
//   }


 

function bodyClick(e){
if(e.target.tagName==="BUTTON")
  return
}

const dotObj={
    color = colors[Math.floor(Math.random() * colors.length)];
    id:Date.now(),
    x:e.clientX,
    y:e.clientY

}
setDot([...Dot,dotObj])
console.log(dotObj)


// function handleUndo(e) {
//   e.stopPropagation()
//   if(Dot.length===0)return
//   const newDots =[...Dot]
//   const removedDot =Dot.pop()
//   setDot(newDots)
//   // console.log(newDots)
//   setRedo((prevRedo)=>[...prevRedo,removedDot])
// }





  // function handleRedo(e) {
  //   e.stopPropagation();
  //   if (Redo.length === 0) return;
  //   const newRedo = [...Redo];
  //   const restoredDot = newRedo.pop();
  //   setDot((prevDot) => [...prevDot, restoredDot]);
  //   setRedo(newRedo);
  // }

 
  function handleReset(e) {
    setDot([]);
    setRedo([]);
  }

  return (
    <div
      onClick={bodyClick}
      className="box w-full h-screen bg-amber-100 relative overflow-hidden"
    >
   
      <div className="flex gap-2.5 absolute top-4 left-4 z-10">
        <button
          onClick={handleReset}
          className="reset border bg-black text-amber-50 px-3 py-1.5 rounded"
        >
          Reset
        </button>
        <button
          onClick={handleUndo}
          className="undo border bg-black text-amber-50 px-3 py-1.5 rounded"
        >
          Undo
        </button>
        <button
          // onClick={handleRedo}
          className="redo border bg-black text-amber-50 px-3 py-1.5 rounded"
        >
          Redo
        </button>
      </div>

    </div>
  );
};

export default App;
