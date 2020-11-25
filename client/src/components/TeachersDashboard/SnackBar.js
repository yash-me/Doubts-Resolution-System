import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1200,
    marginTop:30,
    marginBottom:30,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LongTextSnackbar() {
  const classes = useStyles();

  const taS = useSelector((state)=> state.ta);

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5">TA's Report</Typography>

      { taS.map(ta => (
            <SnackbarContent message={`${ta.name} | Doubts Accepted: ${ta.doubtsAccepted} | 
            Doubts Resolved: ${ta.doubtsResolved} | Doubts Escalated: ${ta.doubtsEscalated}`
          } />
      ) )}

      
      
      
    </div>
  );
}
