import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/app.css";
import Head from "next/head";
import Header from "../globals/Header";
import Footer from "../globals/Footer";

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);

  const [data, setData] = useState([]);
  async function fetchAPI(query, { variables } = {}) {
    const headers = { "Content-Type": "application/json" };
    const res = await fetch(
      "https://mortengross.dk/kea/17_eksamen/strikkestedet/wordpress/graphql",
      {
        method: "POST",
        headers,
        body: JSON.stringify({ query, variables }),
      }
    );
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      console.log("error details", query, variables);
      throw new Error("Failed to fetch API");
    }
    setData(json.data);
  }

  function addToBasket(info, amount, colorForBasket) {
    const amountObj = { amount: { amount } };
    const list = [];
    const newList = list.push(info, amountObj, colorForBasket);

    setBasket((item) => {
      item.push(list);
      return item;
    });
  }

  async function getData() {
    const data = await fetchAPI(
      `
      query Data {
        generalSettings {
          title
          description
        }
        pages(first: 20) {
          nodes {
            id
            title
            slug
            ancestors {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        }
        posts(where: {categoryId: 14, tag: "kontakt", orderby: {field: DATE, order: ASC}}) {
          nodes {
            id
            title
            kontaktMap {
              address
              city
              country
              email
              phone
              zipCode
            }
          }
        }
      }
      `
    );

    return data;
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Strikkestedet</title>
      </Head>
      {data.length != 0 ? (
        <>
          <Header {...data}></Header>
          <main className="2xl:container mx-auto bg-background">
            <Component
              {...pageProps}
              addToBasket={addToBasket}
              basket={basket}
            />
          </main>
          <Footer {...data}></Footer>
        </>
      ) : (
        ""
      )}
      {/* <Footer></Footer> */}
    </>
  );
}

export default MyApp;
