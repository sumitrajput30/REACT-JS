import { useState,createContext } from "react";

const myContext=createContext();

const UserContext=({children})=>{
  const [name,setName]=useState("sumit");
  return(
    <>
    <h1>welcome</h1>
    
    <myContext.Provider value={{name}}>
     {children}
    </myContext.Provider>
    </>

  )
}
export default UserContext;
export {myContext}