import { myContext } from "./userContext";
import { useContext, useState } from "react";
const Cybrom=()=>{
    const {name} = useContext(myContext)
    return(
        
        
        <>
        <h1>welcome to cybrom!!</h1>
       
        </>
    )
}
export default Cybrom;