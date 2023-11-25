import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
 import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import XM from '../images/XM.png';
import { Link } from '@mui/material';



const drawerWidth = 240;
const navItems = [
  "services",
  "About us",
  "Portfolio",
  "Jobs",
  <Button variant='contained'>Contact Us</Button>,
];
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
       <Typography variant="h6" sx={{ my:2,}}>
       <img src={XM} alt="" height={"50"} width="80" ></img>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} sx={{color:"black"}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ paddingRight:"12rem",background:"#FFF"}}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <img src={XM} alt="XM" height={"50"} width="80" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// //import Contactus from "../images/contact us.png";
// import XM from "../images/XM.png";
// import { Drawer } from '@mui/material';
// import List from '@mui/material/List';
// //import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// //import IconButton from '@mui/material/IconButton';
// //import MenuIcon from '@mui/icons-material/Menu';
// //import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// //import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';




// const drawerWidth = 240;
// export default function ButtonAppBar() {
//   const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
// const toggleDrawer = () => {
//             setIsDrawerOpen(!isDrawerOpen);
//           };


//   return (
//     <Box>
//       <AppBar position="static" sx={{background:'#FFF',color:'#000000',width:'100%'}}>
//         <Toolbar>
//         <img src={XM} alt="" style = {{width:"76.5px",height :"45px",marginLeft:'12%'}}/> 
//         <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={toggleDrawer}
//             edge="start"
//             //  sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//            <Button color="inherit" >Services</Button>
//            <Button color="inherit">About Us</Button>
//            <Button color="inherit">Portfolio</Button>
//            <Button color="inherit">Jobs</Button> 
//            <Button variant="contained" sx={{ borderRadius: "30px" }}>
//        Contact Us</Button>
          
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
//          <Box sx={{ width: 150 }} role="presentation">
//            <List>
//              <ListItem button>
//                <ListItemText primary="Services" />
//              </ListItem>
//              <ListItem button>
//                <ListItemText primary="About Us" />
//              </ListItem>
//              <ListItem button>
//                <ListItemText primary="Services" />
//              </ListItem>
//              <ListItem button>
//               <ListItemText primary="Portfolio" />
//               </ListItem>
//               <ListItem button>
//               <ListItemText primary="Jobs" />
//               </ListItem>
//               <ListItem button>
//               <ListItemText content="Contact Us" />
//               </ListItem>
//               </List>
//               </Box>
//       </Drawer>
      
//     </Box>
//   );
// }









