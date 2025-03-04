import Head from 'next/head';
import '../styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>
                    Liquidity Syndicate
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Navbar />
            <PageTransition >
                <Component {...pageProps} />
            </PageTransition>
            <Footer />
        </>
    );
}

export default MyApp;
