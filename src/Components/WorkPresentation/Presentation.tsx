import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Presentation.module.css";
import work2img from "../../Images/work-2.jpg"
import {NavLink, Redirect} from 'react-router-dom';



const Presentation: React.FC=(props)=> {
  return (
    <div id={'works'} className={classes.backGroungSizeMyWorks}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={classes.presentImg + ' col-12'}>
                    <img className={classes.styleForPresentImg} src={work2img}/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-7'}>
                    <div className={classes.backGroundDescription}>
                        <div>
                            <h1>Test name</h1>
                            <p> dawdad d  awd awda  wd waaddaw  dawad awdawdawdada dawd ad ad awd aw</p>
                            <a href={''}  className={classes.live_preview}>Live preview<i className="fas fa-angle-right"></i></a>
                        </div>
                        <div className={classes.wrapButton}>
                            <NavLink className={classes.buttonBackIn} to={'/'}>Go Back</NavLink>
                        </div>
                    </div>
                </div>
                <div className={'offset-1 col-4'}>
                    <div className={classes.backGroundDescription}>
                        <div className={classes.usefulLinksWrapper}>
                            <h1>Useful links</h1>
                            <p>GitHub:<a href={''} className={classes.linkToProject}>  Click Hear</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Presentation;
