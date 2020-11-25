import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendIcon from '@material-ui/icons/Send';
import { Divider } from '@material-ui/core';
import {Link} from "react-router-dom"
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import LongTextSnackbar from './Snackbar';
import {addAnswer, addEscalatedDoubts, addResolvedDoubts} from '../../actions/posts'


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

export default function StandardCard({currentAcceptDoubtId, TaName, TaEmail, setTaEmail
  , taId, setTaId}) {
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();

  const [currentAnswer, setAnswer] = useState("");

  const posts = useSelector((state)=> state.posts);

  const post = posts.filter(p => p._id === currentAcceptDoubtId);
  var date = new Date();

  // console.log(TaEmail);
  // console.log(TaName);
  // console.log(taId);

  

  return (
    <Container>

        <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<ExitToAppIcon />}
            style={{float:'right'}}
            onClick={()=> {
              setTaEmail("");
                    
            }}
        >
            Logout
        </Button>


        <Grid style={{marginTop:'70px',}}>

        {(TaEmail === "") ? history.push('/') : (

          <Typography gutterBottom variant="h4" style={{color:'white', marginLeft:'90px', marginBottom:'40px'}}>
          Solve Doubts 
          </Typography>
        )}



        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                        Title: {post[0].title}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                        Description: {post[0].description}
                        </Typography>

                        {post[0].answer !== "" ? (<Typography variant="body2" gutterBottom>
                          Answer: {post[0].answer} <br/>
                          Answered By: {post[0].taName} {moment(post[0].ansTime).fromNow()}
                        </Typography>):(<Typography variant="body2" gutterBottom>
                          
                        </Typography>)}


                        <Typography  style={{float:'right'}} variant="body2" color="textSecondary">
                        Asked by: {post[0].name} {moment(post[0].postTime).fromNow()}
                        </Typography>
                    </Grid>
                    <Divider/>
                    <Typography variant="body2" color="textSecondary">
                        {post[0].comments.length} Comment
                    </Typography>
                    <Grid item>
                
              

                    {
                        (post[0].comments.map(comment => (
                        
                        <LongTextSnackbar msg={comment.text} />
                        ))) 
                        

                    }


                    
                    </Grid> 

                    
                        <Grid item>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="mainInput"
                                label="Answer"
                                type="text"
                                fullWidth
                                value={currentAnswer}
                                onChange={(e)=>setAnswer(e.target.value)}
                                
                                
                            />
                            {post[0].answer === "" ? (<Button
                                
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon/>}
                                onClick={()=>{ 
                                    if(currentAnswer!=="")
                                    dispatch(addAnswer(currentAcceptDoubtId,
                                       {answer:currentAnswer,taName:TaName,ansTime:date}));
                                    dispatch(addResolvedDoubts(taId));

                                    setAnswer("");
                                  
                                  }}
                                type="submit"
                                
                            >
                                Answer
                            </Button>)
                            :
                            (<Button
                                
                                color="primary"
                                className={classes.button}
                                endIcon={<SendIcon/>}
                                disabled
                                type="submit"
                                
                            >
                                Answer
                            </Button>) }
                            
                        </Grid>
                    


                    </Grid>
                    <Grid item>

                            


                            {post[0].answer === "" ? (
                              <Link to="/TA" style={{ textDecoration: 'none', color: "inherit" }}>
                                <Button
                                          variant="outlined"
                                          color="primary"
                                          className={classes.button}
                                          onClick={()=> {
                                            dispatch(addEscalatedDoubts(taId));  
                                                  
                                          }}
                                          
                                  >
                                          Escalate
                                </Button>
                              </Link>):
                              (<Link to="/TA" style={{ textDecoration: 'none', color: "inherit" }}>
                              <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        
                                >
                                        Go back to doubts!
                              </Button>
                            </Link>)}





                              
                            

                            
                    </Grid>
                    
                </Grid>
                
                </Grid>
            </Paper>
        </div>
        </Grid>

    </Container>
    
  );
}
