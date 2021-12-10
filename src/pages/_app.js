import '../styles/globals.css';
import '../styles/app.css';
import Header from '../globals/Header';
import Footer from '../globals/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <main className="2xl:container mx-auto bg-background">
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </>
  )
}

export default MyApp
