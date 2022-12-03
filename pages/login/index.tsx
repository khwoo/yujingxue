import React from "react";
import {useEffect, useRef, useState} from "react";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setValueState } from '../../store/features/custom'
import loginStyle from '@styles/login.module.scss'

export default function Login() {

    const pwdRef = useRef(null)

    const router = useRouter()

    const dispatch = useDispatch();

    useEffect(() => {
        pwdRef.current.focus()
    })

    function changePwdAction(e) {
        const date = new Date()
        const _key = date.getMinutes() < 10 ? `0` + date.getMinutes() : date.getMinutes()
        if(e.target.value === process.env.customValue + _key) {
            dispatch(setValueState({
                value: e.target.value
            }))
            router.replace('/')
        }
    }

    return (
        <React.Fragment>
            <div className={loginStyle.loginContainer}>
                <input className={loginStyle.input} ref={pwdRef} onChange={changePwdAction} defaultValue=""/>
            </div>
        </React.Fragment>
    )
}

