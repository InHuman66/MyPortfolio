import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Work.module.css";
import background from "../../../Images/1_vAFl1TMSGcLL24w6R5z2NQ.jpeg"

const Work=()=> {
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
    <div className={classes.backgrounColor}>
        <div className={classes.blockMyWork}>
            <div onMouseEnter={()=>{OnMouseEnter()}} onMouseLeave={()=>{OnMouseLeave()}} className={classes.backImg}>
                <img className={styleForImg} src={background}/>
                <button className={styleForButton}>Смотреть</button>
            </div>
            <div className={classes.blocDescription }>
                <h1>Work Name</h1>
                <p>lorem daw  dwada awdawda dawd dwadawdawdawdw awdaw awdwa awdwad awdwadawd </p>
            </div>
        </div>
    </div>
  );
}

export default Work;
