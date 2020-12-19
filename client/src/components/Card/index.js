import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            EM
          </Avatar>
        }
        title={props.title}
      />
      <Typography  style={{backgroundColor: "lightGray"}} variant="h6" align="center" color="textPrimary" component="p">
          {props.description}
        </Typography>
        <br />
      <CardMedia
        className={classes.media}
        image={props.image}
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton href={props.gitHubLink} target={"_blank"} aria-label="View on GitHub">
          <GitHubIcon />
        </IconButton>
        <IconButton href={props.deployedLink} target={"_blank"} aria-label="View Deployed Application">
          <DesktopMacIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}