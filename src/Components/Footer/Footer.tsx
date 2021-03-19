import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Footer.module.css";
import instagramIcon from "../../Images/instagram.png"
import LinkedinIcon from "../../Images/linkedin.png"
import GithubIcon from "../../Images/github.png"


const Footer=()=> {
  return (
      <div className={classes.backGround}>
          <div className={'container'}>
              <div className={'row'}>
                  <div className= {'col-12'}>
                      <div className={classes.BlockInfo}>
                          <div className={classes.containerSize + ' container'}>
                              <h1>Kiselyk Alexandr</h1>
                              <div className={classes.socialMedialBlock}>
                                  <a><img src={instagramIcon}/></a>
                                  <a><img src={LinkedinIcon}/></a>
                                  <a><img src={GithubIcon}/></a>
                              </div>
                              <p>© 2020 All Rights Reserved.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Footer;
