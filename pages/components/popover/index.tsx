import popoverStyle from '@styles/popover.module.scss'
import {useEffect, useRef, useState} from "react";

interface PopoverParam {
    children?: any;
    index?: string;
    value?: string;
    select: string;
}

type Fnc = (body: any) => void;

export default function Popover(param: PopoverParam) {

    const [show, setShow] = useState(false)
    const [closeTime, setCloseTime] = useState(0);

    const inputRef = useRef(null)
    const tickRef = useRef(null)

     const closeTimeAction = () => {
         setCloseTime((data) => {
             // 받기
             if(data === 1) {
                 closeAction()
             }
             return data - 1
         })
     }

     useEffect(() => {
         if(show) {
             inputRef.current.focus()
         }
     }, [show])

    useEffect(() => {
        if(param.select && param.select === param.index) {
            setShow(true)
            setCloseTime(5)
            tickRef.current = setInterval(() => {
                closeTimeAction()
            }, 1000);
        } else {
            setShow(false)
            setCloseTime(5)
        }

        return () => {
            if(tickRef.current) {
                clearInterval(tickRef.current)
            }
        }

    }, [param])

    // 이동
    function clickAction() {
        window.open(param.value)
    }

    // 받기
    function closeAction() {
        if(tickRef.current) {
            clearInterval(tickRef.current)
        }
        setShow(false)
    }

    return (
        <>
            {
                show ? (
                    <div style={{display: "flex"}} className={popoverStyle.container}>
                            <input ref={inputRef} defaultValue={param.value}/>
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
