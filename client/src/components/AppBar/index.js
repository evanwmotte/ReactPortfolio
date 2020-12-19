import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Menu from "../Menu";
import "./styles.css";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar id={'navbar'}>
          <Toolbar>
              <Container align="left">
            <Typography variant="h2">Evan Motte</Typography>
            
            <a id="link" href={'https://www.linkedin.com/in/evan-motte-3a681b101/'} target={'_blank'} rel="noreferrer"><i style={{backgroundColor: "black", color: "purple"}}className="fa fa-linkedin"></i>   My LinkedIn</a>
            <br />
            <a id="link" href={'https://github.com/evanwmotte'} target={'_blank'} rel="noreferrer"><i class="fa fa-github"></i>   My GitHub</a>
            <br />
            <a id="link" href={"https://drive.google.com/file/d/1VqOYpp5X3g_Mz4V05gvhdgpMz5Ni479r/view?usp=sharing"} target={'_blank'} rel="noreferrer"><i class="fa fa-file"></i>   My Resume</a>
            </Container>
            <Container align="right">
            <Menu id="menu"/>
            </Container>
            
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}