import indexStyle from "@styles/index.module.scss"
import styled from "styled-components"
import siteInfo from "../utils/siteInfo.json"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import React, {useEffect, useState} from "react"
import Popover from "@components/popover";

export default function Home() {

    const [site, setSite] = useState([])

    const [selectSite, setSelectSite] = useState("");

    useEffect(() => {
        setSite(siteInfo)
    }, [])

    // 사이크 클릭
    function siteClickAction(siteUrl: string) {
        window.open(siteUrl)
    }

    // 사이트 URL 위
    function siteUrlMouseOverAction(index: number, childIndex: number) {
        setSelectSite(`${index}${childIndex}`)
    }

    return (
        <div className={indexStyle.container}>
            <IndexHeader>
                <div className={indexStyle.menu}>
                    {
                        site.map((item, index) => {
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
                                                    Name
                                                </th>
                                                <th>
                                                    URL
                                                </th>
                                                <th style={{width: "300px"}}>
                                                    desc
                                                </th>
                                            </tr>
                                            {
                                                item.sites.length > 0 ? item.sites.map((childItem, childIndex) => {
                                                        return (
                                                            <React.Fragment key={childIndex}>
                                                                <tr className={indexStyle.data_tr}>
                                                                    <td>
                                                                        <div onClick={siteClickAction.bind(this, childItem.siteUrl)}>
                                                                            {childItem.siteNm}
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <Popover select={selectSite} index={`${index}${childIndex}`} value={childItem.siteUrl} >
                                                                            <div onMouseOver={siteUrlMouseOverAction.bind(this, index, childIndex, childItem)} onClick={siteClickAction.bind(this, childItem.siteUrl)} className={indexStyle.siteUrl}>
                                                                                {childItem.siteUrl}
                                                                            </div>
                                                                        </Popover>
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

