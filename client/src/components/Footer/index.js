import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AddCommentIcon from '@material-ui/icons/AddComment';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '100px'
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <Link to={""}>
      <BottomNavigationAction label="About Me" icon={<InfoIcon />} />
      </Link>
      <Link to={"/projects"}>
      <BottomNavigationAction label="Projects" icon={<AccountTreeIcon />} />
      </Link>
      <Link to={"/aboutme"}>
      <BottomNavigationAction label="Contact Me" icon={<AddCommentIcon />} />
      </Link>
    </BottomNavigation>
  );
}