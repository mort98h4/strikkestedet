import { getData } from "../../lib/api";
import Head from "next/head";

export default function Custom500(props) {
  return (
      <>
      <Head>
        <title>{`${props.headerFooterData.generalSettings.title} | 500 - Server-side error occured`}</title>
        <meta name="robots" content="noindex"></meta>
        <link rel="icon" type="image/png" sizez="180x180" href="./apple-touch-icon.ico"></link>
        <link rel="icon" type="image/png" sizez="32x32" href="./favicon32x32"></link>
        <link rel="icon" type="image/png" sizez="16x16" href="./favicon16x16"></link>
      </Head>
      <h1>500 - Server-side error occurred</h1>
    </>
  )
}

export async function getStaticProps() {
    const headerFooterData = await getData();
    return {
      props: {
        headerFooterData
      }
    }
  }