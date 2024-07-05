import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, Outlet } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Re from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navidator from './Navidator';


const UserDashbord = () => {


  const [cars, setCars] = useState([]);
  const [numbercar, setnumber] = useState([]);

  useEffect(() => {
    fetchCars();
  });

  const fetchCars = async () => {
    try {
      let userdata = sessionStorage.getItem('user'); 
      const response = await fetch(`http://localhost:8888/car?user=${userdata}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      setCars(data);
      setnumber(data.length)
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  // useEffect(() => {
  //   fetchCars();
  // }, []);
  
  
  const StyledBadge = styled(Badge)(({ theme }) => ({ 

    '& .MuiBadge-badge': {
      right: -3,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  
const nav = useNavigate();
   const logout = ()=>{
    if(window.confirm("are you want to login?")){
      sessionStorage.removeItem('user');
      nav('/');
    }
  
   };
   


  let userinfos = sessionStorage.getItem('user')
  const [itemData,setItemData] = useState([]);

  useEffect(()=>{
    featchuser() 
},[])

    const featchuser= () =>{
      axios.get(`http://localhost:8888/users?useremail=${userinfos}`).then((referance)=>{
          // setItemData(referance.data)
          setItemData(referance.data)
          console.log(referance.data)
      }).catch((error)=>{})
  }
    {
      return <div class="container-fluid mt-5">

<Navidator></Navidator>
        <br/>
        <h1 style={{display:"inline"}}>Welcome you : &nbsp;</h1>
        {
        itemData.map((val, index) => (
          <b><h1 style={{display:"inline"}} className='mt-2'>{val.username}  </h1> </b>))
      }
      
      <Link to="Selected"><IconButton aria-label="cart" style={{position:"absolute", top:"75px", right:"220px"}}>
        
      <StyledBadge badgeContent={numbercar} color="secondary">
      
        <ShoppingCartIcon />
        
      </StyledBadge>
    </IconButton>
    </Link>

      <div style={{position:"absolute",top:"50px",right:"30px"}}>
        
      <Button variant='contained' onClick={()=>logout()} className='mt-4' style={{background:"yellow",color:"black"}} >Logout</Button>
      </div>
      <nav class="navbars  mt-5">
        <div>
         <Link to=""><button className='btn ' id='button-73'> <a class="navbar-brand text-dark " href="#">Luxurious Car</a></button></Link> 
         <Link to="Sports"> <button className='btn btn-warning' id='button-73'> <a class="navbar-brand text-dark" href="#">Sports Car</a></button></Link>
         <Link to="delux">  <button className='btn btn-warning ' id='button-73'> <a class="navbar-brand text-dark" href="#">Vintage Car</a></button></Link>
         <Link to="superlux"> <button className='btn btn-warning  ' id='button-73' > <a class="navbar-brand text-dark" href="#">superlux car</a></button></Link>
         {/* <Link to="Selected"> <button className='btn btn-warning ' id='button-73'> <a class="navbar-brand text-dark" href="#">Selected Cars</a></button> </Link> */}
         <Link to="userinfo"> <button className='btn btn-warning ' id='button-73'> <a class="navbar-brand text-dark" href="#">User Info</a></button> </Link>
        </div>
      </nav>
      <div><Outlet></Outlet></div>
    </div>
    }

}
export default UserDashbord