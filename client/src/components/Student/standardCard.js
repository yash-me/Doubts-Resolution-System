import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { Divider } from '@material-ui/core';
import LongTextSnackbar from './Snackbar';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {addComment } from '../../actions/posts'


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

export default function StandardCard({post, currentId, setCurrentId}) {
  const classes = useStyles();

  const [currentComment, setComment] = useState("");
  



  const dispatch = useDispatch();

  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  Title: {post.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Description: {post.description}
                </Typography>

                {post.answer !== "" ? (<Typography variant="body2" gutterBottom>
                  Answer: {post.answer} <br/>
                  <div style={{color:'#757575'}}>
                    Answered By: {post.taName} ({moment(post.ansTime).fromNow()})
                  </div>
                </Typography>):(<Typography variant="body2" gutterBottom>
                  
                </Typography>)}
                


                <Typography  style={{float:'right'}} variant="body2" color="textSecondary">
                  Asked by: {post.name} ({moment(post.postTime).fromNow()})
                </Typography>
              </Grid>
              <Divider/>
              <Typography variant="body2" color="textSecondary">
                  {post.comments.length} Comment
                </Typography>



              <Grid item>
                
              

              {
                (post.comments.map(comment => (
                  
                  <LongTextSnackbar msg={comment.text} />
                ))) 
                

              }


            
              </Grid>  

              {/* <form autoComplete="off" noValidate > */}
                  <Grid item>
                  
                  <TextField
                    autoFocus
                    margin="dense"
                    id="mainInput"
                    label="Add Comment"
                    type="text"
                    fullWidth
                    value={currentComment}
                    onChange={(e)=>setComment(e.target.value)}
                  />
                        <Button
                            
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon/>}
                            onClick={()=>{ 
                              dispatch(addComment(post._id, {comment:currentComment}));
                              setComment("");
                            
                            }}
                            type="submit"
                            
                        >
                            Comment
                        </Button>
                    
                  </Grid>
              {/* </form> */}


            </Grid>
            <Grid item>


                    {post.answer !== "" ? (<Button
                                              variant="outlined"
                                              color="primary"
                                              className={classes.button}
                                              
                                      >
                                              Resolved
                                      </Button>)
                     : (<Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            
                        >
                                Pending...
                        </Button>) }

                    
            </Grid>
            
          </Grid>
          
        </Grid>
      </Paper>
    </div>
  );
}
