import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Contact.module.css";
import {useFormik} from "formik";
import axios from 'axios'
import LoadingAnim from "../LightComponents/loading/LoadingAnim";
import { Fade } from 'react-awesome-reveal';

type State = {
    name: boolean
    email: boolean,
    message: boolean,
    messageAccept: boolean,
    messageFall: boolean,

}

const Contact = () => {
    let [forNameStyle, setNameStyle] = useState<State>({
        name: false,
        email: false,
        message: false,
        messageAccept: false,
        messageFall: false,

    })
    let [loadingState, setLoadingState] = useState(false)
    let loadingAnim = (value: boolean) => {
        setLoadingState(value)

    }
    let onFocusElem = (name: string) => {
        if (name === 'Name') {
            setNameStyle({...forNameStyle, name: true})
        } else if (name === 'Email') {
            setNameStyle({...forNameStyle, email: true})
        } else if (name === 'Message') {
            setNameStyle({...forNameStyle, message: true})
        }
    }
    let onBlurElem = (name: string) => {
        if (name === 'Name') {
            setNameStyle({...forNameStyle, name: false})
        } else if (name === 'Email') {
            setNameStyle({...forNameStyle, email: false})
        } else if (name === 'Message') {
            setNameStyle({...forNameStyle, message: false})
        }
    }

    let messageAccept = () => {
        setNameStyle({...forNameStyle, messageAccept: true})
        setTimeout(() => {
            setNameStyle({...forNameStyle, messageAccept: false})
        }, 2000)
    }
    let messageFall = () => {
        setNameStyle({...forNameStyle, messageFall: true})
        setTimeout(() => {
            setNameStyle({...forNameStyle, messageFall: false})
        }, 2000)
    }

    type FormikErrorType = {
        name?: string
        email?: string
        message?: string
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required';
            } else if (/[@?,."%$#!&*()+0-9]/.test(values.name)) {
                errors.name = 'Name should not contain extraneous characters';
            }
            return errors;
        },
        onSubmit: values => {
            loadingAnim(true)
            axios.post('https://nodejsportfolio-smtp.herokuapp.com/sendMassage', values)
                .then((res) => {
                    if (res.data === 'ok') {
                        formik.resetForm()
                        loadingAnim(false)
                        messageAccept()
                    } else {
                        loadingAnim(false)
                        messageFall()
                    }
                })
                .catch(() => {
                    loadingAnim(false)
                    messageFall()
                })

        },
    });
    return (
        <div id={'contact'} className={classes.backGround}>
            <div className={classes.containerFlex + ' container'}>
                <h1 className={classes.TitleNameStyle}>Contact information</h1>
                <Fade direction={'up'} triggerOnce={true}>
                    <div className={classes.InfoBlock + ' row'}>
                        <div className={classes.OutsidePaddingTop + ' col-md-6 col-lg-4 '}>
                            <div className={classes.InfoBlockBackSize}>
                                <div className={classes.StringBlockPosition}>
                                    <p className={classes.NameString}>Country:</p>
                                    <p className={classes.StringOfBlockInfo}>&nbsp;Ukraine</p>
                                </div>
                                <div className={classes.StringBlockPosition}>
                                    <p className={classes.NameString}>City:</p>
                                    <p className={classes.StringOfBlockInfo}>&nbsp;Ivano-Frankovsk</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.OutsidePaddingTop + ' col-md-6 col-lg-4 '}>
                            <div className={classes.InfoBlockBackSize}>
                                <div className={classes.StringBlockPosition}>
                                    <p className={classes.NameString}>Email: </p>
                                    <p className={classes.StringOfBlockInfo}>&nbsp;olexandr.kk@gmail.com</p>
                                </div>
                                <div className={classes.StringBlockPosition}>
                                    <p className={classes.NameString}>Telegram:<br/></p>
                                    <p className={classes.StringOfBlockInfo}>&nbsp;@Alex_UneQual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className={classes.TitleNameStyleContactForm}>Get in touch</h1>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <div className={loadingState ? classes.exp : classes.exp2}><LoadingAnim></LoadingAnim></div>
                            <div className={classes.BackGroundContactForm}>
                                <div className={loadingState ? classes.fonForReqNormal : classes.fonForReqShowDown}></div>
                                <div className={forNameStyle.messageAccept
                                    ? classes.submitMessage
                                    : classes.submitMessageShowDown}><p>Accept</p><i className="fas fa-check-circle"></i>
                                </div>
                                <div className={forNameStyle.messageFall
                                    ? classes.submitMessageFall
                                    : classes.submitMessageShowDownFall}>
                                    <p>Something is wrong</p>
                                    <span className={classes.smile}>&#128561;</span>
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className={classes.ContactForm}>
                                        <div className={classes.WrapperForInput}>
                                            <label
                                                className={!forNameStyle.name ? classes.styleForLabelNormal : classes.styleForLabelFocus}>
                                                <i className={'fas fa-user'}></i>
                                            </label>
                                            <input
                                                {...formik.getFieldProps('name')}
                                                onBlur={() => {
                                                    onBlurElem('Name')
                                                }}
                                                onFocus={() => {
                                                    onFocusElem('Name')
                                                }}
                                                placeholder={'Name'}
                                            />
                                            {formik.errors.name ?
                                                <div className={classes.error}><p>{formik.errors.name}</p></div> : null}
                                        </div>
                                        <div className={classes.WrapperForInput}>
                                            <label
                                                className={!forNameStyle.email ? classes.styleForLabelNormal : classes.styleForLabelFocus}>
                                                <i className={'fas fa-at'}></i>
                                            </label>
                                            <input
                                                {...formik.getFieldProps('email')}
                                                onBlur={() => {
                                                    onBlurElem('Email')
                                                }}
                                                onFocus={() => {
                                                    onFocusElem('Email')
                                                }}
                                                placeholder={'Email'}
                                            />
                                            {formik.errors.email ?
                                                <div className={classes.error}><p>{formik.errors.email}</p></div> : null}
                                        </div>
                                        <div className={classes.WrapperForTexArea}>
                                            <div className={classes.backGroundLabelTextArea}>
                                                <label
                                                    className={!forNameStyle.message ? classes.styleForLabelNormal : classes.styleForLabelFocus}>
                                                    <i className={'far fa-envelope'}></i>
                                                </label>
                                            </div>
                                            <textarea
                                                {...formik.getFieldProps('message')}
                                                name={'message'}
                                                className={!forNameStyle.message ? classes.ContactFormTextareaNormal : classes.ContactFormTextareaFocus}
                                                onBlur={() => {
                                                    onBlurElem('Message')
                                                }}
                                                onFocus={() => {
                                                    onFocusElem('Message')
                                                }}
                                                placeholder={'Message'}
                                            ></textarea>
                                        </div>
                                        <button disabled={loadingState} type={'submit'} className={classes.ButtonSend}>Send
                                            Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Contact;
