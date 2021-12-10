import '../styles/globals.css';
import '../styles/app.css';
import Header from '../globals/Header';
import Footer from '../globals/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
