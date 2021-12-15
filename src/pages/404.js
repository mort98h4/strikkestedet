import { getData } from "../../lib/api";

export default function Custom404(props) {
    return (
      <>
        <h1>404 - Page Not Found</h1>
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