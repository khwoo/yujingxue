import './styles/global.scss'
import './styles/comm.scss'
import '@styles/fonts.scss'
import Layout from "@components/layout/layout";
export default function App({Component, pageProps}: any) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}
