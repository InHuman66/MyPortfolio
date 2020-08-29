import React from 'react';
import classes from "./App.module.css";

import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyView from "./Components/MyView/MyView";
import MySkills from "./Components/MySkills/MySkills";

const App=()=> {
  return (
    <div className={classes.body}>
        <Header/>
        <MyView/>
        <MySkills/>
    </div>
  );
}

export default App;
