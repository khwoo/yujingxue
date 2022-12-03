import layoutStyle from '../../styles/Layout.module.scss'
import Header from '@components/Header/header'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import classNames from "classnames";
import {setValueState} from "../../../store/features/custom";
import {useEffect, useState} from "react";

const name = 'Layout Name'

export const siteTitle = 'Khwoo next js'

interface LayoutParam {
    children?: any;
    home?: boolean;
    title?: string;
}

function Layout(param: LayoutParam) {
    const router = useRouter()
    const custom = useSelector(setValueState).payload.custom
    const [loading, setLoading] = useState(true)



    useEffect(() => {

        router.events.on('routeChangeComplete', () => {
            setLoading(false)
        })

        const date = new Date()
        const _key = date.getMinutes() < 10 ? `0` + date.getMinutes() : date.getMinutes()
        if (custom.value !== process.env.customValue + _key) {
            if (router.pathname != '/login') {
                router.replace('/login')
            } else {
                setLoading(false)
            }
        }
    })

    return (
        <>
            {!loading ?
                (
                    <div>
                        <Header/>
                        <div className={"site-Layout"}>
                            {param.children}
                        </div>
                    </div>
                )
                    : (
                        <div style={{margin: "30px"}}>
                            Loading...
                        </div>
                )
            }
        </>
    )
}

export default Layout
