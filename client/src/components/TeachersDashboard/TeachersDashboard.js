import React, {useEffect} from "react";
import classes1 from './TeachersDashboard.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LongTextSnackbar from './SnackBar'
import {useDispatch, useSelector} from 'react-redux';
import {getTaData} from '../../actions/posts'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: '70px',
    paddingRight: '70px',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(28),
      height: theme.spacing(28),
    },
  },
}));

const TeachersDashboard = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const taS = useSelector((state)=> state.ta);

    var doubtsAsked = taS.reduce(function(tot, arr) { 
        // return the sum with previous value
        return tot + arr.doubtsAccepted;
    
    },0);

    var doubtsResolved = taS.reduce(function(tot, arr) { 
        // return the sum with previous value
        return tot + arr.doubtsResolved;
    
    },0);

    var doubtsEscalated = taS.reduce(function(tot, arr) { 
        // return the sum with previous value
        return tot + arr.doubtsEscalated;
    
    },0);
    
    console.log(doubtsAsked," ", doubtsResolved," ",doubtsEscalated);


    useEffect(() => {
        dispatch(getTaData());

    }, [dispatch]);
 
  return (
    <>

        <Typography gutterBottom variant="h4" style={{color:'white', marginLeft:'100px', marginBottom:'10px', marginTop:'40px'}}>
            Dashboard
        </Typography>
        
        <div className={classes.root}>
            
            <Paper elevation={3} >
                <div className={classes1.card2}>
                    <div className={classes1.card3}>
                        <div className={classes1.first}>{doubtsAsked}</div>
                        <div className={classes1.second}>Doubts Asked</div>
                    </div>
                </div>
            </Paper>
            <Paper elevation={3} >
                <div className={classes1.card2}>
                    <div className={classes1.card3}>
                        <div className={classes1.first}>{doubtsResolved}</div>
                        <div className={classes1.second}>Doubts Resolved</div>
                    </div>
                </div>
            </Paper>
            <Paper elevation={3} >
                <div className={classes1.card2}>
                    <div className={classes1.card3}>
                        <div className={classes1.first}>{doubtsEscalated}</div>
                        <div className={classes1.second}>Doubts Escalated</div>
                    </div>
                </div>
            </Paper>
            <Paper elevation={3} >
                <div className={classes1.card2}>
                    <div className={classes1.card3}>
                        <div className={classes1.first}>10</div>
                        <div className={classes1.second}>Avg. Doubt Resolution Time</div>
                    </div>
                </div>
            </Paper>
            
        </div>

        <div className={classes1.container}>
            <div className={classes1.content}>
                <div className={classes1.dashboard}>
                    
                    <LongTextSnackbar/>
                    
                </div>
            </div>
        </div>

    </>

  );
}

export default TeachersDashboard;



