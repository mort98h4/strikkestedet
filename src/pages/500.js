import { getData } from "../../lib/api";

export default function Custom500(props) {
  return (
    <>
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