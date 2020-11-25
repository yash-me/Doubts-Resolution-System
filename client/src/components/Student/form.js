import React, {useEffect} from "react"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import StandardCard from "./standardCard"
import FormDialog from "./doubt"
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../actions/posts'

 

const useStyles = makeStyles((theme)=>({

    grid:{
        width:'100%',
        margin:'0px',
        marginTop:'70px',
        
        
    }

}));


const Form = ({currentId, setCurrentId, studentName, studentEmail, setStudentEmail}) => {
    
    const posts = useSelector((state)=> state.posts);
    const history = useHistory();

    //const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    // render() {

        const classes = useStyles();
        return (
            <>

                {(studentEmail === "") ? history.push('/') : (

                <Container>
                                    
                                            
                    <FormDialog studentName={studentName} studentEmail={studentEmail} />
                    <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<ExitToAppIcon />}
                                style={{float:'right'}}
                                onClick={()=> {
                                    setStudentEmail("");
                                          
                                  }}
                            >
                                Logout
                            </Button>

                    <Grid container spacing={2} className={classes.grid} >

                        {
                            posts.map(post=>(

                                (post.email === studentEmail) ?  (

                                <Grid item xs={12} md={12}> 
                                    <StandardCard post={post} currentId={currentId} setCurrentId={setCurrentId} />
                                </Grid>
                                ): ("")
                            ))

                        }  

                    </Grid>

                </Container> 
                )}
                
                  
                
            </>
        );
    
}


export default Form;