import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Customers() {
    const [customers, setcustomers] = useState([]);
    async function getCustomersDetails(){
        let res=await axios.get(`${process.env.REACT_APP_BE_API_URL}/admin/allCustomers`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        setcustomers(res.data);
        console.log(res.data);
    }
    useEffect(()=>{
        getCustomersDetails();
    },[])
  return (
    <div>
        <table border="1px">
            <tr>
                <th>sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
            </tr>
            {
                customers.map((item,ind)=>{
                    return(
                        <tr>
                            <td>{ind+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default Customers