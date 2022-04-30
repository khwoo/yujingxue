import Document, {DocumentContext, Html, Head, Main, NextScript} from "next/document";
class document extends Document {
    static async getInitialProps(ctx:DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
export default document
