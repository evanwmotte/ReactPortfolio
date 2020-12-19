import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "500px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ContactCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent align={"center"}>
        <Typography variant="h3" color="textPrimary" gutterBottom>
          Evan Motte
        </Typography>
        <Typography variant="h5" component="h2">
          E-mail Address:
        </Typography>
        <Typography variant="h5" color="textSecondary">
          evanwilliammotte@gmail.com
        </Typography>
        <br />
        <Typography variant="h5" component="p">
          Message me on LinkedIn: 
        </Typography>
        <Typography variant="h5" color="textSecondary">
          <a href={"https://www.linkedin.com/in/evan-motte-3a681b101/"} target={"_blank"} rel="noreferrer">My LinkedIn</a>
        </Typography>
        <br />
        <Typography variant="h5" component="p">
          Connect with me on GitHub: 
        </Typography>
        <Typography variant="h5" color="textSecondary">
          <a href={"https://github.com/evanwmotte"} target={"_blank"} rel="noreferrer">My GitHub</a>
        </Typography>
      </CardContent>
    </Card>
  );
}