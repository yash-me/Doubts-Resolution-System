import React from 'react';
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {addAcceptedDoubts} from '../../actions/posts'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'20px',
    
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    
    
  },
  image: {
    width: 128,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function StandardCard({post, currentAcceptDoubtId, setCurrentAcceptDoubtId, taId}) {
  const classes = useStyles();
  const dispatch = useDispatch();


  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  Title: {post.title}
                </Typography> 
              </Grid>
            </Grid>
            <Grid item>
              <Link to="/TA/SolveDoubt" style={{ textDecoration: 'none', color: "inherit" }}>
                <Button
                          variant="outlined"
                          color="primary"
                          className={classes.button}
                          onClick={()=> {
                            dispatch(addAcceptedDoubts(taId));
                            setCurrentAcceptDoubtId(post._id);
                                  
                          }}
                          
                  >
                          Accept
                </Button> 
              </Link>       
            </Grid>
            
          </Grid>
          
        </Grid>
      </Paper>
    </div>
  );
}
