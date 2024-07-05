import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import adminmodulecss from '../components/Dashboard/adminmodulecss.module.css'

const AdminDashboardComp = () => {

  const nav = useNavigate()
  const logout = () => {
    sessionStorage.removeItem('admin');
    nav('/');
  };

  const [itemData, setItemData] = useState([]);


  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = () => {
    axios.get(`http://localhost:8888/car`).then((res) => {
      console.log(res.data);
      setItemData(res.data)
    }).catch((error) => { })
  }


  const deleteCar = (carid) => {

    if (window.confirm(`Do you want to delete the CAR:${carid}`)) {
      axios.delete(`http://localhost:8888/car/${carid}`).then(() => {
        window.alert("Record Deleted Successfully!!");
        fetchData();
      }).catch((error) => { })
    }
  }

  return (
    <div className='container-fluid mt-4 mb-4 '>




      <Link to="/addCar" className='btn btn mb-2 button-33' >
        Add</Link>
     

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

            <th id='head'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            itemData && itemData.map((val, index) => {
              return <tr>
                <td>{index + 1}</td>
                <td>{val.carname}</td>
                <td>{val.price}</td>
                <td>{val.drivingtype}</td>
                <td>{val.carrank}</td>
                <td>{val.carmodel}</td>
                <td><img src={val.carimage} alt="Loading" /></td>
                <td>{val.type}</td>
   

                <td>
                  <Link to={`/updateCar/${val.id}`} >
                    <button type='button' className='btn btn-warning '  >
                      EDIT
                    </button>

                  </Link>




                  &nbsp; | &nbsp;

                  <button type='button' onClick={() => deleteCar(val.id)} className='btn btn-danger '>
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

export default AdminDashboardComp
