import layoutStyle from '../../styles/Layout.module.scss'
export default function Layout({children}: any) {
    return (
        <>
            {layoutStyle.LayoutContainer}
            <div className={layoutStyle.LayoutContainer}>{children}</div>
        </>

    )
}
