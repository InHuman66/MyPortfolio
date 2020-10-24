import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Work.module.css";


type PropsType ={
    name: string,
    img: string,
    id: number,
    smallDescription: string,


}

const Work: React.FC<PropsType>=(props)=> {
    let [styleForImg, setStyleForImg] = useState(classes.NormalImgStyle);
    let styleForButton = classes.HoverButtonStyle;
    let [styleForDescription, setStyleForDescription] = useState(classes.descriptionBlock);

    let OnMouseEnter = ()=>{
        setStyleForImg(classes.HoverImgStyle)
        setStyleForDescription(classes.descriptionBlockHover)
    }
    let OnMouseLeave = ()=>{
        setStyleForImg(classes.NormalImgStyle)
        setStyleForDescription(classes.descriptionBlock)
    }

  return (
      <div className={' col-12 col-md-12 col-lg-6'}>
          <div className={classes.backgroundColor}>
              <div className={classes.blockMyWork}>
                  <div onMouseEnter={()=>{OnMouseEnter()}} onMouseLeave={()=>{OnMouseLeave()}} className={classes.backImg}>
                      <img className={styleForImg} src={props.img}/>
                      <div className={styleForDescription}>
                          <h1 className={classes.titleDescription}>{props.name}</h1>
                          <p className={classes.smallDescription}>{props.smallDescription}</p>
                          <button className={styleForButton}>Смотреть</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Work;
