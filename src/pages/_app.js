// import "tailwindcss/tailwind.css";
import '../styles/globals.css';
import '../styles/app.css';
import Header from '../globals/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
