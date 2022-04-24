import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'
export default function Home() {
    return (
        <>
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
                <h1>Create Next App</h1>
                <Link href="/posts/first-post">
                    <div>
                        Go First Post
                    </div>
                </Link>
            </div>
        </>
    )
}
