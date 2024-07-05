import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Footer from "./Footer.js"
const UserInfo = () => {

  let userinfos = sessionStorage.getItem('user')
  const [itemData,setItemData] = useState([]);

  useEffect(()=>{
    fetchCars() 
},[])

const fetchCars = async () => {
  try {
    const response = await fetch(`http://localhost:8888/users?useremail=${userinfos}`);
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
    const data = await response.json();
    setItemData(data);
  } catch (error) {
  }
};
  return <>
  <div className='.d-inline-flex. p-5 bd-highlight' style={{margin:"auto"}}>
  

{
  itemData.map((val, index) => (
    <div key={index} className="col-lg-4 col-md-4 col-sm-6">
   
        <p className="card-title display-4" id='result ' >Email:<strong> {val.useremail} </strong></p>
        <p className="card-text display-5"  id='result '>UserName: <strong> {val.username} </strong></p> 
        <p className="card-text display-5"  id='result '>Phone_number:<strong> {val.phoneNumber} </strong></p> 
        <p className="card-text display-5"  id='result '>Address: <strong> {val.address} </strong></p> 
      
</div>))}
</div>

<Footer></Footer>
</>
}

export default UserInfo