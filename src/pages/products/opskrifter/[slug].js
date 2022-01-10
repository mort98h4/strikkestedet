import { getData, getKnittingPatterns, getTags } from "../../../../lib/api";
import Image from "next/image";
import Sizes from "../../../components/Sizes";
import clsx from "clsx";
import PatternInfo from "../../../components/PatternInfo";
import { useState } from "react";

function KnittingPattern(props) {
  const [amount, setAmount] = useState(0);

  const info = props.data.postBy.opskriftprodukt;
  const garn1 = props.data.postBy.antalgarn1;
  const garn2 = props.data.postBy.antalgarn2;
  const garn3 = props.data.postBy.antalgarn3;
  const garn4 = props.data.postBy.antalgarn4;

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

  return (
    <>
      <article className="md:grid md:grid-cols-6 text-sm">
        <section className="grid grid-cols-2 md:col-span-4 md:mt-10 md:grid-cols-4 md:gap-4">
          <div className="block col-span-1 md:col-span-2">
            <Image
              priority={true}
              layout="responsive"
              width="500"
              height="600"
              src={info.image2.guid}
              alt={info.image2.alt}
              className="object-cover object-bottom"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Image
              priority={true}
              layout="responsive"
              width="500"
              height="600"
              src={info.imageforlist.guid}
              alt={info.imageforlist.alt}
              className="object-cover object-bottom"
            />
          </div>
        </section>
        <div className="col-start-5 col-end-6">
          <aside className="md:fixed md:mr-4 bg-background z-[5] pl-10 pr-10 h-full max-w-[700px] overflow-scroll">
            <h1 className="font-serif mt-10 md:mt-10 text-3xl lg:text-5xl">
              {info.title}
            </h1>
            <p className="font-sans">{info.text}</p>
            <div className="flex justify-end">
              <span className="text-2xl md:text-3xl">
                {props.knittingPatternAmount.amount &&
                props.knittingPatternAmount.amount2
                  ? props.knittingPatternAmount.amount *
                      garn1.yarn[0].yarnproduct.price +
                    props.knittingPatternAmount.amount2 *
                      garn2.yarn2[0].yarnproduct.price +
                    50
                  : props.knittingPatternAmount.amount
                  ? props.knittingPatternAmount.amount *
                      garn1.yarn[0].yarnproduct.price +
                    50
                  : `fra: ${info.pris}`}
                DKK
              </span>
            </div>
            {/* antal*/}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {info.medudengarn ? (
                <div className="col-span-3 mt-4 md:mt-0">
                  <Sizes
                    props={{ garn1, garn2, garn3, garn4, info }}
                    setNewSize={props.setNewSize}
                  />
                </div>
              ) : null}
            </div>
            <div className="mt-6">
              <div className="flex flex-row gap-1">
                <button
                  className={clsx(
                    amount === 0 ? "text-black-40" : " hover:bg-gray-footer",
                    "inline bg-gray-input transition py-2 px-4"
                  )}
                  disabled={amount === 0}
                  onClick={() => clickedMinus()}
                >
                  -
                </button>
                <div className="bg-black-10 py-2 px-4">
                  <p className="">{amount}</p>
                </div>
                <button
                  className="inline bg-gray-input transition hover:bg-gray-footer py-2 px-4"
                  onClick={() => clickedPlus()}
                >
                  +
                </button>
                <button
                  className={clsx(
                    "bg-black-40 py-2 px-4 col-span-3 md:col-span-2 mt-6 md:mt-0 w-full"
                  )}
                  onClick={() => resetAmount()}
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-10  mb-10 md:mb-20">
              <div className="col-span-1">
                <span className="block font-bold">Fragt</span>
                <span className="block">Fri fragt ved køb over 500 DKK</span>
              </div>
              <div className="col-span-1">
                <span className="block font-bold">Returnering</span>
                <span className="block ">
                  Fuld returret de første 2 uger ved uåbnede produkter
                </span>
              </div>
              <div>
                <div className="max-w-[96px] max-h-[24px] relative">
                  <Image
                    layout="responsive"
                    width="96"
                    height="24"
                    className="w-24"
                    src="/trustpilot.svg"
                    alt="TrustPilot"
                  />
                </div>
                <div className="relative max-w-[96px] flex justify-center">
                  <Image
                    layout="fixed"
                    width="15"
                    height="15"
                    className="inline"
                    src="/review_star.svg"
                    alt="star"
                  />
                  <Image
                    layout="fixed"
                    width="15"
                    height="15"
                    className="inline"
                    src="/review_star.svg"
                    alt="star"
                  />
                  <Image
                    layout="fixed"
                    width="15"
                    height="15"
                    className="inline"
                    src="/review_star.svg"
                    alt="star"
                  />
                  <Image
                    layout="fixed"
                    width="15"
                    height="15"
                    className="inline"
                    src="/review_star.svg"
                    alt="star"
                  />
                  <Image
                    layout="fixed"
                    width="15"
                    height="15"
                    className="inline"
                    src="/review_star.svg"
                    alt="star"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
        <PatternInfo product={info} garn1={garn1} garn2={garn2} />
      </article>
    </>
  );
}

export default KnittingPattern;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "jenny-sweater" } },
      { params: { slug: "ballon-jakke" } },
      { params: { slug: "penny-gloves" } },
      { params: { slug: "stockholm-hue" } },
      { params: { slug: "strukturgenser-herre-sweater" } },
      { params: { slug: "ingen-dikkedarer-sweater" } },
      { params: { slug: "stockholm" } },
      { params: { slug: "albagenser" } },
      { params: { slug: "sunday-sweater" } },
      { params: { slug: "nr-4-sloeyfe" } },
      { params: { slug: "nr-5-sommerjakke" } },
      { params: { slug: "kumulus-top" } },
      { params: { slug: "sandnes-nr-2-sommerstriper" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getKnittingPatterns(params.slug);
  const headerFooterData = await getData();
  const tags = await getTags();

  return {
    props: {
      data,
      headerFooterData,
      tags,
    },
  };
}
