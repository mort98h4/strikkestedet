import {useState, useEffect} from 'react';
import '../styles/globals.css';
import '../styles/app.css';
import Head from 'next/head'
import Header from '../globals/Header';
import Footer from '../globals/Footer';

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch('https://mortengross.dk/kea/17_eksamen/strikkestedet/wordpress/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables })
    });
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      console.log('error details', query, variables);
      throw new Error('Failed to fetch API');
    }
    setData(json.data);
  }
  async function getFooter() {
    const data = await fetchAPI(
      `
      query Footer {
        generalSettings {
          title
          description
        }
        pages {
          nodes {
            id
            title
            slug
            ancestors {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
      `
    )

    return data;
  }
  useEffect(() => {
    getFooter();
  }, []);

  return (
    <>
      <Head>
        <title>Strikkestedet</title>
      </Head>
      {
        data != 0 ? (
          <>
          <Header></Header>
          <main className="2xl:container mx-auto bg-background">
            <Component {...pageProps} />
          </main>
          <Footer {...data}></Footer>
          </>
        ) : ""
      }
      {/* <Footer></Footer> */}
    </>
  )
}

export default MyApp
