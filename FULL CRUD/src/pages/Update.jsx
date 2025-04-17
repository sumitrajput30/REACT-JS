import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Update=()=>{
  const [mydata, setMydata] = useState([]);

  const navigate= useNavigate();

  const loadData= async()=>{
    let api="http://localhost:3000/employee";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data)
  }
  useEffect(()=>{
    loadData();
  }, []);
const myDel=async(id)=>{
  let api=`http://localhost:3000/employee/${id}`;
  const response = await axios.delete(api);
  console.log(response);
  toast.warning("Record succesfully deleted!");
  loadData();
}

const myEdit=(id)=>{
  navigate(`/myedit/${id}`)
}



let sno=0;
  const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
        <tr>
          <td> {sno}</td>
          <td> {key.empno}</td>
          <td> {key.name}</td>
          <td> {key.designation}</td>
          <td> {key.salary}</td>
          <td> 
          <MdDelete  className="delIcon" onClick={()=>{myDel(key.id)}} />
          </td>

          <td>
          <FaEdit className="editIcon" onClick={()=>{myEdit(key.id)}}  />
          </td>
        </tr>
      </>
    )
  })
    return(
        <>
         <h1> Update Page</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Emp no</th>
          <th> Name</th>
          <th>Designation</th>
          <th> Salary</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
      </Table>
         <ToastContainer />
        </>
    )
}

export default Update;