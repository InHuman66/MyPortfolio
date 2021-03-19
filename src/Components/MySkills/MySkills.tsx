import React, {ReactHTML, useEffect, useState} from 'react';
import classes from "./MySkills.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import iconReact from "../../Images/react-logo-7B3CE81517-seeklogo.com.png"
import iconJS from "../../Images/JSIcons.png"
import iconNode from "../../Images/Node.js_logo.svg"
import iconGit from "../../Images/GitLogo.png"
import { Fade } from 'react-awesome-reveal';
import {DivEvent} from "tsparticles/dist/Options/Classes/Interactivity/Events/DivEvent";



let setElem=0
let setTimeoutid:any = 0;

const MySkills=()=> {
    let [elemId, setElemId]=useState<string>('')
    let timerId=(funck:()=>void, time: number ) =>  {
        let timeId = setTimeout( funck, time)
        setTimeoutid = timeId
    }
    let maySkills=[
        {name: 'React', description: 'dawdaw a da dwawdaw da aw dawd awd aw', id:'1', icon:'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'},
        {name: 'Html/CSS', description: 'dawdaw awdaw dawd aw dad awdawd a awdwdaw w', id:'2', icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'},
        {name: 'Javascript', description: 'dawdaw awdaw daw dawdawdwa dawd aaw dwad wad aaw dawd awwd awd aw', id:'3', icon:iconJS,},
        {name: 'Node.js', description: 'dawdaw awda da dawawa wdawd awdawdwa awd awdawdaw daw dawd awd aw', id:'4', icon:iconNode},
        {name: 'Git', description: 'dawdaw aw awdawd dawdaw a  awdawa daw dawd awd aw', id:'5', icon:iconGit},
        {name: 'TypeScript', description: 'dawdaw awa  awdawa daw dawd awd aw', id:'6', icon:'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png'},
    ]
    let leftBlockSkills = [];
    let rightBlockSkills = [];
    if(maySkills.length%2 ){
        leftBlockSkills = maySkills.slice(0, Math.floor(maySkills.length/2 + 1))
        rightBlockSkills = maySkills.slice(Math.ceil(maySkills.length/2), maySkills.length)
    }else {
        leftBlockSkills = maySkills.slice(0, Math.floor(maySkills.length/2))
        rightBlockSkills = maySkills.slice(Math.ceil(maySkills.length/2), maySkills.length)
    }
    let  randomInteger = () =>{
        let rand = 0 + Math.random() * (maySkills.length-1 + 1 - 0);
        if(Math.floor(rand)=== setElem){
            setElemId(maySkills[Math.floor(0 + Math.random() * (maySkills.length-1 + 1 - 0))].id)
            setElem=Math.floor(0 + Math.random() * (maySkills.length-1 + 1 - 0))
        }else {
            setElem = Math.floor(rand)
            setElemId(maySkills[Math.floor(rand)].id)
        }
        timerId(randomInteger, 2000)
    }
    useEffect(() => {
        randomInteger()
    }, [])

    let selectSkill = (id: string)=>{
        setElemId(id)
        let key  = Object.keys(maySkills).find((key) => maySkills[Number(key)].id === id)
        if(key !== undefined){
            setElem = Number(key)
        }
        clearTimeout(setTimeoutid)
        timerId(randomInteger, 5000)
    }
    return (
    <div id={'skill'} className={classes.backgroundColorPage}>
        <div className={classes.dawdwa + ' container'}>
            <div className={classes.HeadText}>
                <h1 >My Skills</h1>
            </div>
            <div className={classes.positionBlockSkills}>
                <div className={'row'}>
                    <div className={'col-12 col-md-6'}>
                        <Fade direction={'left'} triggerOnce={true}>
                            <div className={'row'}>
                                <div className={'col-12 col-sm-6 col-md-12 col-xl-6'}>
                                    {leftBlockSkills.map((item)=>
                                        <div onClick={()=>{selectSkill(item.id)}} key={item.id} className={item.id === elemId ? classes.item_Skill_Fok : classes.item_Skill }>
                                            <img src={item.icon}/>
                                            <h1>{item.name}</h1>
                                        </div>
                                    )}
                                </div>
                                <div className={'col-12 col-sm-6 col-md-12 col-xl-6'}>
                                    {rightBlockSkills.map((item)=>
                                        <div onClick={()=>{selectSkill(item.id)}} key={item.id} className={item.id ===elemId ?  classes.item_Skill_Fok : classes.item_Skill }>
                                            <img src={item.icon}/>
                                            <h1>{item.name}</h1>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Fade>
                    </div>
                        <div className={classes.description_Block +' col-12 col-md-6'}>
                            <Fade direction={'right'} triggerOnce={true}>
                                <h1>Description</h1>
                                <div className={classes.txtDescription}>
                                    <p>{maySkills[setElem].description}</p>
                                </div>
                            </Fade>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MySkills;
