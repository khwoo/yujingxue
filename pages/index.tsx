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
    }

    return (
        <div className={indexStyle.container}>
            <IndexHeader>
                <div className={indexStyle.menu}>
                    {
                        siteInfo.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className={indexStyle.categoryContainer}>
                                        <div className={indexStyle.categoryNm}>
                                            {item.categoryNm}
                                        </div>

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
                                                item.sites.length > 0 ? item.sites.map((childItem, childIndex) => {
                                                        return (
                                                            <React.Fragment key={childIndex}>
                                                                <tr className={indexStyle.data_tr}>
                                                                    <td>
                                                                        <div onClick={siteClickAction.bind(this, childItem.siteUrl)}>{childItem.siteNm}</div>
                                                                    </td>
                                                                    <td>
                                                                        <div onClick={siteClickAction.bind(this, childItem.siteUrl)} className={indexStyle.siteUrl}>{childItem.siteUrl}</div>
                                                                    </td>
                                                                    <td style={{textAlign: "center"}}>
                                                                        {childItem.siteDesc}
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
                                </React.Fragment>
                            )
                        })
                    }
                </div>
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

