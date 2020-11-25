import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LongTextSnackbar({msg}) {
  const classes = useStyles();

  //console.log(comments[0].text);

  return (
    <div className={classes.root}>   
              
      <SnackbarContent style={{ backgroundColor: '#e0e0e0', color: 'black' , marginBottom:'10px'}} message={msg} />
       
    </div>
  );
}
