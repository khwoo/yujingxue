import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout, {siteTitle} from "@components/layout/layout";
import layoutStyle from '../styles/Layout.module.scss'

export default function FirstPost({num, data, datastr}: any) {

    return (
        <>
            <Layout>
                <Head>
                    <title>Create First-Posts!</title>
                </Head>
                <div>{siteTitle}</div>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy={"lazyOnload"}
                    onLoad={() => {
                        console.log('Script Load!')
                    }}
                />
                <h1 className={layoutStyle.subTitle}>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>back go Home</a>
                    </Link>
                </h2>
                <div>
                    <div>Num: {num}, data Count: {data.length}</div>
                    <div>
                        {
                            data.map((item: Info) => (
                                <div key={item.value}>name: {item.name}, value : {item.value}</div>
                            ))
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

interface Info {
    name: string;
    value: string;
    age: number;
}

export async function getServerSideProps() {
    let data: Array<Info> = new Array<Info>()
    data.push({ name: 'color', value: 'red', age: 26 })
    data.push({ name: 'color', value: 'blue', age: 26 })

    let datalist = data.map((item: Info) => {
        return {
            name: item.name,
            value: item.value
        }
    })
    let datastr: string[] = ['1', '2', '3']
    const num: number = 10
    return {
        props: {
            data: datalist,
            num,
            datastr
        }
    }
}
