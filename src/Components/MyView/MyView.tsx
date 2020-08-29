import React from 'react';
import classes from "./MyView.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyView = () => {
    return (
        <div className={classes.sizeBody}>
            <div className={classes.sizeCont + ' container '}>
                <div className={' row h-100'}>
                    <div className={classes.textPosition +' col-12 col-md-6  col-lg-7' }>
                        <div className={classes.txtStyle}>
                            <p>Привет всем</p>
                            <h1>Я Кисэлык Александр</h1>
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
