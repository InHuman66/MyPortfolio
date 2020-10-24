import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./MyWorks.module.css";
import background from "../../Images/1_vAFl1TMSGcLL24w6R5z2NQ.jpeg"
import Work from "./Work/Work";

const MyWorks=()=> {

    let dataWorks =[
        {id: 1, name: 'Social Network', img: background, smallDescription: 'It`s my first project on React' },
        {id: 2, name: 'Social Network', img: background, smallDescription: 'It`s my first project on React' },
        {id: 3, name: 'Social Network', img: background, smallDescription: 'It`s my first project on React' },
        {id: 4, name: 'Social Network', img: background, smallDescription: 'It`s my first project on React' },
    ]

  return (
    <div className={classes.backGroungSizeMyWorks}>
        <div className={'container'}>
            <div className={classes.title}>
                <h1>My works</h1>
            </div>
            <div className={classes.BlockWorks + ' row'}>
                {dataWorks.map((elem)=><Work key={elem.id} name={elem.name} img={elem.img} id={elem.id} smallDescription={elem.smallDescription}/> )}
            </div>

        </div>
    </div>
  );
}

export default MyWorks;
