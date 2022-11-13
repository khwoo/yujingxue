import indexStyle from "@styles/index.module.scss"
import classNames from "classnames"
import styled from "styled-components"
import siteInfo from "../utils/siteInfo.json"
import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import React from "react"

export default function Home() {

    function siteClickAction(siteUrl: string) {
        window.open(siteUrl)
        console.log(siteUrl)
    }

    return (
        <div className={indexStyle.container}>
            <IndexHeader>
                <div className={indexStyle.menu}>
                    <table>
                        <tbody>
                            <tr>
                                <th style={{width: "300px"}}>
                                    사이트 명
                                </th>
                                <th>
                                    사이트 URL
                                </th>
                                <th style={{width: "300px"}}>
                                    사이트 설명
                                </th>
                            </tr>
                            {
                                siteInfo.length > 0 ? siteInfo.map((item, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <tr className={indexStyle.data_tr}>
                                                    <td>
                                                        <div onClick={siteClickAction.bind(this, item.siteUrl)}>{item.siteNm}</div>
                                                    </td>
                                                    <td>
                                                        <div onClick={siteClickAction.bind(this, item.siteUrl)} className={indexStyle.siteUrl}>{item.siteUrl}</div>
                                                    </td>
                                                    <td style={{textAlign: "center"}}>
                                                        {item.siteDesc}
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })
                                    : <tr><td style={{textAlign:"center", fontWeight: "500"}} colSpan={3}>없음</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

                {/*<div className={classNames("display-flex", "align-items-center")}>*/}
                {/*    <Search>*/}
                {/*        <input type={"text"} placeholder={"동성로 상품 투어 검색"}></input>*/}
                {/*    </Search>*/}
                {/*    <div className={classNames("margin-left-30", "cursor-pointer")}>*/}
                {/*        <Image src={"/images/icon-cart.png"} width={24} height={24}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </IndexHeader>
        </div>
    )
}




const IndexHeader = styled.div`
  height: 85px;

  :before {
    content: '';
    width: 1000%;
    position: absolute;
    height: 1px;
    background-color: blanchedalmond;
    top: 0;
    left: -500%;
  }
`

