import { useParams } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
import BasketList from "../components/basketList";
import { getData } from "../../lib/api";
import Head from "next/head";

export default function Basket(props) {
  let totalPrice = 0;
  const levering = 39;

  function totalAmount(item) {
    const price = item[0].price * item[1].amount.amount;
    totalPrice = totalPrice + price;
  }

  return (
    <>
      <Head>
        <title>{`${props.headerFooterData.generalSettings.title} | Indkøbskurv`}</title>
        <meta name="robots" content="noindex"></meta>
        <link rel="icon" type="image/png" sizez="180x180" href="./apple-touch-icon.ico"></link>
        <link rel="icon" type="image/png" sizez="32x32" href="./favicon32x32"></link>
        <link rel="icon" type="image/png" sizez="16x16" href="./favicon16x16"></link>
      </Head>
      <div className="p-4 md:p-0 md:grid lg:grid-cols-6 max-screen-w-2xl gap-x-4 mb-10">
        <h1 className="text-3xl font-serif col-span-6 mt-6 md:mt-10">Basket</h1>
        <div className="md:col-span-4 md:grid md:grid-flow-row gap-y-8 mt-10">
          <nav>
            <ul>
              {props.basket.map((item) => {
                const color = item[2];
                totalAmount(item);
                return <BasketList key={color.guid} data={item} />;
              })}
              <hr className="h-0.2 bg-black" />
            </ul>
          </nav>
        </div>
        <div className="col-span-2 mt-10 md:ml-6">
          <div className="p-10 bg-white ">
            <h2 className="text-2xl font-serif md:text-3xl col-span-2 mb-8">
              Check ud
            </h2>
            <div className="grid grid-cols-3 mt-10 gap-4">
              <h3 className="col-span-2">Ordreværdi</h3>
              <span className=" font-bold col-span-1">{totalPrice} DKK</span>
              <h3 className="col-span-2">Levering</h3>
              <span className=" font-bold col-span-1">
                {totalPrice >= 500 ? <>0 DKK</> : <>{levering} DKK</>}
              </span>
            </div>
            <hr className="h-0.2 bg-black mt-10" />
            <div className="grid grid-cols-3 mt-10 gap-4">
              <h3 className="col-span-2">Total</h3>
              <span className=" font-bold col-span-1">
                {totalPrice >= 500 ? (
                  <>{totalPrice} DKK</>
                ) : (
                  <>{levering + totalPrice} DKK</>
                )}
              </span>
            </div>
            <button className="mt-10 bg-btn text-white py-2 px-4 col-span-2 transition hover:bg-btn-hover">
              Fortsæt til betaling
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const headerFooterData = await getData();
  return {
    props: {
      headerFooterData
    }
  }
}