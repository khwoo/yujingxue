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
            <div className={layoutStyle.LayoutContainer}>
                1111
            </div>
            {/*<div className={layoutStyle.LayoutContainer}>*/}
            {/*    <div className={layoutStyle.header}>*/}
            {/*        <span className={classNames({*/}
            {/*            [layoutStyle.homePage]: param.home,*/}
            {/*            [layoutStyle.firstPostPage]: !param.home*/}
            {/*        })}>Title: {param.title}</span>*/}
            {/*        <span>{name}</span>*/}
            {/*    </div>*/}
            {/*    <div className={layoutStyle.children}>{param.children}</div>*/}
            {/*</div>*/}
        </>
    )
}
