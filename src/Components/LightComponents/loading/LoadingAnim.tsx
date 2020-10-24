import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./LoadingAnim.module.css";


const LoadingAnim=()=> {
  return (
      <div className={classes.ldsroller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
}

export default LoadingAnim;
