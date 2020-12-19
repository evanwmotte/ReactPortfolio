import React from "react";
import { Container } from "../components/Grid";
import HideAppBar from "../components/AppBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/Card";
import Typography from '@material-ui/core/Typography';
import GoogleBooks from "../images/googlebooks.PNG"
import ProjectOne from "../images/project-1.png"

function Projects() {

    return <div style={{ backgroundColor: 'lightGray' }}>
        <Container>
            <HideAppBar />
        </Container>
        <Container>
            <Typography align={'center'} variant={"h3"} style={{marginTop: "200px", marginBottom: "50px"}}>Projects</Typography>
            <ProjectCard 
            title={"GoogleBooks API"}
            image={GoogleBooks}
            description={"Allows users to search GoogleBooks for books they would like to read. This allows users to save interesting books to a database that they can reference later and links to access more information."}
            gitHubLink={"https://github.com/evanwmotte/googlebooks"}
            deployedLink={"https://arcane-caverns-57998.herokuapp.com/"}
            />
            <br />
            <ProjectCard 
            title={"Fitness Tracker"}
            image={ProjectOne}
            description={"An app designed to help track your caloric intake as well as other macros and display recipes that will help accomodate your fitness goals."}
            gitHubLink={"https://github.com/evanwmotte/fitnesstracker"}
            deployedLink={"https://evanwmotte.github.io/fitnesstracker/"}
            />
            <br />
            <ProjectCard 
            title={"Awaiting Project 3"}
            image={""}
            description={"Project 3 Description"}
            gitHubLink={""}
            deployedLink={""}
            />
        </Container>
        <Footer />
    </div>
}

export default Projects