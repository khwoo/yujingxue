import headerStyle from '@styles/Header.module.scss'
import classNames from "classnames";
import Image from "next/image";
export default function Header() {
    return (
        <>
            <div className={headerStyle.container}>
                <div className={classNames(headerStyle.view, "site-Layout")}>
                    <div className={classNames("display-flex", "align-items-center")}>
                        <Image src={"/images/icon-ksp.png"} width={38} height={26} />
                        <div className={"margin-left-15"}>
                        <span className={headerStyle.title}>
                            #쇼핑메카 젊음의 거리! 대구 동성로
                        </span>
                        </div>
                    </div>
                    <div className={headerStyle.buttons}>
                        <span onClick={handleHandsFreeAction}>
                            핸즈프리
                        </span>
                        <span className={classNames("margin-left-25", "margin-right-25")}>
                            택스계산
                        </span>
                        <span onClick={handleLoginAction}>
                            로그인
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

/**
 * 로그인 버튼
 */
function handleLoginAction(){
    alert('로그인 한다.')
}

/**
 * 핸즈프리 버튼
 */
function handleHandsFreeAction() {
    alert('핸즈프리 한다.')
}
