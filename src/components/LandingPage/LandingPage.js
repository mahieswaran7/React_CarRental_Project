import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button, Card, CardMedia, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import logo from './images/logo.jpg';
import car1 from './images/car1.jpg';
import car2 from './images/car2.jpg';
import car3 from './images/car3.jpg';
import car4 from './images/car4.jpg';
import car5 from './images/car5.jpg';
import car6 from './images/car6.jpg';
import car7 from './images/car7.jpg';
import car8 from './images/car8.jpg';
import car9 from './images/car9.jpg';
import car10 from './images/car10.jpg';
import car11 from './images/car11.jpg';
import car12 from './images/car12.jpg';


import video1 from './images/video1.mp4';
import video2 from './images/video2.mp4';
import final from './images/final1.mp4';

const carImages = [
  car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12
];


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div id="home" className="home-section container-fluid img-fluid max-width: 100% height: auto">
      <Carousel autoPlay={true} interval={3000} navButtonsAlwaysInvisible={true}>
        {carImages.map((src, index) => (
          <img key={index} src={src} alt={`Car ${index + 1}`} className="carousel-img" />
        ))}
      </Carousel>
    </div>
  );
};

const Carvideo = () => (

  <div class="lightbox" data-mdb-lightbox-init container>

  <div class="row"  >

    <div class="col-lg-6" style={{borderRadius:"30px"}}>

    <video autoPlay loop muted class="w-100 mb-2 mb-md-4 shadow-1-strong rounded">
     <source src={video1} type="video/mp4" />
    </video>

    <video autoPlay loop muted class="w-100 mb-2 mb-md-4 shadow-1-strong rounded">
     <source src={video2} type="video/mp4" />
</video>

    <video autoPlay loop muted class="w-100 mb-2 mb-md-4 shadow-1-strong rounded">
     <source src={video1} type="video/mp4" />
</video>

      </div>

    <div class="col-lg-6">
      
    <video autoPlay loop muted class="w-100 shadow-1-strong rounded">
     <source src={final} type="video/mp4" />
</video>

      
    </div>
 </div>
</div>
);
const About = () => (
  <div id="about" className="about-section">
    <h2>About Our Company</h2>
    <p>We are dedicated to providing top-notch car rental services to ensure your journey is smooth and memorable. Our commitment to security, quality, customer support, and affordability sets us apart in the industry. With a diverse fleet of vehicles, we cater to all your transportation needs, whether for business or leisure.</p>
    <p>Our company was founded with the vision of revolutionizing the car rental industry. We understand the importance of reliable transportation, whether you're traveling for work, vacation, or any other purpose. That's why we offer a wide variety of vehicles, from compact cars for city driving to spacious SUVs for family trips. Our team is passionate about cars and customer service, ensuring you have a seamless experience from the moment you book a vehicle to the moment you return it.</p>
    <p>We take pride in our fleet, which is regularly maintained and updated to provide the best driving experience. Our vehicles are equipped with modern amenities and safety features, so you can drive with confidence and peace of mind. Additionally, our user-friendly booking system makes it easy to reserve a car online, saving you time and effort. Join the countless satisfied customers who have made us their go-to choice for car rentals.</p>
    <div className="features">
      <div className="feature-item">
        <i className="fas fa-shield-alt"></i>
        <p>Security</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-check-circle"></i>
        <p>Quality</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-headset"></i>
        <p>Customer Support</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-dollar-sign"></i>
        <p>Affordability</p>
      </div>
    </div>
  </div>
);

const Cars = () => (
  <div id="cars" className="cars-section">
    <h2>Our Cars</h2>
    <div className="car-list">
      {carImages.map((src, index) => (
        <Card key={index} className="car-item">
          <CardMedia component="img" image={src} alt={`Car ${index + 1}`} />
          <CardContent>
            <p>Car {index + 1}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [itemData, setItemData] = useState({
    name: "",
    Mobile_Number: "",
    Email: "",
    Message: ""
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    mobileError: "",
    emailError: "",
    messageError: ""
  });

  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setItemData({ ...itemData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      nameError: "",
      mobileError: "",
      emailError: "",
      messageError: ""
    };

    // Name validation
    const namePattern = /^[a-zA-Z]+$/;
    if (!itemData.name.trim() || !namePattern.test(itemData.name)) {
      errors.nameError = "Name is required and must contain only letters";
      isValid = false;
    }

    // Mobile number validation
    const mobilePattern = /^\d{10}$/;
    if (!itemData.Mobile_Number.match(mobilePattern)) {
      errors.mobileError = "Invalid mobile number (must be 10 digits)";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!itemData.Email.match(emailPattern)) {
      errors.emailError = "Invalid email address";
      isValid = false;
    }

    // Message validation
    const messageWords = itemData.Message.trim(); 
    //  .split(/\s+/).length
    if (messageWords < 25) {
      errors.messageError = "Please give any message to us";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const addRecord = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios.post(`http://localhost:8888/contact`, itemData)
        .then(() => {
          window.alert("Feedback Added Successfully");
          // Optional: Reset form after successful submission
          setItemData({
            name: "",
            Mobile_Number: "",
            Email: "",
            Message: ""
          });
        })

        const inputChangeHandler = (events)=>{
            const {type,name,value} = events.target;
            setItemData({...itemData,[name]:value});
          }
          
          const addRecord = (event)=>{
            event.preventDefault();
            axios.post(`http://localhost:8888/contact`,itemData).then(()=>{
                window.alert("Feedback Added Successsfully");
            }).catch((error)=>{})
          }
        
    }
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.95373531531646!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e8d7f8b69bdb!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1601918789243!5m2!1sen!2sau"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ borderRadius: "30px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="enquiry-form">
          <h2>Contact Us</h2>
          <form onSubmit={addRecord}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                onChange={inputChangeHandler}
                value={itemData.name}
                className={`form-control ${formErrors.nameError && "is-invalid"}`}
              />
              {formErrors.nameError && <span className="error">{formErrors.nameError}</span>}
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Enter your Mobile.No"
                name="Mobile_Number"
                onChange={inputChangeHandler}
                value={itemData.Mobile_Number}
                className={`form-control ${formErrors.mobileError && "is-invalid"}`}
              />
              {formErrors.mobileError && <span className="error">{formErrors.mobileError}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your Mail"
                name="Email"
                onChange={inputChangeHandler}
                value={itemData.Email}
                className={`form-control ${formErrors.emailError && "is-invalid"}`}
              />
              {formErrors.emailError && <span className="error">{formErrors.emailError}</span>}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className={`form-control ${formErrors.messageError && "is-invalid"}`}
                name="Message"
                onChange={inputChangeHandler}
                value={itemData.Message}
                placeholder="Your Experience with us"
              ></textarea>
              {formErrors.messageError && <span className="error">{formErrors.messageError}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
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

  const list = () => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component="a" href="#home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="#about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="#cars">
          <ListItemText primary="Cars" />
        </ListItem>
        <ListItem button component="a" href="#contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  const nav = useNavigate();

  const reloadss = () => {
    nav('login');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
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

        <Button className="rent-car" onClick={() => reloadss()} color="warning" variant="contained">
          <i className="fas fa-car"></i> Rent a Car
        </Button>
      </header>
      <div className="navbar-container">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#cars">Cars</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <main className="content">
        <Home />
        
        <About />
        <Carvideo />

        <Cars />
        <Contact />
      </main>
      <footer className="footer">
        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;