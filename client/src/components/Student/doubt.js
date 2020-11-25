import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch} from 'react-redux';
import { createPost } from '../../actions/posts';


export default function FormDialog({studentName, studentEmail}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//////////////////////////////////////////////

  

  const [postData, setPostData] = useState({

      email:'', title:'',description:'', name:'', answer:""
  });

  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {

      e.preventDefault(); 

      dispatch(createPost(postData));
  }

  // console.log(posts); 


  return (
    <div  style={{marginTop:'50px'}}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Raise Doubt
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <DialogTitle id="form-dialog-title">Post Doubt</DialogTitle>
            <DialogContent>
            <DialogContentText>
                We would love to help you out!
            </DialogContentText>
            <TextField
                autoFocus
                name="title"
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                onChange={(e)=>setPostData({ ...postData, title: e.target.value, 
                  email:studentEmail, name:studentName, postTime: new Date()})}
                
            />
            <TextField
                
                margin="dense"
                name="description"
                id="description"
                label="Description"
                type="text"
                fullWidth
                
                onChange={(e)=>setPostData({ ...postData, description: e.target.value})}
                
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} type="submit" color="primary">
                Ask Doubt
            </Button>
            </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
