import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Form from './components/Student/form'
import TA from './components/TA/TA'
import SolveDoubt from './components/TA/SolveDoubt'
import TeachersDashboard from './components/TeachersDashboard/TeachersDashboard'
import Home from './components/Home/Home'

const App = () => {

const [currentId, setCurrentId] = useState(null);
const [currentAcceptDoubtId, setCurrentAcceptDoubtId] = useState(null);

/////////////////Google Login/////////////////////
const [studentName, setStudentName] = useState("");
const [studentEmail, setStudentEmail] = useState("");
const [TaName, setTaName] = useState("");
const [TaEmail, setTaEmail] = useState("");
/////////////////Google Login/////////////////////

const [taId, setTaId] = useState(null)
 
  return (

    <Router>
                
                    <Switch>
                        <Route exact 
                        path="/student" 
                        render={(props) => (
                          <Form {...props} 
                          currentId={currentId} 
                          setCurrentId={setCurrentId} 
                          studentName={studentName}
                          studentEmail={studentEmail}
                          setStudentEmail={setStudentEmail}
                          />
                          
                        )}
                        />

                        <Route exact
                         path="/TA"
                         render={(props) => (
                          <TA {...props} 
                          currentAcceptDoubtId={currentAcceptDoubtId} 
                          setCurrentAcceptDoubtId={setCurrentAcceptDoubtId}
                          TaName={TaName}
                          setTaName={setTaName}
                          TaEmail={TaEmail}
                          setTaEmail={setTaEmail}
                          taId={taId}
                          setTaId={setTaId}
                          />
                        )}
                        />

                        <Route exact
                         path="/TA/SolveDoubt"
                         render={(props) => (
                          <SolveDoubt {...props} 
                          currentAcceptDoubtId={currentAcceptDoubtId}
                          TaEmail={TaEmail}
                          setTaEmail={setTaEmail}
                          TaName={TaName}
                          taId={taId}
                          setTaId={setTaId}
                          />
                        )}
                        />

                        <Route exact
                         path="/TeachersDashboard"
                         render={(props) => (
                          <TeachersDashboard {...props} />
                        )}
                        />

                        <Route exact
                         path="/"
                         render={(props) => (
                          <Home {...props}
                          studentName={studentName}
                          setStudentName={setStudentName}
                          studentEmail={studentEmail}
                          setStudentEmail={setStudentEmail}
                          TaName={TaName}
                          setTaName={setTaName}
                          TaEmail={TaEmail}
                          setTaEmail={setTaEmail}
                          />
                        )}
                        />
                    </Switch>
                
    </Router>



    
  );
}

export default App;
