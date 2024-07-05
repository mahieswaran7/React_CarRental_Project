import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button, Card, CardMedia, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// import logo from './images/logo.jpg';
// import car1 from './images/car1.jpg';
// import car2 from './images/car2.jpg';
// import car3 from './images/car3.jpg';
// import car4 from './images/car4.jpg';
// import car5 from './images/car5.jpg';
// import car6 from './images/car6.jpg';
// import car7 from './images/car7.jpg';
// import car8 from './images/car8.jpg';
// import car9 from './images/car9.jpg';
// import car10 from './images/car10.jpg';
// import car11 from './images/car11.jpg';
// import car12 from './images/car12.jpg';


const Navidator = () => {

        const [drawerOpen, setDrawerOpen] = useState(false);
        const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
      
        useEffect(() => {
          const handleResize = () => setIsMobile(window.innerWidth < 768);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        const toggleDrawer = (open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          setDrawerOpen(open);
        };
      
        // const list = () => (
        //   <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        //     <List>
        //       <ListItem button component="a" href="#home">
        //         <ListItemText primary="Home" />
        //       </ListItem>
        //       <ListItem button component="a" href="#about">
        //         <ListItemText primary="About" />
        //       </ListItem>
        //       <ListItem button component="a" href="#cars">
        //         <ListItemText primary="Cars" />
        //       </ListItem>
        //       <ListItem button component="a" href="#contact">
        //         <ListItemText primary="Contact" />
        //       </ListItem>
        //     </List>
        //   </div>
        // );


  return (
    <div className="landing-page">
      <header className="header" style={{position:"fixed"}}> 
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <div className="company-name text-warning display-1">Royal Car Rental</div>
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="menu-button"
          >
            <MenuIcon />
          </IconButton>
        )}
      </header>
      {/* <div className="navbar-container">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#cars">Cars</a>
          <a href="#contact">Contact</a>
        </nav>
      </div> */}
      {/* <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      {/* <main className="content">
        <Home />
        <About />
        <Cars />
        <Contact />
      </main> */} 
      
    </div>
  )
}

export default Navidator