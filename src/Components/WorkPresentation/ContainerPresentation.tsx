import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Presentation.module.css";
import Presentation from "./Presentation";
import { withRouter } from 'react-router-dom';


const ContainerPresentation:React.FC=(props)=> {
    return (
        <Presentation/>
    );
}

export default withRouter(ContainerPresentation);