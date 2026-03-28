import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(prop) {

    let navigate=useNavigate()
    useEffect(()=>{
        let token=localStorage.getItem("token");
        if(token==null || !token){
            navigate("/login");
            return;
        }

    },[])
  return (
    <div>
        {prop.children}
    </div>
  )
}

export default Protected