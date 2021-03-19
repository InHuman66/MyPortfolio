import React from 'react';
import classes from "./MyView.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import photo from '../../Images/photo_2020-10-21_16-45-55.jpg'
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';


const particlesOptions ={
    particles:{
        number:{
            value:100,
            density:{
                enable:true,
                value_area:800
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
    }
}

const MyView = () => {
    return (
        <div id={'view'} className={classes.sizeBody}>
            <Particles className={classes.particles} params={particlesOptions}/>
            <div className={classes.sizeCont + ' container '}>
                <div className={' row h-100'}>
                        <div className={classes.textPosition +' col-12 col-md-6  col-lg-7' }>
                            <Fade direction={'up'} triggerOnce={true}>
                                <div className={classes.txtStyle}>
                                    <p>Hi There</p>
                                    <h1>I Kiselyk Alexandr</h1>
                                    <ReactTypingEffect text={'Front-end Developer'}/>
                                </div>
                            </Fade>
                        </div>
                    <div className={classes.myPhoto +' col-12 col-md-6 col-lg-5'}>
                        <div className={classes.style_image}>
                            <Tilt trackOnWindow={true} >
                                <Fade direction={'up'} triggerOnce={true}>
                                    <div className={classes.my_image}>
                                    </div>
                                </Fade>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyView;
