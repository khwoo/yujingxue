import popoverStyle from '@styles/popover.module.scss'
import {useEffect, useRef, useState} from "react";
import {clearInterval} from "timers";

interface PopoverParam {
    children?: any;
    index?: string;
    value?: string;
    select: string;
}
export default function Popover(param: PopoverParam) {

    const [show, setShow] = useState(false)
    const [closeTime, setCloseTime] = useState(0);

    useEffect(() => {
        if(closeTime >= 1) {
            setCloseTime(closeTime - 1)
            if(closeTime <= 1) {
                setShow(false)
            }
        }
    }, [closeTime])

    useEffect(() => {
        if(param.select && param.select === param.index) {
            setShow(true)
            setCloseTime(5)
        } else {
            setShow(false)
            setCloseTime(0)
        }

    }, [param])

    // 이동
    function clickAction() {
        window.open(param.value)
    }

    // 받기
    function closeAction() {
        setShow(false)
    }

    return (
        <>
            {
                show ? (
                    <div style={{display: "block"}} className={popoverStyle.container}>
                        <input defaultValue={param.value}/>
                        <button onClick={clickAction}>이동</button>
                        <button onClick={closeAction}>받기</button>
                        <span>{closeTime}</span>
                    </div>
                ) : ""
            }
            {param.children}
        </>
    )
}
