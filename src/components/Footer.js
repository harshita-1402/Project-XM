import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Hidden, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { white } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FXM from "../images/FXM.png";
import Vector2 from "../images/Vector2.png";
import Vector3 from "../images/Vector3.png";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#00142D",
        // paddingY: 2,
        overflow: "hidden",
      }}
    >
      <Container marginInline={2} sx={{ color: "white", padding: "2%" }}>
        <Grid container spacing={2} sx={{ marginInline: "0px" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">
              <img src={FXM}></img>
            </Typography>
            <Typography variant="body2" sx={{marginTop:"20px"}}>
              Our technical intelligence can put you on the fast track to
              success. That’s the promise from XM Technologies.
            </Typography>
            <Typography variant="body2">Follow us on Social media!</Typography>
            <Typography variant="body2" sx={{marginTop:"20px"}}>
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Navigation</Typography>
            <Typography variant="body2" sx={{marginTop:"20px"}}>Home</Typography>
            <Typography variant="body2"sx={{marginTop:"10px"}}>About Us</Typography>
            <Typography variant="body2"sx={{marginTop:"10px"}}>Services</Typography>
            <Typography variant="body2"sx={{marginTop:"10px"}}>Portfolio</Typography>
            <Typography variant="body2"sx={{marginTop:"10px"}}>jobs</Typography>
            <Typography variant="body2"sx={{marginTop:"10px"}}>Contact Us</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Services</Typography>
            <Typography variant="body2" sx={{marginTop:"20px"}}>Web Devlopment</Typography>
            <Typography variant="body2" sx={{marginTop:"10px"}}>Digital Marketing</Typography>
            <Typography variant="body2" sx={{marginTop:"10px"}}>Application Devlopment</Typography>
            <Typography variant="body2" sx={{marginTop:"10px"}}>E-Commerce Solution</Typography>
            <Typography variant="body2" sx={{marginTop:"10px"}}>Backup & Security</Typography>
            <Typography variant="body2" sx={{marginTop:"10px"}}>
              Enterprise Software Services
            </Typography>
            <Typography variant="body2">IT Support</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Get in touch</Typography>
            <Typography variant="body2" sx={{marginTop:"20px"}}>
              <LocationOnIcon /> 207, Dhara trade center, Mahadev Chowk, Mota
              varachha, Surat, Gujarat 394101
            </Typography>
            <Typography variant="body2" sx={{marginTop:"20px"}}>
              <LocalPhoneIcon /> (281) 624-6768
            </Typography>
            <Typography variant="body2" sx={{marginTop:"20px"}}>
              <EmailIcon /> info@xmtechnologoies.com
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid>
        <Box
          component="img"
          src={Vector3}
          sx={{
            width: "100vw",
            height: "40vh",
            mt: -15,
            right: 0,
            bottom: 0,
          }}
        />
        <Box
          component="img"
          src={Vector2}
          sx={{ width: "100vw", height: "20vh", mt: -30 }}
        />
      </Grid>
    </Box>
  );
}