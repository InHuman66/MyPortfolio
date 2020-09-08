import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Footer.module.css";


const Footer=()=> {
  return (
      <div className={classes.backGround}>
            <div className={classes.containerSize + ' container'}>
                <h1>Кисэлык Александр</h1>
                <div className={classes.socialMedialBlock}>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
                <p>2020 все права защещены</p>
            </div>
      </div>
  );
}

export default Footer;
