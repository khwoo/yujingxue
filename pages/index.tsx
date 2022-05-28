import indexStyle from "@styles/index.module.scss"
import classNames from "classnames"
import styled from "styled-components"
import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {Navigation, Pagination} from "swiper"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Home() {
    return (
        <div className={indexStyle.container}>
            <IndexHeader>
                <div className={indexStyle.menu}>
                    <span>스토어1</span>
                    <span>상품2</span>
                    <span>투어패스3</span>
                    <span>여행정보4</span>
                    <span>이벤트/공지사항</span>
                </div>
                <div className={classNames("display-flex", "align-items-center")}>
                    <Search>
                        <input type={"text"} placeholder={"동성로 상품 투어 검색"}></input>
                    </Search>
                    <div className={classNames("margin-left-30", "cursor-pointer")}>
                        <Image src={"/images/icon-cart.png"} width={24} height={24}/>
                    </div>
                </div>
            </IndexHeader>
            <Swiper navigation={{nextEl: '._swiper-button-next', prevEl: '._swiper-button-prev'}}
                    pagination={{ clickable: true, el: '._swiper-pagination', type: 'fraction' }}
                    modules={[Navigation, Pagination]}
                    className={indexStyle.swiper}>
                <SwiperSlide>
                    <Image src={"/images/temp/banner_01.png"} layout={"fill"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/temp/banner_02.png"} layout={"fill"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/temp/banner_01.png"} layout={"fill"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/temp/banner_02.png"} layout={"fill"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/temp/banner_01.png"} layout={"fill"}/>
                </SwiperSlide>
                <div className={"_swiper-pagination"}></div>
                <div className={"_swiper-button-prev"}></div>
                <div className={"_swiper-button-next"}></div>
            </Swiper>
        </div>
    )
}

const IndexHeader = styled.div`
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  :before {
    content: '';
    width: 1000%;
    position: absolute;
    height: 1px;
    background-color: #EBEBEB;
    bottom: 0;
    left: -500%;
  }
`

const Search = styled.div`
  font-size: 14px;
  background-color: #F5F5F6;
  border-radius: 21px;
  height: 42px;
  width: 270px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0 0 40px;

  :before {
    content: '';
    left: 14px;
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("/images/icon-search-gray.png");
    background-position: 100% 100%;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  input {
    color: #B2B2B2;
    font-weight: 400;
    background-color: transparent;
    border: none;
    outline: none;
    height: 20px;
    width: 200px;

    ::placeholder {
      color: #717377;
    }
  }
`
