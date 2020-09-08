import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Contact.module.css";


const Contact=()=> {
  return (
      <div className={classes.backGround}>
        <div className={classes.containerFlex + ' container'}>
            <h1 className={classes.title}>Контакты</h1>
            <div className={classes.inputFormSize}>
                <form>
                    <input placeholder={'You Name'}/>
                    <input placeholder={'You Number'}/>
                    <textarea placeholder={'Your massage'}/>
                </form>
            </div>
            <button>Оправить</button>
        </div>
      </div>
  );
}

export default Contact;
