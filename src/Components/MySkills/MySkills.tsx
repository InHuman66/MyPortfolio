import React from 'react';
import classes from "./MySkills.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import iconReact from "../../Images/icons8-react-native-512.png"

const MySkills=()=> {
  return (
    <div className={classes.backgroundColorPage}>
        <div className={classes.dawdwa + ' container'}>
            <div className={classes.HeadText}>
                <h1>Мои Умения</h1>
            </div>
            <div className={classes.positionBlockSkills}>
                <div className={classes.blockSkills + ' row'}>
                    <div className={classes.skill + ' offset-1 offset-sm-0 col-10 col-sm-6 col-md-6 col-lg-4'}>
                        <img src={iconReact}/>
                        <h1>Front-end React</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu pellentesque tristique, ex libero maximus elit, mollis tristique urna eros non tellus</p>
                    </div>
                    <div className={classes.skill + ' offset-1 offset-sm-0 col-10 col-sm-6 col-md-6 col-lg-4'}>
                        <img src={iconReact}/>
                        <h1>Front-end React</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu pellentesque tristique, ex libero maximus elit, mollis tristique urna eros non tellus</p>
                    </div>
                    <div className={classes.skill + ' offset-1 offset-sm-0 col-10 col-sm-6 col-md-6 col-lg-4'}>
                        <img src={iconReact}/>
                        <h1>Front-end React</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu pellentesque tristique, ex libero maximus elit, mollis tristique urna eros non tellus</p>
                    </div>
                    <div className={classes.skill + ' offset-1 offset-sm-0 col-10 col-sm-6 col-md-6 col-lg-4'}>
                        <img src={iconReact}/>
                        <h1>Front-end React</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu pellentesque tristique, ex libero maximus elit, mollis tristique urna eros non tellus</p>
                    </div>
                    <div className={classes.skill + ' offset-1 offset-sm-0 col-10 col-sm-6 col-md-6 col-lg-4'}>
                        <img src={iconReact}/>
                        <h1>Front-end React</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu pellentesque tristique, ex libero maximus elit, mollis tristique urna eros non tellus</p>
                    </div>
                    <div className={classes.skill + ' offset-1 offset-sm-0 col-10 col-sm-6 col-md-6 col-lg-4'}>
                        <img src={iconReact}/>
                        <h1>Front-end React</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus dui sem, vulputate vitae dolor sed, sollicitudin pharetra nisi. In et sem libero. Integer pretium, tellus eu pellentesque tristique, ex libero maximus elit, mollis tristique urna eros non tellus</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MySkills;
