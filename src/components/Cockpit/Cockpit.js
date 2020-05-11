import React, {useEffect, useRef} from "react";
import classes from './Cockpit.css'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(()=>{
        toggleBtnRef.current.click();
    }, [props.persons]); //runs only on persons change

    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2){
        assignedClasses.push(classes.red);
    }
    if (props.personsLength >= 1){
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
             <p className={assignedClasses.join(' ')}>This is really working!</p>
             <button ref={toggleBtnRef} className={btnClass}  onClick={props.clicked}>Show persons</button>
        </div>
    );
};


export default React.memo(cockpit);
