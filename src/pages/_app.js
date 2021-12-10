import '../styles/globals.css';
import '../styles/app.css';
import Head from 'next/head'
import Header from '../globals/Header';
import Footer from '../globals/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Strikkestedet</title>
      </Head>
      <Header></Header>
      <main className="2xl:container mx-auto bg-background">
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </>
  )
}

export default MyApp
