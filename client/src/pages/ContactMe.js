import React from "react";
import { Container } from "../components/Grid";
import HideAppBar from "../components/AppBar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import Typography from '@material-ui/core/Typography';

function ContactMe() {

    return <div style={{ backgroundColor: 'lightGray' }}>
        <Container>
            <HideAppBar />
        </Container>
        <Container>
            <Typography align={'center'} variant={"h3"} style={{marginTop: "200px", marginBottom: "50px"}}>Contact Information</Typography>
            <ContactCard />
        </Container>
        <Footer />
    </div>
}

export default ContactMe