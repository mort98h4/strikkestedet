import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Arrow } from "./arrow";

export default function Sizes(props) {
  const [size, setSize] = useState({});
  const [garn1Btn, setgarn1Btn] = useState(false);
  const [garn2Btn, setgarn2Btn] = useState(false);

  console.log(props);
  let OneSize;
  let XSmall;
  let Small;
  let Medium;
  let Large;
  let XLarge;
  let XXLarge;

  if (props.props.garn1 && props.props.garn2) {
    OneSize = {
      size: "OneSize",
      amount: props.props.garn1.onesize,
      amount2: props.props.garn2.onesize2,
    };
    XSmall = {
      size: "XS",
      amount: props.props.garn1.xsmall,
      amount2: props.props.garn2.xsmall2,
    };
    Small = {
      size: "S",
      amount: props.props.garn1.small,
      amount2: props.props.garn2.small2,
    };
    Medium = {
      size: "M",
      amount: props.props.garn1.medium,
      amount2: props.props.garn2.medium2,
    };
    Large = {
      size: "L",
      amount: props.props.garn1.large,
      amount2: props.props.garn2.large2,
    };
    XLarge = {
      size: "XL",
      amount: props.props.garn1.xlarge,
      amount2: props.props.garn2.xlarge2,
    };
    XXLarge = {
      size: "XXL",
      amount: props.props.garn1.xxlarge,
      amount2: props.props.garn2.xxlarge2,
    };
  } else if (props.props.garn1 && !props.props.garn2) {
    OneSize = {
      size: "OneSize",
      amount: props.props.garn1.onesize,
    };
    XSmall = {
      size: "XS",
      amount: props.props.garn1.xsmall,
    };
    Small = {
      size: "S",
      amount: props.props.garn1.small,
    };
    Medium = {
      size: "M",
      amount: props.props.garn1.medium,
    };
    Large = {
      size: "L",
      amount: props.props.garn1.large,
    };
    XLarge = {
      size: "XL",
      amount: props.props.garn1.xlarge,
    };
    XXLarge = {
      size: "XXL",
      amount: props.props.garn1.xxlarge,
    };
  }
  console.log(size);
  return (
    <div className="space-x-1">
      <h3 className="font-bold">Størrelse</h3>
      {props.props.garn1.onesize ? (
        <button
          className={clsx(
            size.size === "OneSize" ? "bg-black-40" : "hover:bg-black-40",
            "inline bg-gray-input transition py-2 px-4"
          )}
          onClick={() => {
            setSize(OneSize);
            props.setNewSize(OneSize);
          }}
        >
          Onesize
        </button>
      ) : null}
      {props.props.garn1.xsmall ? (
        <button
          className={clsx(
            size.size === "XS" ? "bg-black-40" : "hover:bg-black-40",
            "inline bg-gray-input transition py-2 px-4"
          )}
          onClick={() => {
            setSize(XSmall);
            props.setNewSize(XSmall);
          }}
        >
          {props.props.garn1.xsmall ? `${XSmall.size}` : null}
        </button>
      ) : null}

      {props.props.garn1.small ? (
        <button
          className={clsx(
            size.size === "S" ? "bg-black-40" : "hover:bg-black-40",
            "inline bg-gray-input transition py-2 px-4"
          )}
          onClick={() => {
            setSize(Small);
            props.setNewSize(Small);
          }}
        >
          {props.props.garn1.small ? `${Small.size}` : null}
        </button>
      ) : null}

      {props.props.garn1.medium ? (
        <button
          className={clsx(
            size.size === "M" ? "bg-black-40" : "hover:bg-black-40",
            "inline bg-gray-input transition py-2 px-4"
          )}
          onClick={() => {
            setSize(Medium);
            props.setNewSize(Medium);
          }}
        >
          {props.props.garn1.medium ? `${Medium.size}` : null}
        </button>
      ) : null}

      {props.props.garn1.large ? (
        <button
          className={clsx(
            size.size === "L" ? "bg-black-40" : "hover:bg-black-40",
            "inline bg-gray-input transition py-2 px-4 "
          )}
          onClick={() => {
            setSize(Large);
            props.setNewSize(Large);
          }}
        >
          {props.props.garn1.large ? `${Large.size}` : null}
        </button>
      ) : null}

      {props.props.garn1.xlarge ? (
        <button
          className={clsx(
            size.size === "XL" ? "bg-black-40" : "hover:bg-black-40",
            "inline bg-gray-input transition py-2 px-4 "
          )}
          onClick={() => {
            setSize(XLarge);
            props.setNewSize(XLarge);
          }}
        >
          {props.props.garn1.xlarge ? `${XLarge.size}` : null}
        </button>
      ) : null}

      {props.props.garn1.xxlarge ? (
        <button
          className={clsx(
            size.size === "XXL" ? "bg-black-40" : "hover:bg-black-40",
            "inline bg-gray-input transition py-2 px-4"
          )}
          onClick={() => {
            setSize(XXLarge);
            props.setNewSize(XXLarge);
          }}
        >
          {props.props.garn1.xxlarge ? `${XXLarge.size}` : null}
        </button>
      ) : null}

      <div className="mt-10">
        <div className="flex flex-row">
          <h3 className="font-bold mr-10">Antal</h3>
          <h3 className="font-bold ">Garn</h3>
        </div>

        <Garn1
          size={size}
          garn1={props.props.garn1}
          setgarn1Btn={setgarn1Btn}
          garn1Btn={garn1Btn}
          setgarn2Btn={setgarn2Btn}
        />

        {props.props.garn2.active ? (
          <Gran2
            size={size}
            garn2={props.props.garn2}
            setgarn2Btn={setgarn2Btn}
            garn2Btn={garn2Btn}
            setgarn1Btn={setgarn1Btn}
          />
        ) : null}
      </div>
    </div>
  );
}

