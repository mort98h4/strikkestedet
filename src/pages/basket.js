import { useParams } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
import BasketList from "../components/basketList";

export default function Basket(props) {
  return (
    <>
      <div className="md:grid md:grid-cols-6 max-screen-w-2xl">
        <div className="md:col-span-4 md:grid md:grid-flow-row gap-y-8 mt-10">
          <h1 className="md:text-3xl">Basket</h1>
          <nav>
            <ul>
              {props.basket.map((item) => {
                const color = item[2];
                return <BasketList key={color.guid} data={item} />;
              })}
              <hr className="h-0.2 bg-black" />
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
