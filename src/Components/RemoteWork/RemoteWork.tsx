import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./RemoteWork.module.css";

const RemoteWork=()=> {
  return (
      <div className={classes.backGround}>
          <div className={' container'}>
              <div className={classes.InfoBlock}>
                <h1>Рассматриваю варианты удаленной работы</h1>
                <button>Нанять меня</button>
              </div>
          </div>
      </div>
  );
}

export default RemoteWork;
