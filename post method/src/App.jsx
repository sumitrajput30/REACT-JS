import { useState } from "react";
import axios from "axios";

const App=()=>{
  const [input,setinput]=useState({});
  const handleinput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput(values=>({...values, [name]: value}));
    console.log(input);

  }
  const handlesubmit=async()=>{
    let api="http://localhost:3000/student";
    const response=await axios.post(api,input);
    console.log(response)
    alert("data successfully saved!!!")
  }

  return(
    <>
    <h1> Application form </h1>
    Enter Rollno: <input type="text" name="rollno" onChange={handleinput}/>

  <br />

  Enter Name : <input type="text" name="name" onChange={handleinput}/>
  <br />
  Enter City: <input type="text" name="city" onChange={handleinput}/>
  <br />
  Enter Fees: <input type="text" name="fees" onChange={handleinput}/>
  <br />

  <button onClick={handlesubmit}>save!!!</button>
    </>
  )
}

export default App;

