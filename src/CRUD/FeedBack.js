import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FeedBack = () => {

    
  const [itemData, setItemData] = useState([]);


  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = () => {
    axios.get(`http://localhost:8888/contact`).then((res) => {
      console.log(res.data);
      setItemData(res.data)
    }).catch((error) => { })
  }


  const deleteContact = (id) => {

    if (window.confirm(`Do you want to delete the Feedback:${id}`)) {
      axios.delete(`http://localhost:8888/contact/${id}`).then(() => {
        window.alert("FeedBack Deleted Successfully!!");
        fetchData();
      }).catch((error) => { })
    }
  }
    return (
        <div className='container-fluid mt-4 mb-4 '>




       
  
  
        <table className='table table-hover table-striped '>
          <thead>
            <tr className='table-warning'>
              <th id='head'>ID</th>
              <th id='head'>NAME</th>
              <th id='head'>EMAIL</th>
              <th id='head'>CONTACT</th>
            
              <th id='head'>FEEDBACK</th>
            
              <th id='head'>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData && itemData.map((val, index) => {
                return <tr>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.Email}</td>
                  <td>{val.Mobile_Number}</td>
                  <td>{val.Message}</td>
                
                  
                 
     
  
                  <td>
                   
  
  
  
  
                    &nbsp; | &nbsp;
  
                    <button type='button' onClick={() => deleteContact(val.id)} className='btn btn-danger '>
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

export default FeedBack
