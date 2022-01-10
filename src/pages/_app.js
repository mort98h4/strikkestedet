import { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/app.css";
import Header from "../globals/Header";
import Footer from "../globals/Footer";

function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useState([]);
  const [knittingPatternAmount, setKnittingPatternAmount] = useState({});

  function setNewSize(size) {
    setKnittingPatternAmount(size);
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

  return (
    <>
      <Header {...pageProps}></Header>
      <main className="2xl:container mx-auto bg-background">
        <Component
          {...pageProps}
          addToBasket={addToBasket}
          basket={basket}
          setNewSize={setNewSize}
          knittingPatternAmount={knittingPatternAmount}
        />
      </main>
      <Footer {...pageProps}></Footer>
    </>
  );
}

export default MyApp;
