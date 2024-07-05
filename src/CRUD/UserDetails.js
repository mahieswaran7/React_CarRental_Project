import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

  // import adminmodulecss from '../components/Dashboard/adminmodulecss.module.css'

const UserDetails = () => {
  
  const nav=useNavigate()
 
     const [itemData,setItemData] = useState([]);
    
     
     useEffect(()=>{
      fetchData()
   
    },[])
    
    const fetchData = ()=>{
      axios.get(`http://localhost:8888/users`).then((res)=>{
           console.log(res.data);
          setItemData(res.data)
      }).catch((error)=>{})
  }

    const deleteCar = (id)=>{
     
        if(window.confirm(`Do you want to delete the User:${id}`)){
           axios.delete(`http://localhost:8888/users/${id}`).then(()=>{
            window.alert("Record Deleted Successfully!!");
fetchData();
           }).catch((error)=>{})
        }
    }
 
    return (
        <div className='container-fluid mt-4 mb-4 '>
            
           
          
        
            
          
          

            <table className='table table-hover table-striped '>
              <thead>
                <tr className='table-warning'>
                    <th id='head'>ID</th>
                    <th id='head'>USER NAME</th>
                    <th id='head'>USER EMAIL</th>
                    <th id='head'>USER ADDRESS</th>
                    <th id='head'>USER CONTACT</th>
                    <th id='head'>IMAGE</th>
                   
                    
                    <th id='head'>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {
                itemData  && itemData.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.username}</td>
                            <td>{val.useremail}</td>
                            <td>{val.address}</td>
                            <td>{val.phoneNumber}</td>
                            <td><img src={val.avatar}/></td>
                            <td>
                              
                                <button type='button'  onClick={()=>deleteCar(val.id)} className='btn btn-danger '>
                                  DELETE  
                                </button>
                              
                               
                            </td> 
                        </tr>
                    })
                }  
              </tbody>
            </table>
           
        </div>
       
    )
}

export default UserDetails;
