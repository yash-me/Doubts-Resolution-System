import React from 'react';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMui from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    marginBottom:20,
    marginTop:20,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{position:'fixed',backgroundColor:'white', width:'100%',zIndex:'1'}}>
      <LinkMui color="inherit" href="/" onClick={handleClick} className={classes.link}>
        
            <HomeIcon className={classes.icon} />
            Home
       
      </LinkMui>
      
      
      <Typography color="textPrimary" className={classes.link}>
        <WhatshotIcon className={classes.icon} />
        6th Standard
      </Typography>
    </Breadcrumbs>
  );
}
