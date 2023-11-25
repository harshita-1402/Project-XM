import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
    Box,
  Button,
  Container,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";


// Images Import

import Mockup from "../images/Mockup.png";
import Human from "../images/Human.png";
import Indeed from "../images/Indeed.png";
import Stanlee from "../images/Stanlee.png";
import Dmrc from "../images/Dmrc.png";
import Dani from "../images/Dani.png";
import Sallie from "../images/Sallie.png";
import code from "../images/code.png";
import cart from "../images/cart.png";
import content from "../images/content.png";
import Trim from "../images/Trim.png";
import Michael from "../images/Michael.png";
import Lucy from "../images/Lucy.png";
import Offer from "../images/Offer.png";
import Ellip18 from "../images/Ellipse18.png";
import Ellip19 from "../images/Ellipse19.png";
import Ellip20 from "../images/Ellipse20.png";
import circle from "../images/circle.png";
import Document from '../images/Document.png';

// Icon Import

import PhoneIcon from "@mui/icons-material/LocalPhone";
import AttachEmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Home = () => {
  return (
    <>
<Header />
      {/******************************************** Our Company ********************************/}

      <Box
        sx={{
          width: "100%",
          paddingY: 2,
          marginBlock: 10,
          overflow: "hidden",
          
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography>
                <img
                  src={Ellip18}
                  style={{ width: "80px", height: "80px" }}
                />
              </Typography>
              <Typography
                variant="h4"
                sx={{ marginTop: "-10%", marginInline: "20%" }}
              >
                <b>Web Design and<br/> Development Company</b>
              </Typography>
              <Typography sx={{ marginInline: "64%", marginTop: "5px" }}>
                <img src={Ellip20} style={{ width: "20px", height: "20px" }} />
              </Typography>
              <Typography
                paragraph
                sx={{ marginTop: "5px", marginInline: "20%" }}
              >
                We create clean and creative websites that are professional and
                help you generate more visitors and revenue.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "10px",
                  marginInline: "20%",
                  borderRadius: "20px",
                }}
              >
                Get Started
              </Button>
              <Typography sx={{ marginTop: "20px", marginInline: "40%" }}>
                <img src={Ellip19} style={{ width: "60px", height: "60px" }} />
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={Mockup} alt="Mockup" width="100%" height="auto" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/********************************* Our Client **************************************/}

      <Box
        sx={{
          width: "100%",
          paddingY: 2,
          marginBlock: 10,
        }}
      >
        <Box sx={{ marginInline: "20%" }}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <img src={Human} style={{ height: "61.5px" }} />
            </Grid>
            <Grid>
              <img src={Indeed} alt="" />
            </Grid>
            <Grid>
              <img src={Stanlee} alt="" />
            </Grid>
            <Grid>
              <img src={Dmrc} alt="" />
            </Grid>
            <Grid>
              <img src={Dani} alt="" />
            </Grid>
            <Grid>
              <img src={Sallie} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/*************************************** How its going *********************************/}

      <Box>
        <Container sx={{ marginBottom: "5rem", justifyContent:"center" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            <b>How it is going?</b>
            <img src={circle} />
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: " 1rem",
              marginInline: "25%",
            }}
          >
            We offer Professional web design services at affordable rates to
            help your business attract more visitors and keep them on your
            sites!!
          </Typography>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Info Gathering</b>
              </Typography>

              <Typography variant="body1">
                Need a good understanding of what are your business goals and
                dreams.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Planning</b>
              </Typography>

              <Typography variant="body1">
                We will help you to decide what technologies should be
                implemented.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Design</b>
              </Typography>

              <Typography variant="body1">
                It’s time to determine the look and feel of your site.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Development</b>
              </Typography>

              <Typography variant="body1" sx={{ marginInline: "25%" }}>
                Writing valid HTML / CSS code that complies to current web
                standards.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Testing and Launch</b>
              </Typography>
              <Typography variant="body1">
                Testing of the complete functionality of forms and scripts etc.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/********************************** Our Services ******************************/}

      <Box sx={{ overflow: "hidden" }}>
        <Container sx={{ marginBottom: "2rem", marginInline: "10%" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            <b>Our Services</b>
            <img src={circle} /> 
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "22%",
            }}
          >
            We offer Professional web design services at affordable rates to
            help your business<br/> attract more visitors and keep them on your
            sites!!
          </Typography>

          <Grid container spacing={3} sx={{ textAlign: "center", justifyContent:"center" }}>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={code}></img>
              <Typography variant="h6"><b>Web Development</b></Typography>

              <Typography variant="body1">
                Online impression takes time it's exactly what's you need . we
                build your dream website using Node, Angular, PHP, and Laravel.
              </Typography>

              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={cart}></img>
              <Typography variant="h6"><b> Digital Marketing</b></Typography>
              <Typography variant="body2">
                High-quality Word press theme and the team who is behind the
                project had helped me a lot 100% recommended.
              </Typography>
              <Button
                sx={{
                  color: "#FFF",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
                variant="contained"
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6"><b> Application Development</b></Typography>

              <Typography variant="body2">
                React Native, Flutter, Native Android, Native iOS. Our Team
                Thrives on methodological and Technical Challanges.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6"><b> E- Commerce Solution</b></Typography>

              <Typography variant="body2">
                Provide E-commerce websites and Applications for Companies to
                see online. e- commerce websites with online Payment solutions
                are our speciality.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6"><b> Backup & Security</b></Typography>

              <Typography variant="body2">
                SMBs succeed online with us. Security and Backup are included.
                our daily backups give you 100% security.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6"><b> Enterprise Software Services</b></Typography>

              <Typography variant="body2">
                Our goal is to launch enterprise or small business software
                worldwide. Our goal is to provide the best software service.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid
                item
                xs={12}
                sm={3}
                sx={{ border: "1px solid black", margin: "3rem" }}
              >
                <img src={Document}></img>
                <Typography variant="h6"><b> IT Support</b></Typography>

                <Typography variant="body2">
                  We maintain Websites for small, medium and large business your
                  existing website is regurally updated.
                </Typography>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    marginBlock: "2rem",
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/************************************Numbers ************************************/}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFF",
          paddingY: 2,
          marginBlock: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginInline: "20%", marginBottom: "2%" }}
        >
          <b>Intelligent Websites That Work Overtime<br/> For Marketing Results </b>
        </Typography>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#00142D",
            paddingY: 2,
          }}
        >
          <Container marginInline={2} sx={{ color: "white" }}>
            <Grid container spacing={2} sx={{ marginInline: "0px" }}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "36%" }}>
                  25+
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "35%" }}>
                  Years of Experience
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "36%" }}>
                  38+
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "35%" }}>
                  Expert Team Member
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "36%" }}>
                  3K+
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "35%" }}>
                  Project Complete
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "36%" }}>
                  99%
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "35%" }}>
                  Clients Satisfied
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/*********************************** What we offer *************************************/}

      <Box>
        <Container sx={{ marginBottom: "10rem" }}>
          <Typography
            paragraph
            sx={{ textAlign: "center", color: "blue" }}
            gutterBottom
          >
            <b>our services</b>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "25%",
            }}
          >
            <b>What We Offer</b>
          </Typography>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Box>
                <Typography variant="h6" sx={{textAlign:"right",marginTop:"10px"}}>
                  <b>Awesome Ideas</b>
                </Typography>

                <Typography paragraph>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{textAlign:"right",marginTop:"30px"}}>
                  <b>Web Solution</b>
                </Typography>
                <Typography variant="body1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box>
                <img src={Offer} width={250} height={250}></img>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Box>
                <Typography variant='h6'
             sx={{textAlign:"left",marginTop:"10px"}}>
                  <b>Planning Settings</b>
                </Typography>
                <Typography paragraph>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>

              <Box>
                <Typography variant='h6'
             sx={{textAlign:"left",marginTop:"30px"}}>
                  <b>Client Market</b>
                </Typography>
                <Typography variant="body1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/***************************** testimonial ********************************************/}

      <Box>
        <Container sx={{ marginBottom: "10rem",marginTop:"20px" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            <b>Testimonials</b>
            <img src={circle}></img>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "25%",
            }}
          >
            What our Customers are Saying
          </Typography>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}>
            
              <img src={Trim} style={{ borderRadius: "50px" }}></img>
              <Typography variant="h6">
                <b>Tim Brown</b>
              </Typography>
              <Typography paragraph>Aora Company</Typography>

              <Typography variant="body1" sx={{marginTop:"20px",textAlign:"center"}}>
              Can say about these guys only good<br/>
              words. After we build a website the<br/> 
              customer's flow is quite stable and <br/>
              our SEO results growing.
               <Typography sx={{marginTop:"20px",textAlign:"center"}}>
                <Rating name="half-rating" defaultValue={2.5} precision={5} />
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={Michael} style={{ borderRadius: "50px" }}></img>
              <Typography variant="h6">
                <b>Michael Vice</b>
              </Typography>
              <Typography>Bowl Room</Typography>

              <Typography variant="body1" sx={{marginTop:"20px",textAlign:"center"}}>
                High-quality Word press theme and <br/> the team who is behind the
                project<br/> had helped me a lot 100%<br/> recommended.
                <Typography sx={{marginTop:"20px",textAlign:"center"}}>
                <Rating name="half-rating" defaultValue={2.5} precision={5} />
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={Lucy} style={{ borderRadius: "50px" }}></img>
              <Typography variant="h6">
                <b>Lucy Raymond</b>
              </Typography>
              <Typography>Ive Logistic</Typography>

              <Typography variant="body2" sx={{marginTop:"20px",textAlign:"center"}}>
                High-quality Word press theme and the team who is behind the
                project had helped me a lot 100% recommended.
                <Typography sx={{marginTop:"40px",textAlign:"center"}}>
                <Rating name="half-rating" defaultValue={2.5} precision={5} />
                </Typography>
              </Typography>
              <Typography></Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/*********************** * Contact *************************/}


      <Box sx={{ background: "#0669F7", color: "#FFF", padding: "5%" }}>
        <Grid container spacing={3} sx={{ textAlign: "center" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h4"><b>Contacts</b></Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="body1">
                <PhoneIcon /> + 91 4737 4839 4845 <br />
                <AttachEmailIcon /> info@XMTechnoligies.com
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="body1">
                <LocationOnIcon /> 207, Dhara Trade Center, <br />
                Mahadev Chowk, <br />
                Mota Varachha, Surat <br />
                394101
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FacebookIcon sx={{ marginRight: "1rem" }} />
            <TwitterIcon  sx={{ marginRight: "1rem" }}/>
            <LinkedInIcon  sx={{ marginRight: "1rem" }}/>
            <InstagramIcon  sx={{ marginRight: "1rem" }}/>
            <AttachEmailIcon sx={{ marginRight: "1rem" }}/>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginBottom: "3rem" }}>
        <Box
          sx={{
            marginInline: "18%",
            textAlign: "center",
            marginTop: "-3%",
            background: "#FFF",
          }}
        >
          <Typography variant="h5">Still have questions ?
          <img src={circle} /> </Typography>
          <Typography sx={{ marginBottom: "2rem" }}>
            We're ready to answer your questions and jump start your project
          </Typography>

          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth label="Country" variant="outlined" />
                {/* <Country/> */}
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={8}
                />
              </Grid>

              <Button
                variant="contained"
                sx={{
                  borderRadius: "2px",
                  marginTop: "2rem",
                  marginInline: "42%",
                }}
              >
                Send Message{" "}
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Home;