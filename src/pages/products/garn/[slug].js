import { getYarnProduct } from "../../../../lib/api";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Arrow } from "../../../components/arrow";

function Product(props) {
  const [amount, setAmount] = useState(0);
  const [colorNav, setColorNav] = useState(false);
  const [infoNav, setInfoNav] = useState(false);
  const [basket, setBasket] = useState([]);
  const [chosenColor, setChosenColor] = useState("");
  const [colorBtn, setColorBtn] = useState(false);

  const info = props.data.postBy.yarnproduct;
  const colors = props.data.postBy.color;
  const details = props.data.postBy;

  function ColorBtn() {
    setColorBtn((btn) => {
      if (btn) {
        btn = false;
        return btn;
      } else {
        btn = true;
        return btn;
      }
    });
  }

  function showColor() {
    setColorNav((color) => {
      if (color) {
        color = false;
        return color;
      } else {
        setInfoNav((info) => {
          info = false;
          return info;
        });
        color = true;
        return color;
      }
    });
  }

  function showInfo() {
    setInfoNav((info) => {
      if (info) {
        info = false;
        return info;
      } else {
        setColorNav((color) => {
          color = false;
          return color;
        });
        info = true;
        return info;
      }
    });
  }

  function clickedPlus() {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }

  function clickedMinus() {
    setAmount((prevState) => {
      return prevState - 1;
    });
  }

  function resetAmount() {
    setAmount((prevState) => {
      return prevState * 0;
    });
  }

  function addToBasket(info, amount) {
    console.log(info, amount);
  }

  const colorArray = [
    colors.color1,
    colors.color2,
    colors.color3,
    colors.color4,
    colors.color5,
    colors.color6,
    colors.color7,
    colors.color8,
    colors.color9,
    colors.color10,
    colors.color11,
    colors.color12,
    colors.color13,
    colors.color14,
    colors.color15,
    colors.color16,
    colors.color17,
    colors.color18,
    colors.color19,
    colors.color20,
    colors.color21,
    colors.color22,
    colors.color23,
    colors.color24,
    colors.color25,
    colors.color26,
    colors.color27,
    colors.color28,
    colors.color29,
    colors.color30,
    colors.color31,
    colors.color32,
    colors.color33,
    colors.color34,
    colors.color35,
    colors.color36,
    colors.color37,
    colors.color38,
    colors.color39,
    colors.color40,
  ];
  let usedColors = [];
  colorArray.forEach((color) => {
    if (color) {
      usedColors.push(color);
    }
  });

  return (
    <>
      <article className="md:grid md:grid-cols-6 text-sm">
        <div className="col-start-5 col-end-6">
          <aside className="fixed mr-4 bg-background z-5 pl-10 pr-10 h-full max-w-[700px]">
            <h1 className=" font-serif mt-4 text-3xl lg:text-5xl">
              {info.title}
            </h1>
            <p className="font-sans">{info.text}</p>
            <div className="flex justify-end">
              <span className="md:text-3xl">{info.price} DKK</span>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold">Antal</h3>
                  <div className="flex flex-row gap-1">
                    <button
                      className={clsx(
                        amount === 0 ? "text-black-40" : "",
                        "inline bg-black-10 py-2 px-4"
                      )}
                      disabled={amount === 0}
                      onClick={clickedMinus}
                    >
                      -
                    </button>
                    <div className="bg-black-10 py-2 px-4">
                      <p className="">{amount}</p>
                    </div>
                    <button
                      className="inline bg-black-10 py-2 px-4"
                      onClick={() => {
                        clickedPlus();
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-2 ">
                  <h3 className="font-bold"> Vælg farve</h3>
                  <button
                    className="bg-gray-input py-2 px-4 hover:bg-gray-footer w-full flex flex-row justify-between w-[300px]"
                    onClick={() => {
                      ColorBtn();
                    }}
                  >
                    Vælg farveVælg farve
                    <div className="pt-1">
                      <Arrow></Arrow>
                    </div>
                  </button>
                  {colorBtn ? (
                    <div className="flex flex-col ">
                      <div className="absolute w-[300px]">
                        {usedColors.map((color) => {
                          console.log(color.description);
                          return (
                            <>
                              <hr className="h-0.1 bg-black" />
                              <button
                                className=" bg-gray-input py-2 px-4 hover:bg-gray-footer w-full"
                                key={color.guid}
                              >
                                {color.title} {color.description}
                              </button>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
                <button
                  onClick={() => {
                    addToBasket(info, amount);
                    resetAmount();
                  }}
                  disabled={amount === 0}
                  className={clsx(
                    amount === 0
                      ? "bg-black-20 text-white-60"
                      : "bg-black-70 text-white hover:bg-black",
                    "py-2 px-4 col-span-2"
                  )}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <span className="block font-bold">Fragt</span>
                <span className="block">Fri fragt ved køb over 500DKK</span>
              </div>
              <div className="col-span-1">
                <span className="block font-bold">Returnering</span>
                <span className="block ">
                  Fuld returret de første 2 uger ved uåbnede produkter
                </span>
              </div>
              <div>
                <img
                  className="w-24 "
                  src="./../../trustpilot.svg"
                  alt="TrustPilot"
                ></img>
                <img
                  className="inline"
                  width="15px"
                  src="./../../review_star.svg"
                  alt="star"
                />
                <img
                  className="inline"
                  width="15px"
                  src="./../../review_star.svg"
                  alt="star"
                />
                <img
                  className="inline"
                  width="15px"
                  src="./../../review_star.svg"
                  alt="star"
                />
                <img
                  className="inline"
                  width="15px"
                  src="./../../review_star.svg"
                  alt="star"
                />
                <img
                  className="inline"
                  width="15px"
                  src="./../../review_star.svg"
                  alt="star"
                />
              </div>
            </div>
          </aside>
        </div>
        <div className="md:col-end-5 md:col-span-4 mt-4">
          <section className="md:grid md:grid-cols-4 md:gap-4 ">
            <div className="md:col-span-2">
              <img src={info.image.guid} alt="" />
            </div>
            <div className="md:col-span-2">
              <img src={info.image.guid} alt="" />
            </div>
          </section>
          <section className="md:grid md:grid-cols-6 gap-x-4 px-20 py-14 mt-4 bg-white ">
            <nav className="col-span-6">
              <ul className="md:grid md:grid-cols-4">
                <li className="col-span-1">
                  <button
                    className={clsx(
                      colorNav === true
                        ? "text-black-70 hover:text-black"
                        : "text-black-40 hover:text-black-70"
                    )}
                    onClick={() => showColor()}
                  >
                    Farvekort
                  </button>
                </li>
                <li className="col-span-1">
                  <button
                    className={clsx(
                      infoNav === true
                        ? "text-black-70 hover:text-black"
                        : "text-black-40 hover:text-black-70"
                    )}
                    onClick={() => showInfo()}
                  >
                    ProduktInformation
                  </button>
                </li>
              </ul>
            </nav>
            <hr className="h-0.2 bg-black col-span-6" />
            <div className="col-span-6">
              <div className="md:grid md:grid-cols-4 mb-10">
                {colorNav === true && infoNav === false ? (
                  <div className="md:col-span-1">
                    <Arrow />
                  </div>
                ) : null}

                {infoNav === true && colorNav === false ? (
                  <div className="md:col-span-1 md:col-start-2">
                    <Arrow />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="md:col-span-6 md:grid md:grid-cols-6 gap-x-4 gap-y-10">
              {colorNav === true ? (
                <div className="md:max-h-[400px] overflow-y-scroll md:col-span-6 md:grid md:grid-cols-6 gap-x-4 gap-y-10 ">
                  {usedColors.map((color) => {
                    return (
                      <div key={color.alt} className="md:col-span-1">
                        <img src={color.guid} alt={color.alt} />
                        <h3>{color.title}</h3>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              {infoNav === true ? (
                <>
                  <div className="md:col-span-2 ">
                    <h3 className="font-bold">Vejledende Pind</h3>
                    <span className="text-black-60 ">
                      {details.vejledende_pind.pind}
                    </span>
                  </div>
                  <div className="md:col-span-2 ">
                    <h3 className="font-bold">Vaskeanvisning</h3>
                    <span className="text-black-60">
                      {details.vaskeanvisning.vaskeanvisning}
                    </span>
                  </div>
                  <div className="md:col-span-2 ">
                    <h3 className="font-bold">Garn/Fiber</h3>
                    <ul>
                      {details.materiale.garn1 ? (
                        <li>
                          <span className="text-black-60">
                            {details.materiale.garn1}
                          </span>
                        </li>
                      ) : null}
                      {details.materiale.garn2 ? (
                        <li>
                          <span className="text-black-60">
                            {details.materiale.garn2}
                          </span>
                        </li>
                      ) : null}
                      {details.materiale.garn3 ? (
                        <li>
                          <span className="text-black-60">
                            {details.materiale.garn3}
                          </span>
                        </li>
                      ) : null}
                      {details.materiale.garn4 ? (
                        <li>
                          <span className="text-black-60">
                            {details.materiale.garn4}
                          </span>
                        </li>
                      ) : null}
                      {details.materiale.garn5 ? (
                        <li>
                          <span className="text-black-60">
                            {details.materiale.garn5}
                          </span>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </>
              ) : null}
              {infoNav === true ? (
                <div className="md:col-span-2 ">
                  <h3 className="font-bold">Strikkefasthed</h3>
                  <span className="text-black-60">
                    {details.stikkefasthed.strikkefasthed}
                  </span>
                </div>
              ) : null}

              {infoNav === true ? (
                <div className="md:col-span-2 ">
                  <h3 className="font-bold">Løbelængde</h3>
                  <span className="text-black-60">
                    {details.loebelaengde.lobelaengde}
                  </span>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "permin-rigmor" } },
      { params: { slug: "filcolana-tilia" } },
      { params: { slug: "filcolana-arwetta" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getYarnProduct(params.slug);

  return {
    props: {
      data,
    },
  };
}
