// import { Dashboard } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import UserDashbord from "../../components/Dashboard/UserDashbord";
import Luxurious from "../../components/Dashboard/Luxurious";
import Sports from "../../components/Dashboard/Sports";
import Delux from "../../components/Dashboard/Delux";
import Superluxurious from "../../components/Dashboard/Superluxurious";
import Selected from "../../components/Dashboard/Selected";
import Userinfo from "../../components/Dashboard/UserInfo"; 
import CardList from "../../components/Dashboard/tsting";
// import Dashboard from "../components/Dashboard";
// import LoginComp from "../components/LoginComp";
// import Signup from "../components/Signup";
// import ForgotPassComp from "../components/ForgotPassComp";
// import Dashboard from "../../components/Dashboard";
import Dashboards from "../../components/Dashboard";
import LoginComp from "../../components/LoginComp";
import Signup from "../../components/Signup";
import ForgotPassComp from "../../components/ForgotPassComp";
import AddCarComp from "../../CRUD/AddCarComp";
import UpdateCarComp from "../../CRUD/UpdateCarComp";
import AdminDashboardComp from "../../CRUD/AdminDashboardComp";
import PageNotFound from "../../components/PageNotFound";
import LandingPage from "../../components/LandingPage/LandingPage";
import AdminComp from "../../components/AdminComp";
import ProtectedRouting from "./protectedRouting";
import AdminDash from "../../CRUD/AdminDash";
import UserDetails from "../../CRUD/UserDetails";
import BookedCar from "../../CRUD/BookedCar";
import FeedBack from "../../CRUD/FeedBack";
import DeluxBooked from "../../CRUD/DeluxBooked";
import Template from "../../CRUD/Template";
import SuperLuxuriousBooked from "../../CRUD/SuperLuxuriousBooked";
import SportsBooked from "../../CRUD/SportsBooked";

const router = createBrowserRouter([

  {path:"AdminDash" , element:<ProtectedRouting Component={AdminDash}></ProtectedRouting>,children:[
 
    {path:"",element:<AdminDashboardComp></AdminDashboardComp>},
    {path:"addCar",element:<AddCarComp></AddCarComp>},
    {path:"userDetails",element:<UserDetails></UserDetails>},
    {path:"updateCar/:id",element:<UpdateCarComp></UpdateCarComp>},
    // {path:"bookedcar",element:<Temp></Temp>},
     {path:"bookedcar",element:<Template></Template>,children:[

      {path:"suplux",element:<BookedCar></BookedCar>},
      {path:"luxurious",element:<SuperLuxuriousBooked></SuperLuxuriousBooked>},
      {path:"",element:<SuperLuxuriousBooked></SuperLuxuriousBooked>},
      {path:"delux",element:<DeluxBooked></DeluxBooked>},
      {path:"sports",element:<SportsBooked></SportsBooked>},
     
     ]},
    {path:"feedback",element:<FeedBack></FeedBack>},

  ]},
   

 {path:"addCar",element:<AddCarComp></AddCarComp>},

    {path:"updateCar/:id",element:<UpdateCarComp></UpdateCarComp>},



  {path:"",element:<LandingPage/>},
  {path:"login",element:<LoginComp/>},
    {path:"signup",element:<Signup/>},
    {path:"adminLogin",element:<AdminComp></AdminComp>},  
    {path:"forgot",element:<ForgotPassComp/> },
  {path:"MainDashbord",element:<ProtectedRouting Component={UserDashbord}></ProtectedRouting>,children: [
    {path:"userinfo",element:<Userinfo></Userinfo>},
    {path:"",element:<Luxurious></Luxurious>},
    {path:"Sports",element:<Sports></Sports>},
    {path:"delux",element:<Delux></Delux>},
    {path:"superlux",element:<Superluxurious></Superluxurious>},
    {path:"selected",element:<Selected/>},
    {path:"user_info",element:<Userinfo/>}, 
    {path:"testing",element:<CardList></CardList>},
    
]},







  
  {path:"*",element:<PageNotFound></PageNotFound>}
]);

export default router;