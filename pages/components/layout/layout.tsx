import layoutStyle from '../../styles/Layout.module.scss'
import Header from '@components/Header/header'

import classNames from "classnames";

const name = 'Layout Name'

export const siteTitle = 'Khwoo next js'

interface LayoutParam {
    children?: any;
    home?: boolean;
    title?: string;
}

export default function Layout(param: LayoutParam) {
    return (
        <>
            <Header/>
            <div className={"site-Layout"}>
                {param.children}
            </div>
        </>
    )
}
