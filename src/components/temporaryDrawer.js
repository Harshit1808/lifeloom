// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function TemporaryDrawer() {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250, background:"#0EC3EB", margin:"100px" }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {['Blogs', 'Destination Guides', 'Testimonials', 'Reviews', 'How it works', 'FAQs', 'Logout'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton style={{background:"white", margin:"10px", height:"25px", textAlign:"center", borderRadius:"5px"}}>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        background: "#0EC3EB",
        position: "fixed",
        top: 64,
        left: open ? 0 : -250, // Adjust the left position based on open/close state
        height: "100%",
        transition: "left 0.3s ease-in-out", // Add transition for smooth animation
        zIndex: 10000,
      }}
      onClick={toggleDrawer(false)}
    >
      <List>
        {['Blogs', 'Destination Guides', 'Testimonials', 'Reviews', 'How it works', 'FAQs', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{ background: "white", margin: "10px", height: "25px", textAlign: "center", borderRadius: "5px", color:"black" }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div style={{background:"white", height:"400px", color:"black", textAlign:"center"}}>
        <div style={{paddingTop:"30px"}}>
        Lifeloom Pvt. Ltd.
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(!open)}><MenuIcon style={{color:'#0EC3EB', fontSize:"36px"}} /></Button>
      {open && DrawerList} {/* Render the DrawerList only if open is true */}
    </div>
  );
}