function Garn1({ size, garn1, setgarn1Btn, garn1Btn, setgarn2Btn }) {
  console.log(size);
  const [color, setColor] = useState([]);
  const colors1 = garn1.yarn[0].color;
  const colorArray1 = [
    colors1.color1,
    colors1.color2,
    colors1.color3,
    colors1.color4,
    colors1.color5,
    colors1.color6,
    colors1.color7,
    colors1.color8,
    colors1.color9,
    colors1.color10,
    colors1.color11,
    colors1.color12,
    colors1.color13,
    colors1.color14,
    colors1.color15,
    colors1.color16,
    colors1.color17,
    colors1.color18,
    colors1.color19,
    colors1.color20,
    colors1.color21,
    colors1.color22,
    colors1.color23,
    colors1.color24,
    colors1.color25,
    colors1.color26,
    colors1.color27,
    colors1.color28,
    colors1.color29,
    colors1.color30,
    colors1.color31,
    colors1.color32,
    colors1.color33,
    colors1.color34,
    colors1.color35,
    colors1.color36,
    colors1.color37,
    colors1.color38,
    colors1.color39,
    colors1.color40,
  ];
  const usedColors = [];
  colorArray1.forEach((color) => {
    if (color) {
      usedColors.push(color);
    }
  });

  function Garn1Btn() {
    setgarn2Btn(false);
    setgarn1Btn((btn) => {
      if (btn) {
        btn = false;
        return btn;
      } else {
        btn = true;
        return btn;
      }
    });
  }
  return (
    <>
      <div className="flex flex-row mt-2 mb-4">
        <button className="inline bg-black-40 transition py-2 px-4 mr-8 ">
          {size.amount ? size.amount : 0}
        </button>
        <div className="w-full lg:w-[300px] relative">
          <button
            className={clsx(
              size.amount ? "hover:bg-gray-footer" : "text-black-60",
              "bg-gray-input py-2 px-4 transition  w-full flex flex-row justify-between"
            )}
            disabled={!size.amount}
            onClick={() => {
              Garn1Btn();
            }}
          >
            {color.length === 0 ? (
              <span>Vælg en farve</span>
            ) : (
              <span>{color[0].title}</span>
            )}

            <div className={clsx(size.amount ? "" : "opacity-40", "pt-1")}>
              <Arrow rotate={garn1Btn}></Arrow>
            </div>
          </button>
          <div
            className={
              "absolute w-full flex flex-col transition-all " +
              (garn1Btn
                ? "max-h-48 overflow-scroll"
                : "max-h-0 overflow-hidden")
            }
          >
            <div className="w-full z-[5]">
              {usedColors.map((color) => {
                return (
                  <div key={color.title} className="relative">
                    <hr className="h-0.1 bg-black" />
                    <button
                      className=" bg-gray-input py-2 px-4 transition hover:bg-gray-footer w-full"
                      onClick={() => {
                        setColor([color, size.amount]);
                        Garn1Btn();
                      }}
                    >
                      <div className="flex flex-row items-center">
                        <div className="relative block w-[30px] h-[30px] mr-2">
                          <Image
                            layout="responsive"
                            width="30"
                            height="30"
                            className="mr-10 object-cover"
                            src={color.guid}
                            alt={color.alt}
                          />
                        </div>
                        {color.title}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Gran2({ size, garn2, setgarn2Btn, garn2Btn, setgarn1Btn }) {
  const [color, setColor] = useState([]);
  //garn 2
  const colors2 = garn2.yarn2[0].color;
  const colorArray2 = [
    colors2.color1,
    colors2.color2,
    colors2.color3,
    colors2.color4,
    colors2.color5,
    colors2.color6,
    colors2.color7,
    colors2.color8,
    colors2.color9,
    colors2.color10,
    colors2.color11,
    colors2.color12,
    colors2.color13,
    colors2.color14,
    colors2.color15,
    colors2.color16,
    colors2.color17,
    colors2.color18,
    colors2.color19,
    colors2.color20,
    colors2.color21,
    colors2.color22,
    colors2.color23,
    colors2.color24,
    colors2.color25,
    colors2.color26,
    colors2.color27,
    colors2.color28,
    colors2.color29,
    colors2.color30,
    colors2.color31,
    colors2.color32,
    colors2.color33,
    colors2.color34,
    colors2.color35,
    colors2.color36,
    colors2.color37,
    colors2.color38,
    colors2.color39,
    colors2.color40,
  ];
  const usedColors2 = [];
  colorArray2.forEach((color) => {
    if (color) {
      usedColors2.push(color);
    }
  });

  function Garn2Btn() {
    setgarn1Btn(false);
    setgarn2Btn((btn) => {
      if (btn) {
        btn = false;
        return btn;
      } else {
        btn = true;
        return btn;
      }
    });
  }
  return (
    <>
      <div className="flex flex-row mt-2 mb-4">
        <button className="inline bg-black-40 transition py-2 px-4 mr-8">
          {size.amount2 ? size.amount2 : 0}
        </button>
        <div className="flex flex-row">
          <div className="w-full lg:w-[300px] relative">
            <button
              className={clsx(
                size.amount2 ? "hover:bg-gray-footer" : "text-black-60",
                "bg-gray-input py-2 px-4 transition  w-full flex flex-row justify-between"
              )}
              disabled={!size.amount2}
              onClick={() => {
                Garn2Btn();
              }}
            >
              {color.length === 0 ? (
                <span>Vælg en farve</span>
              ) : (
                <span>{color[0].title}</span>
              )}

              <div className={clsx(size.amount2 ? "" : "opacity-40", "pt-1")}>
                <Arrow rotate={garn2Btn}></Arrow>
              </div>
            </button>
          </div>

          <div
            className={
              "absolute w-full flex flex-col transition-all " +
              (garn2Btn
                ? "max-h-48 overflow-scroll"
                : "max-h-0 overflow-hidden")
            }
          >
            <div className="w-full z-[5]">
              {usedColors2.map((color) => {
                return (
                  <div key={color.title} className="relative">
                    <hr className="h-0.1 bg-black" />
                    <button
                      className=" bg-gray-input py-2 px-4 transition hover:bg-gray-footer w-full"
                      onClick={() => {
                        setColor([color, size.amount2]);
                        Garn2Btn();
                      }}
                    >
                      <div className="flex flex-row items-center">
                        <div className="relative block w-[30px] h-[30px] mr-2">
                          <Image
                            layout="responsive"
                            width="30"
                            height="30"
                            className="mr-10 object-cover"
                            src={color.guid}
                            alt={color.alt}
                          />
                        </div>
                        {color.title}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
