import clsx from "clsx";
import Image from "next/image";
import { Arrow } from "./arrow";
import { useState } from "react";

export default function PatternInfo(props) {
  const [infoNav, setInfoNav] = useState(true);
  const [sizeNav, setSizeNav] = useState(false);
  const [productsNav, setProductsNav] = useState(false);

  function showSizeGuide() {
    setSizeNav((size) => {
      if (size) {
        size = false;
        return size;
      } else {
        setInfoNav((info) => {
          info = false;
          return info;
        });
        setProductsNav((product) => {
          product = false;
          return product;
        });
        size = true;
        return size;
      }
    });
  }

  function showInfo() {
    setInfoNav((info) => {
      if (info) {
        info = false;
        return info;
      } else {
        setSizeNav((color) => {
          color = false;
          return color;
        });
        setProductsNav((product) => {
          product = false;
          return product;
        });
        info = true;
        return info;
      }
    });
  }

  function showProducts() {
    setProductsNav((info) => {
      if (info) {
        info = false;
        return info;
      } else {
        setSizeNav((color) => {
          color = false;
          return color;
        });
        setInfoNav((info) => {
          info = false;
          return info;
        });
        info = true;
        return info;
      }
    });
  }
  return (
    <>
      <div className="md:col-end-5 md:col-span-4 mt-4">
        <section className="md:grid md:grid-cols-6 gap-x-4 p-10 md:px-20 md:py-14 mt-4 bg-white ">
          <nav className="col-span-6">
            <ul className="grid grid-cols-4 gap-4 md:gap-0">
              <li className="col-span-2 md:col-span-1">
                <button
                  className={clsx("text-black-70 hover:text-black")}
                  onClick={() => showInfo()}
                >
                  Produktinformation
                </button>
              </li>
              <li className="col-span-2 md:col-span-1">
                <button
                  className={clsx("text-black-70 hover:text-black")}
                  onClick={() => showSizeGuide()}
                >
                  Størrelsesguide
                </button>
              </li>
              <li className="col-span-2 md:col-span-1">
                <button
                  className={clsx("text-black-70 hover:text-black")}
                  onClick={() => showProducts()}
                >
                  Produkter til opskriften
                </button>
              </li>
            </ul>
          </nav>
          <hr className="h-0.2 bg-black col-span-6" />
          <div className="md:col-span-6">
            <div className="grid grid-cols-4 gap-4 md:gap-0 mb-10">
              {infoNav ? (
                <div className="col-span-2 md:col-span-1">
                  <Arrow />
                </div>
              ) : null}
              {sizeNav ? (
                <div className="col-span-2 md:col-span-1 col-start-3 md:col-start-2">
                  <Arrow />
                </div>
              ) : null}

              {productsNav ? (
                <div className="col-span-2 md:col-span-1 md:col-start-3">
                  <Arrow />
                </div>
              ) : null}
            </div>
          </div>
          <nav className="md:col-span-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10">
            {infoNav ? <Info props={props} /> : null}
            {productsNav ? <ProductsForPattern props={props} /> : null}
          </nav>
        </section>
      </div>
    </>
  );
}

