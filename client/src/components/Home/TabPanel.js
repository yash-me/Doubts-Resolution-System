import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GoogleLogin from 'react-google-login';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';


function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
    display:'block',
     marginLeft:'auto', 
     marginRight:'auto',
     marginTop:'50px',
  },
}));

export default function FullWidthTabs({studentName, 
  setStudentName, studentEmail, setStudentEmail,
  TaName, setTaName, TaEmail, setTaEmail

}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const history = useHistory();
  const responseGoogleStudent = response =>{

    setStudentName(response.profileObj.name);
    setStudentEmail(response.profileObj.email);
    
  
  };

  const responseGoogleTa = response =>{

    setTaName(response.profileObj.name);
    setTaEmail(response.profileObj.email);
    

  };


  return (

    
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Student" {...a11yProps(0)} />
          <Tab label="Teaching Assistant" {...a11yProps(1)} />
          <Tab label="Dashboard" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        {(studentEmail === "") ? (

        <TabPanel value={value} index={0} dir={theme.direction}>
                    
          <GoogleLogin
              clientId="189188116379-e1j4f2vvvv9vumioqtd6e79g4sf6708r.apps.googleusercontent.com"
              buttonText="Student Login"
              onSuccess={responseGoogleStudent}
              onFailure={responseGoogleStudent}
              redirect_uri="http://localhost:3000/student"
              cookiePolicy={'single_host_origin'}
          />

        </TabPanel>

        ):history.push('/student')}

        {(TaEmail === "") ? (

        <TabPanel value={value} index={1} dir={theme.direction}>
                    
          <GoogleLogin
              clientId="189188116379-e1j4f2vvvv9vumioqtd6e79g4sf6708r.apps.googleusercontent.com"
              buttonText=" TA Login"
              onSuccess={responseGoogleTa}
              onFailure={responseGoogleTa}
              cookiePolicy={'single_host_origin'}
              
          />

        </TabPanel>

        ):history.push('/TA')}

        <TabPanel value={value} index={2} dir={theme.direction}>
        <Link to='/TeachersDashboard' style={{ textDecoration: 'none', color: "inherit" }}>
          <Button variant="contained" >
            Dashboard
          </Button>
        </Link>            

        </TabPanel>
       
      </SwipeableViews>
    </div>
  );
}
