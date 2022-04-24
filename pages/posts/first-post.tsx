import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout/layout";
import layoutStyle from '../styles/Layout.module.scss'
export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Create First-Posts!</title>
                </Head>
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
            </Layout>
        </>
    )
}
