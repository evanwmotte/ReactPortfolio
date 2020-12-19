import React from "react";
import { Container } from "../components/Grid"
import HideAppBar from "../components/AppBar"
import Typography from '@material-ui/core/Typography';
import ProfilePic from "../images/profilepic.jpg";
import Footer from "../components/Footer"

function Home() {

    return <div style={{backgroundColor: 'lightGray'}}>
        <Container>
        <HideAppBar />
    </Container>
    <Container >
        <img src={ProfilePic} alt={"Profile Pic"} className={"rounded mx-auto d-block"} style={{width: "500px", height: "500px", marginTop: "150px"}}/>
        <Typography align={'center'} variant={"h3"} style={{marginTop: "100px"}}>About Me</Typography>
        <Typography style={{marginTop: "30px", marginBottom: "100px"}}>
            I'm a full stack web developer who graduated from the UNCC Full Stack Development Bootcamp.
            My experience prior to development was mainly in networking and security. When I started experimenting
            with coding I instantly fell in love with it and knew that I wanted to make a career out of it.
            My primary language is JavaScript including ES6. I am well versed with NodeJS as well as ReactJS and
            have experience with several different technology stacks for both front-end and back-end development.
            My preference is to work on back-end pieces of applications including setting up servers, routing and 
            handling REST APIs. Coding is my passion and I'm very excited to start my career in software development.
        </Typography>
    </Container>
    <Footer />
    </div>

}

export default Home