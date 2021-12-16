import clsx from "clsx";
import Image from 'next/image';

export default function BasketList(data) {
  const info = data.data[0];
  const amount = data.data[1].amount.amount;
  const color = data.data[2];

  return (
    <>
      <hr className="h-0.2 bg-black" />
      <li className="row-span-1 grid-cols-2 gap-y-10 lg:gap-y-0 md:bg-white p-4 grid lg:grid-cols-4 lg:gap-4">
        <div className="col-span-2 flex">
          <div className="block relative w-full max-w-[100px]">
          <Image src={color.guid} alt="Valgt produkt" width="50" height="50" layout="responsive"/>
        </div>
        
        <div className="ml-4 self-center">
          <h3 className="font-bold">{info.title}</h3>
          <span className="text-black-70">
            Farve: <span>{color.title}</span>
          </span>
        </div>
        </div>
        
        <div className="self-center">
          <h3 className="font-bold">Antal</h3>
          <div className="flex flex-row h-10 gap-1">
            <button
              className={clsx(
                amount ? "text-white" : "",
                "inline bg-gray-input py-2 px-4 transition hover:text-black hover:bg-gray-footer cursor-pointer"
              )}
              disabled
            >
              -
            </button>
            <div className="bg-gray-input py-2 px-4">
              <p className="">{amount}</p>
            </div>
            <button
              disabled
              className={clsx(
                amount ? "bg-gray-input text-white" : "",
                "py-2 px-4 transition hover:text-black hover:bg-gray-footer cursor-pointer"
              )}
            >
              +
            </button>
          </div>
        </div>
        <div className="self-center">
          <h3 className="font-bold">Pris</h3>
          <span className="text-black-70 block">
            Stk: <span className="ml-6">{info.price} DKK</span>
          </span>
          <span className="text-black-70 block">
            Tota: <span className="ml-6">{amount * info.price} DKK</span>{" "}
          </span>
        </div>
      </li>
    </>
  );
}
