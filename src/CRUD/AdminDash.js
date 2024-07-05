import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AdminDashboardComp from './AdminDashboardComp';
import { Outlet, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UserDashbord from '../components/Dashboard/UserDashbord';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Navidator from '../components/Dashboard/Navidator';



    const drawerWidth = 240;

    const openedMixin = (theme) => ({
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    });
    
    const closedMixin = (theme) => ({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
    });
    
    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }));
    
    const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }));
    
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
      }),
    );
    
    const AdminDash =()=> {
        const nav=useNavigate();
      const theme = useTheme();
      const [open, setOpen] = React.useState(false);
      const [carDashboard, setcarDashboard] = React.useState('');

      const handleChange = (event) => {
        setcarDashboard(event.target.value);
        console.log(carDashboard);
      };
    
      const redirect=()=>{
       if( window.confirm("are You sure !! Logout?")){
        sessionStorage.clear()
        nav('/')
       }
       
      }
      const handleDrawerOpen = () => {
        setOpen(true);
      };
   
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    return (
      <>
      
      
        <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            
            <MenuIcon />
            </IconButton>
            
          <Typography variant="h6" noWrap component="div">
           ADMIN DASHBORD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader> 
           <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
   

        <Link to="" className='hello'><MenuItem ><Button >Cars Details</Button></MenuItem></Link>
        <Divider />
<Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
<Link to="userDetails" className='hello'><MenuItem ><Button >users Details</Button></MenuItem></Link>
<Divider />
<Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
<Link to="bookedcar" className='hello'><MenuItem ><Button >Booked Cars   </Button></MenuItem></Link>
<Divider />
<Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
<Link to="feedback" className='hello '><MenuItem ><Button >Feed Backs    </Button></MenuItem></Link>
 <Divider />
 <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
<Link  className='hello'><MenuItem ><Button onClick={()=>redirect()}>Logout       </Button></MenuItem></Link>
     
        <Divider />
        
      
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography >
        <Outlet></Outlet>
        </Typography>
        <Typography>
        <footer className="footer">
        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
        </Typography>
      </Box>
    </Box>
    </>
    )
}

export default AdminDash;
