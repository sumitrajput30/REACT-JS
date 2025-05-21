// import { useRef } from "react";

// const App=()=>{
//   const myRef=useRef("");

//   // const myFun=()=>{
//   //   myRef.current.innerHTML="we learn react js";
//   // }

//   const Display=()=>{
//     myRef.current.style.width="400px";
//     myRef.current.style.height="400px";
//     myRef.current.style.border = "2px solid red";
//     myRef.current.style.color = "red";
//     myRef.current.style.textAlign = "center";
//     // myRef.current.style.margin = "200px";
//     myRef.current.style.padding = "100px";

//   }
//   return(
//     <>
//   {/* <h1 ref={myRef}>login system</h1> */}
//   <h1 ref={myRef}>we learn react js from cybrom</h1>


//   {/* <button onClick={myFun}>click here!!</button> */}
//   <button onClick={Display}>click here!!</button>
//   </>
//   )
// }

// export default App;



// render count

import { useState, useRef, useEffect } from "react";

const App=()=>{

  const [name, setname]=useState("");
  const cntRef=useRef(0);
  console.log(cntRef);

  useEffect(()=>{
    cntRef.current=cntRef.current+1;
  })

  return(

    <>

    enter your name: <input type="text"  value={name}
    onChange={(e)=>{setname(e.target.value)}} />

    <h1>my Render Count:{cntRef.current}</h1>
    </>
  )
}

export default App;