function Info({ props }) {
  return (
    <>
      <div className="md:col-span-2 flex">
        <div className="inline-block w-full max-w-[40px] max-h-[40px] relative mr-2">
          <Image
            width="40"
            height="40"
            layout="responsive"
            src="/pinde.svg"
            alt="Vejledende pinde str. ikon"
          />
        </div>
        <div className="inline-block">
          <h3 className="font-bold">Vejledende Pind</h3>

          <span className="text-black-60 block">
            {props.product.vejledendePinde.pind1}
          </span>
          <span className="text-black-60 block">
            {props.product.vejledendePinde.pind2}
          </span>
          <span className="text-black-60 block">
            {props.product.vejledendePinde.pind3}
          </span>
          <span className="text-black-60 block">
            {props.product.vejledendePinde.pind4}
          </span>
        </div>
      </div>
      <div className="md:col-span-2 flex">
        <div className="inline-block w-full max-w-[40px] max-h-[40px] relative mr-2">
          <Image
            width="40"
            height="40"
            layout="responsive"
            src="/fibre.svg"
            alt="Fibre ikon"
          />
        </div>
        <div className="inline-block">
          <h3 className="font-bold">Garn/Fiber</h3>
          <ul>
            {props.garn1.yarn ? (
              <li className="mt-2">
                <span>
                  <span className="block">{props.garn1.yarn[0].title} :</span>
                  {props.garn1.yarn[0].materiale.garn1 ? (
                    <span className="text-black-60">
                      {props.garn1.yarn[0].materiale.garn1}
                    </span>
                  ) : null}

                  {props.garn1.yarn[0].materiale.garn2 ? (
                    <span className="text-black-60">
                      , {props.garn1.yarn[0].materiale.garn2}
                    </span>
                  ) : null}

                  {props.garn1.yarn[0].materiale.garn3 ? (
                    <span className="text-black-60">
                      , {props.garn1.yarn[0].materiale.garn3}
                    </span>
                  ) : null}

                  {props.garn1.yarn[0].materiale.garn4 ? (
                    <span className="text-black-60">
                      , {props.garn1.yarn[0].materiale.garn4}
                    </span>
                  ) : null}

                  {props.garn1.yarn[0].materiale.garn5 ? (
                    <span className="text-black-60">
                      , {props.garn1.yarn[0].materiale.garn5}
                    </span>
                  ) : null}
                </span>
              </li>
            ) : null}
            {props.garn2.yarn2 ? (
              <li className="mt-4">
                <span>
                  <span className="block">{props.garn2.yarn2[0].title} :</span>
                  {props.garn2.yarn2[0].materiale.garn1 ? (
                    <span className="text-black-60">
                      {props.garn2.yarn2[0].materiale.garn1}
                    </span>
                  ) : null}

                  {props.garn2.yarn2[0].materiale.garn2 ? (
                    <span className="text-black-60">
                      , {props.garn2.yarn2[0].materiale.garn2}
                    </span>
                  ) : null}

                  {props.garn2.yarn2[0].materiale.garn3 ? (
                    <span className="text-black-60">
                      , {props.garn2.yarn2[0].materiale.garn3}
                    </span>
                  ) : null}

                  {props.garn2.yarn2[0].materiale.garn4 ? (
                    <span className="text-black-60">
                      , {props.garn2.yarn2[0].materiale.garn4}
                    </span>
                  ) : null}

                  {props.garn2.yarn2[0].materiale.garn5 ? (
                    <span className="text-black-60">
                      , {props.garn2.yarn2[0].materiale.garn5}
                    </span>
                  ) : null}
                </span>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="md:col-span-2 flex">
        <div className="inline-block w-full max-w-[40px] max-h-[40px] relative mr-2">
          <Image
            width="40"
            height="40"
            layout="responsive"
            src="/svaerhedsgrad.svg"
            alt="Fibre ikon"
          />
        </div>
        <div className="inline-block">
          <h3 className="font-bold">Sværhedsgrad</h3>
          <ul>
            <li className="flex flex-row opacity-60">
              {props.product.svaerhedsgrad.title}
              <span className="flex flex-row">
                {props.product.svaerhedsgrad.stjerne1 ? (
                  <div className="w-4 mt-1">
                    <Image
                      width="5"
                      height="5"
                      layout="responsive"
                      src="/review_star.svg"
                      alt="Fibre ikon"
                    />
                  </div>
                ) : null}
                {props.product.svaerhedsgrad.stjerne2 ? (
                  <div className="w-4 mt-1">
                    <Image
                      width="5"
                      height="5"
                      layout="responsive"
                      src="/review_star.svg"
                      alt="Fibre ikon"
                    />
                  </div>
                ) : null}
                {props.product.svaerhedsgrad.stjerne3 ? (
                  <div className="w-4 mt-1">
                    <Image
                      width="5"
                      height="5"
                      layout="responsive"
                      src="/review_star.svg"
                      alt="Fibre ikon"
                    />
                  </div>
                ) : null}
                {props.product.svaerhedsgrad.stjerne4 ? (
                  <div className="w-4 mt-1">
                    <Image
                      width="5"
                      height="5"
                      layout="responsive"
                      src="/review_star.svg"
                      alt="Fibre ikon"
                    />
                  </div>
                ) : null}
                {props.product.svaerhedsgrad.stjerne5 ? (
                  <div className="w-4 mt-1">
                    <Image
                      width="5"
                      height="5"
                      layout="responsive"
                      src="/review_star.svg"
                      alt="Fibre ikon"
                    />
                  </div>
                ) : null}
                {props.product.svaerhedsgrad.stjerne6 ? (
                  <div className="w-4 mt-1">
                    <Image
                      width="5"
                      height="5"
                      layout="responsive"
                      src="/review_star.svg"
                      alt="Fibre ikon"
                    />
                  </div>
                ) : null}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function ProductsForPattern(props) {
  return (
    <>
      <h2 className="col-span-2 font-bold -mb-10">
        Produkter som bruges til denne opskrift
      </h2>
      <ul className="max-h-[350px] md:max-h-[400px] overflow-y-scroll col-span-2 sm:col-span-4 lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-10 ">
        {props.props.product.yarnforthisproduct.map((item) => {
          return (
            <li key={item.title}>
              <a href={`/products/garn/${item.slug}`}>
                <article className="product-container">
                  <div className="image-container w-full">
                    <Image
                      src={item.yarnproduct.image.guid}
                      alt={item.yarnproduct.image.altText}
                      sizes="20vw"
                      layout="responsive"
                      objectFit="cover"
                      width="115"
                      height="200"
                      className="product-image"
                    />
                  </div>
                  <h3>{item.title}</h3>
                </article>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
