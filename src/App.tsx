import React from 'react';
import classes from "./App.module.css";

import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyView from "./Components/MyView/MyView";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/ContactMe/Contact";
import { Route } from 'react-router-dom';
import ContainerPresentation from "./Components/WorkPresentation/ContainerPresentation";

const App=()=> {
  return (
    <div className={classes.body}>
        <Header/>
        <MyView/>
        <MySkills />
        <Route exact path={'/'} render={()=>
            <MyWorks/>
        }/>
        <Route exact path={'/projects/:project?'} render={()=>
            <ContainerPresentation/>
        }/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
