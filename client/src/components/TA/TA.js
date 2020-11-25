import React, {useEffect} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import StandardCard from "./standardCard"
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts, getTaData, createTaData} from '../../actions/posts'


 

const useStyles = makeStyles((theme)=>({

    grid:{
        width:'100%',
        margin:'0px',
        marginTop:'70px',
        
        
    }

}));


const TA = ({currentAcceptDoubtId, setCurrentAcceptDoubtId,
     TaEmail, setTaEmail, TaName, taId, setTaId}) => {
    
    ;
    const posts = useSelector((state)=> state.posts);
    // const taS = useSelector((state)=> state.ta);
    
    const dispatch = useDispatch();
    const history = useHistory();  

    async function auth(email) {
        const { data } = await axios.patch(`http://localhost:5000/posts/${email}/checkEmail`);
        if(data === null){
            dispatch(createTaData({email:TaEmail, name:TaName}));
            
        }
        else{

            setTaId(data._id);
            
        }
    }
    auth(TaEmail);     
    
    useEffect(() => {
        dispatch(getPosts());
        dispatch(getTaData());

    }, [dispatch]);
    
    // render() {

        const classes = useStyles();
        return (
            <>
                {(TaEmail === "") ? history.push('/') : (

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
                       

                        <Grid container spacing={2} className={classes.grid} >

                            <Typography gutterBottom variant="h4" style={{color:'white', marginLeft:'90px', marginBottom:'40px'}}>
                                Solve Doubts 
                            </Typography>

                            

                                {
                                    posts.map(post=>(


                                        (post.answer === "") ?

                                        (<Grid item xs={12} md={12}> 
                                            <StandardCard post={post} 
                                            currentAcceptDoubtId={currentAcceptDoubtId} 
                                            setCurrentAcceptDoubtId={setCurrentAcceptDoubtId}
                                            taId={taId}
                                             />
                                        </Grid>) : (null)
                                    ))

                                }  

                        </Grid>

                    </Container>
                )}
               
                
            </>
        );
    
}


export default TA;