
import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SuperLuxuriousBooked = () => {
  const [users,setUsers] =useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = () => {
    axios.get(`http://localhost:8888/car?type=luxurious`).then((res) => {
      console.log(res.data);
      setUserData(res.data)
    }).catch((error) => { })
  }
  const handleAddOne =  (car) => {
    if(window.confirm(" Cancel the Booking Request?")){
    const newStatus = ""
    const newcount = 1
      axios.put(`http://localhost:8888/car/${car.id}`, { ...car, user:  "" })
      // axios.put(`http://localhost:8888/car/${car.id}`, { ...car, status: newcount })
      .then(() => {
        setUserData(userData.map(item => item.id === car.id ? { ...item, user: newStatus } : item));
      })
      .catch((error) => {
        console.error('There was an error updating the status!', error);
      });
    }
    }
    const statuschange=(car)=>{
      const newStatus=car.status==='Booked'?'Pending':'Booked';
      
      // if(newStatus==='NotBooked'){
      
          axios.put(`http://localhost:8888/car/${car.id}`, { ...car, status:newStatus})
          
          .then(() => {
            setUserData(userData.map(item => item.id === car.id ? { ...item, status: newStatus } : item));
          })
          .catch((error) => {
            console.error('There was an error updating the status!', error);
          });
        
    }
   return  (
    <div className='container-fluid mt-4 mb-4 '>
    <table className='table table-hover table-striped '>
      <thead>
        <tr className='table-warning'>
          <th id='head'>ID</th>
          <th id='head'>CARNAME</th>
          <th id='head'>RS PER HR</th>
          <th id='head'>DRIVING-TYPE</th>
          <th id='head'>RANK</th>
          <th id='head'>MODEL</th>
          <th id='head'>IMAGE</th>
          <th id='head'>CAR_TYPE</th>
          <th id='head'>USER_NAME</th>

          <th id='head'>ACTIONS</th>
          <th id='head'>REQUEST</th>
        </tr>
      </thead>
      <tbody>
        {

          userData.length && userData.map((val, index) => {
            if(val.user.length>0){
              
            
            return <tr>
              <td>{index + 1}</td>
              <td>{val.carname}</td>
              <td>{val.price}</td>
              <td>{val.drivingtype}</td>
              <td>{val.carrank}</td>
              <td>{val.carmodel}</td>
              <td><img src={val.carimage} alt="Loading" /></td>
              <td>{val.type}</td>
 <td>{val.user}</td>

 <td> <button key={users.id} onClick={() => handleAddOne(val)} className="btn btn-danger float-left">Cancel Booking</button> </td>
 <td> <button type="button"  className={`btn ${val.status==='Booked'  ? 'btn-outline-success' : 'btn-outline-secondary'}`} onClick={() => statuschange(val)} >{val.status}</button> </td>   
           
            </tr>
            }
          })
        }
      </tbody>
    </table>

  </div>

   )


        
        

}
export default SuperLuxuriousBooked;