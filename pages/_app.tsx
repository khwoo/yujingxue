import './styles/global.scss'
import './styles/comm.scss'
import '@styles/fonts.scss'
import Layout from "@components/layout/layout";
import {useRouter} from 'next/router'
import {Provider} from 'react-redux'
import store from '../store'


function App({Component, pageProps, stars}: any) {

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </Provider>
    )
}
export default App

App.getInitialProps = async(context) => {
    return {
        stars: ''
    }
}
