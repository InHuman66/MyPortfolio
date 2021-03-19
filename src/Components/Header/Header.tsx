import React, {useState} from 'react';
import classes from "./Header.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

let controller = 1

const Header=()=> {
    let [styleFirBurgerMenu, setStyle]= useState(classes.menuItems)

    let onClickSkill = (name:string)=>{
        let position = document.getElementById(name)
        let value = 0
        if (position !== null){
            value = position.offsetTop
        }
        window.scrollTo({
            top: value,
            behavior: "smooth"
        });
    }
    let onClickBurgerMenu =  () => {
        if (controller === 1){
            setStyle(classes.menuItemsActive)
            controller = 2
        }else {
            setStyle(classes.menuItems)
            controller = 1
        }
    }
  return (
    <div className={classes.header}>
        <div className={'container'}>
            <div className={'row'}>
                <div  className={classes.menu + ' col-sm-10  col-12 offset-sm-2 col-md-6 offset-md-6 col-lg-4 offset-lg-8'}>
                    <div className={classes.burgerShow}>
                        <div className={styleFirBurgerMenu}>
                            <div className={classes.wrapperB}>
                                <a onClick={()=>{onClickSkill('view')}}>Home</a>
                            </div>
                            <div className={classes.wrapperB}>
                                <a onClick={()=>{onClickSkill('skill')}}>My Skills</a>
                            </div>
                            <div className={classes.wrapperB}>
                                <a onClick={()=>{onClickSkill('works')}}>My Projects</a>
                            </div>
                            <div className={classes.wrapperB}>
                                <a onClick={()=>{onClickSkill('contact')}}>Contact</a>
                            </div>
                        </div>
                        <div  onClick={()=>{onClickBurgerMenu()}} className={classes.BurgerWrapper}>
                            <span className={classes.Lines}></span>
                        </div>
                    </div>
                    <div className={classes.wrapperA}>
                        <a onClick={()=>{onClickSkill('view')}}>Home</a>
                    </div>
                    <div className={classes.wrapperA}>
                        <a onClick={()=>{onClickSkill('skill')}}>My Skills</a>
                    </div>
                    <div className={classes.wrapperA}>
                        <a onClick={()=>{onClickSkill('works')}}>My Projects</a>
                    </div>
                    <div className={classes.wrapperA}>
                        <a onClick={()=>{onClickSkill('contact')}}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
