import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'
import Layout from "./components/layout/layout";
export default function Home() {
    return (
        <>
            <Layout home title={"home"}>
                <Head>
                    <title>Create Next App Index!</title>
                </Head>
                <div>
                    <div>
                        <Image
                            src="/images/profile.jpg"
                            width={100}
                            height={100}
                        />
                    </div>
                    <h1 className={"width-200"}>Create Next App</h1>
                    <Link href="/posts/first-post">
                        <div>
                            Go First Post
                        </div>
                    </Link>
                </div>
            </Layout>
        </>
    )
}
