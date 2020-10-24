import React from 'react';
import classes from "./MyView.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';



const particlesOptions ={
    particles:{
        number:{
            value:80,
            density:{
                enable:true,
                value_area:500
            }
        },

    },
    interactivity: {
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            },
        }
    }

}

const MyView = () => {
    return (
        <div className={classes.sizeBody}>
            <Particles className={classes.particles} params={particlesOptions}/>
            <div className={classes.sizeCont + ' container '}>
                <div className={' row h-100'}>
                    <div className={classes.textPosition +' col-12 col-md-6  col-lg-7' }>
                        <div className={classes.txtStyle}>
                            <p>Привет всем</p>
                            <h1>Я Kiselyk Alexandr</h1>
                            <h2>И я React разработчик</h2>
                        </div>
                    </div>
                    <div className={classes.myPhoto +' col-12 col-md-6 col-lg-5'}>
                        <img/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyView;
