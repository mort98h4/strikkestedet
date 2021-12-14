import clsx from "clsx";

export default function BasketList(data) {
  const info = data.data[0];
  const amount = data.data[1].amount.amount;
  const color = data.data[2];

  return (
    <>
      <hr className="h-0.2 bg-black" />
      <li className="md:row-span-1 bg-white p-4 grid grid-cols-4">
        <img src={color.guid} alt="" width="100px" height="100px" />
        <div>
          <h3 className="font-bold">{info.title}</h3>
          <span className="text-black-70">
            Farve: <span>{color.title}</span>
          </span>
        </div>
        <div>
          <h3 className="font-bold">Antal</h3>
          <div className="flex flex-row h-10 gap-1">
            <button
              className={clsx(
                amount ? "text-white" : "",
                "inline bg-black-10 py-2 px-4"
              )}
              disabled
            >
              -
            </button>
            <div className="bg-black-10 py-2 px-4">
              <p className="">{amount}</p>
            </div>
            <button
              disabled
              className={clsx(
                amount ? "bg-black-10 text-white" : "",
                "py-2 px-4"
              )}
            >
              +
            </button>
          </div>
        </div>
        <div>
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
