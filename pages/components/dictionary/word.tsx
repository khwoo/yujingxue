import React, {useEffect, useState} from 'react'
import words from '../../../utils/WordDictionary.json'
import wdStyle from '@styles/WordDictionary.module.scss'
export default function WordDictionary() {

    const [wordList, setWordList] = useState([])
    useEffect(() => {
        console.log('===========')
        setWordList(words)
    }, [])


    useEffect(() => {
        console.log(wordList)
    }, [wordList])
    function searchValueAction(e) {
        setWordList((prev) => {
            const list = JSON.stringify(words.filter(data => data.value === e.target.value || data.name === e.target.value))
            return JSON.parse(list)
        })
    }

    return (
        <React.Fragment>
            <div className={wdStyle.container}>Word Dictionary</div>
            <div className={wdStyle.search}>
                <input onChange={searchValueAction} className={wdStyle.searchValue} defaultValue=""/>
            </div>
            {
                wordList.map((item ,index) => {
                    return (
                        <React.Fragment key={index}>
                            <div style={{display: "flex", padding: "10px", backgroundColor: "#eee", borderBottom: "1px solid #fff"}}>
                                <div className={wdStyle.name}>{item.name}</div>
                                <div className={wdStyle.value}>{item.value}</div>
                            </div>
                        </React.Fragment>
                    )
                })
            }

            {
                wordList.length === 0 ? (
                    <div>사전 없습니다.</div>
                ) : ""
            }
        </React.Fragment>
    )
}
