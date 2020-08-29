import React from 'react';
import classes from "./Header.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=()=> {
  return (
    <div className={classes.header}>
        <div className={'container'}>
            <div className={'row'}>
                <div  className={classes.menu + ' col-sm-10  col-12 offset-sm-2 col-md-6 offset-md-6 col-lg-4 offset-lg-8'}>
                    <a>Главная</a>
                    <a>Скиллы</a>
                    <a>Проекты</a>
                    <a>Контакты</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
