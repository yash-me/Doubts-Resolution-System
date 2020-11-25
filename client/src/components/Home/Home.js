import React from 'react'
import FullWidthTabs from './TabPanel'

export default function Home({studentName,
     setStudentName, studentEmail, setStudentEmail,
     TaName, setTaName, TaEmail, setTaEmail
    }) {
    return (
        <div>
            <FullWidthTabs 
            studentName={studentName}
            setStudentName={setStudentName}
            studentEmail={studentEmail}
            setStudentEmail={setStudentEmail}
            TaName={TaName}
            setTaName={setTaName}
            TaEmail={TaEmail}
            setTaEmail={setTaEmail}
            />
        </div>
    )
}
