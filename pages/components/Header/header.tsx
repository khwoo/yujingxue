import headerStyle from '@styles/Header.module.scss'
import classNames from "classnames";
import Image from "next/image";
export default function Header() {

    return (
        <>
            <div className={headerStyle.container}>
                <div className={headerStyle.title}>
                    사이트 정보
                </div>
            </div>
        </>
    )
}

