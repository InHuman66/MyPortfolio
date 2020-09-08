import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./MyWorks.module.css";
import background from "../../Images/1_vAFl1TMSGcLL24w6R5z2NQ.jpeg"
import Work from "./Work/Work";

const MyWorks=()=> {

    // let styleForImg = classes.NormalImgStyle;
    // let styleForButton = classes.NormalButtonStyle;
    let [styleForImg, setStyleForImg] = useState(classes.NormalImgStyle);
    let [styleForButton, setStyleForButton] = useState(classes.NormalButtonStyle);

    let OnMouseEnter = ()=>{
        setStyleForButton(classes.HoverButtonStyle)
        setStyleForImg(classes.HoverImgStyle)
    }
    let OnMouseLeave = ()=>{
        setStyleForButton(classes.NormalButtonStyle)
        setStyleForImg(classes.NormalImgStyle)
    }




  return (
    <div className={classes.backGroungSizeMyWorks}>
        <div className={'container'}>
            <div className={classes.title}>
                <h1>Мои работы</h1>
            </div>
            <div className={classes.BlockWorks + ' row'}>
                    <div className={' col-12 col-md-12 col-lg-6'}>
                        <Work/>
                    </div>
                    <div className={' col-12 col-md-12 col-lg-6'}>
                        <Work/>
                    </div>
            </div>

        </div>
    </div>
  );
}

export default MyWorks;
