import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import CookieBanner from '../components/CookieBanner';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <Component {...pageProps} />
                <CookieBanner />
            </Layout>
        </>
    );
}

export default MyApp;
