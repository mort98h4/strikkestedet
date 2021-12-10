// import { request } from "../../lib/datocms";
import Link from "next/link";
// import clsx from "clsx";

export default function Header(data) {
  return (
    <>
      <div className=" fixed w-full bg-black">
        <nav className="text-white w-full">
          <ul className="text-white grid grid-cols-6 gap-x-4 mx-auto">
            <li className="col-span-1 group">
              <div className="ml-20 p-2" onClick={ActiveLink()}>
                <Link href="/">Strikkestedet</Link>
              </div>
              <nav className="absolute w-full bg-gray-header">
                <ul className="text-black grid grid-cols-6 gap-4 mx-auto">
                  <li className=" ml-20 flex flex-row space-x-32 p-2">
                    <h1>subheader</h1>
                  </li>
                  <li className="flex flex-row space-x-32">
                    <h1>subheader</h1>
                  </li>
                  <li className="flex flex-row space-x-32">
                    <h1>subheader</h1>
                  </li>
                </ul>
              </nav>
            </li>
            <li className="col-span-1">
              <Link href="/products/garn">Produkter</Link>
            </li>
            <li className="col-span-1">
              <Link href="/">Lær at strikke</Link>
            </li>
            <li className="col-span-1">
              <Link href="/">Om os</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

function ActiveLink() {
//   console.log("isActive");
}

function SubHeader() {
  return (
    <>
      <div className=" fixed w-full bg-black">
        <nav className="text-white w-full">
          <ul className="text-white grid grid-cols-6 gap-x-4 mx-auto">
            <li className="col-span-1 group">
              <div className="ml-20 p-2 ">
                <Link href="/">Strikkestedet</Link>
              </div>
              <nav className="group-hover:opacity-100 opacity-0 absolute w-full bg-gray-header">
                <ul className="text-black grid grid-cols-6 gap-4 mx-auto">
                  <li className=" ml-20 flex flex-row space-x-32 p-2">
                    <h1>subheader</h1>
                  </li>
                  <li className="flex flex-row space-x-32">
                    <h1>subheader</h1>
                  </li>
                  <li className="flex flex-row space-x-32">
                    <h1>subheader</h1>
                  </li>
                </ul>
              </nav>
            </li>
            <li className="col-span-1">
              <Link href="/products/garn">Produkter</Link>
            </li>
            <li className="col-span-1">
              <Link href="/">Lær at strikke</Link>
            </li>
            <li className="col-span-1">
              <Link href="/">Om os</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
