
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Footer from "./Footer.js"

const Selected = () => {

  const [users,setUsers] =useState([]);
  const[itemData,setItemData] = useState([])
  const [clicking,setclikcing] = useState(0);


  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  },[]);

  const fetchCars = async () => {
    try {
      let userdata = sessionStorage.getItem('user'); 
      const response = await fetch(`http://localhost:8888/car?user=${userdata}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };


  useEffect(() => {
    fetchCars();
  });

  const handleAddOne =  (car) => {
    const newStatus = ""
    const newcount = 1
      axios.put(`http://localhost:8888/car/${car.id}`, { ...car, user:  "" })
      // axios.put(`http://localhost:8888/car/${car.id}`, { ...car, status: newcount })
      .then(() => {
        setItemData(itemData.map(item => item.id === car.id ? { ...item, user: newStatus } : item));
      })
      .catch((error) => {
        console.error('There was an error updating the status!', error);
      });
      
      // const updatedCars = cars.map(car => {
      //   if (car.carid === carid) {
      //     return { ...car, count: 1 }; // Set count to 1 for the clicked car
      //   }
      //   return car;
      }
    
  return  <>

        {/* by using the session storage method for getting the username */}
        <div className="container mt-5">
      <div className="row">{

        cars.map((val, index) => (
            <div key={val.id}  className="col-lg-4 col-md-4 col-sm-6">
            <div className="card mb-3" id='card'>
              <img src={val.carimage} className="card-img-top" alt={val.name} style={{height:"300px"}} />
              <div className="card-body">
                <h5 className="card-title">{val.carname}</h5>
                <p className="card-text">Booked by: <strong>  {val.user} </strong></p>
                <p className="card-text">Booked by: <strong>  {val.status} </strong></p>
                <button key={users.id} onClick={() => handleAddOne(val)} className="btn btn-primary float-left">Remove the item </button> 
              </div>  
              
            </div>
          </div>))}
      </div>
    </div>
    <Footer></Footer>

        </>
        

}
export default Selected