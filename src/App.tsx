import React from 'react';
import classes from "./App.module.css";

import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyView from "./Components/MyView/MyView";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import RemoteWork from "./Components/RemoteWork/RemoteWork";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/ContactMe/Contact";

const App=()=> {
  return (
    <div className={classes.body}>
        <Header/>
        <MyView/>
        <MySkills/>
        <MyWorks/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
