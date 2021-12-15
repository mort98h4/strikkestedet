import { getYarnPage, getYarnProducts, getData } from "../../../../lib/api";
import { getTags } from "../../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Arrow } from "../../../components/arrow";

export default function Garn(props) {
  const [filteredList, setFilteredList] = useState(props.newData);
  const [brandFilter, setBrandfilter] = useState(true);
  const [fiberFilter, setFiberfilter] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  const tags = props.tags.tags;
  const usedTagsBrand = [];
  const usedTagsMaterial = [];

  tags.nodes.map((tag) => {
    if (
      tag.slug === "baby-alpakka" ||
      tag.slug === "bomuld" ||
      tag.slug === "boerstet-alpakka" ||
      tag.slug === "fin-merinould" ||
      tag.slug === "hoer" ||
      tag.slug === "merinould" ||
      tag.slug === "mohair" ||
      tag.slug === "mulberry-silke" ||
      tag.slug === "nylon" ||
      tag.slug === "silke" ||
      tag.slug === "super-kid-mohair" ||
      tag.slug === "uld" ||
      tag.slug === "uld-superwash" ||
      tag.slug === "viskose"
    ) {
      usedTagsMaterial.push(tag);
    }
  });

  tags.nodes.map((tag) => {
    if (
      tag.id === "dGVybToxOA==" ||
      tag.id === "dGVybToxNw==" ||
      tag.id === "dGVybToxNg==" ||
      tag.id === "dGVybToxNQ=="
    ) {
      usedTagsBrand.push(tag);
    }
  });

  return (
    <>
      <div className="md:grid md:grid-cols-6 md:gap-4 mb-32 mt-4 p-4 2xl:p-0 md:mt-16">
        <div className="md:hidden">
          <h1 className="font-serif text-5xl mb-4">Garn</h1>
          <p className="text-black-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            iaculis ultrices tortor at tempus. Sed est lacus, consectetur a mi
            quis, sodales cursus quam. Ut sit amet egestas lectus. Pellentesque
            laoreet velit porttitor dictum hendrerit. Ut sit amet arcu sed nulla
            euismod fermentum. Vestibulum elit nulla, auctor vel volutpat id,
            venenatis nec urna.
          </p>
        </div>
        <aside className=" md:col-span-2 md:pr-10">
          <label
            onClick={() => setFilteredList(props.newData)}
            className="block text-black-70 hover:underline hover:text-black font-bold m-10"
          >
            Se alle produkter
          </label>
          <div className="mb-6">
            <nav>
              <div
                onClick={() => {
                  if (brandFilter === false) {
                    return setBrandfilter(true);
                  } else {
                    return setBrandfilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 mb-1 hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Brand</button>
                <div className="pt-2">
                  <Arrow />
                </div>
              </div>
              {brandFilter ? (
                <ul className="grid grid-rows-flow gap-2 bg-white p-10 mb-6">
                  {usedTagsBrand.map((tag) => {
                    const items = [];
                    props.newData.map((item) => {
                      item.node.tags.nodes.map((itemTag) => {
                        if (itemTag.slug === tag.slug) {
                          items.push(item);
                        }
                      });
                    });
                    return (
                      <li
                        key={tag.slug}
                        className="text-black-70 hover:text-black hover:underline"
                      >
                        <label
                          onClick={() => setFilteredList(items)}
                          className="ml-4"
                        >
                          {tag.name}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </nav>
          </div>
          <div className="mb-10">
            <nav>
              <div
                onClick={() => {
                  if (fiberFilter === false) {
                    return setFiberfilter(true);
                  } else {
                    return setFiberfilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 mb-1 hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Fibre</button>
                <div className="pt-2">
                  <Arrow />
                </div>
              </div>
              {fiberFilter ? (
                <ul className="grid grid-rows-flow gap-2 bg-white p-10 mb-6 max-h-[250px] overflow-scroll">
                  {usedTagsMaterial.map((tag) => {
                    const items = [];
                    props.newData.map((item) => {
                      item.node.tags.nodes.map((itemTag) => {
                        if (itemTag.slug === tag.slug) {
                          items.push(item);
                        }
                      });
                    });
                    return (
                      <li
                        key={tag.slug}
                        className="text-black-70 hover:text-black hover:underline"
                      >
                        <label
                          onClick={() => setFilteredList(items)}
                          className="ml-4"
                        >
                          {tag.name}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </nav>
          </div>
        </aside>
        <div className="col-span-4 ">
          <div className="pb-16 hidden md:block">
            <h1 className="font-serif text-5xl mb-4">Garn</h1>
            <p className="text-black-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              iaculis ultrices tortor at tempus. Sed est lacus, consectetur a mi
              quis, sodales cursus quam. Ut sit amet egestas lectus.
              Pellentesque laoreet velit porttitor dictum hendrerit. Ut sit amet
              arcu sed nulla euismod fermentum. Vestibulum elit nulla, auctor
              vel volutpat id, venenatis nec urna.
            </p>
          </div>
          <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16 ">
            {filteredList.map((item) => {
              return (
                <div
                  key={`${item.node.slug}${item.node.id}`}
                  className="col-span-1"
                >
                  <Link
                    href={{
                      pathname: "/products/garn/[slug]",
                      query: { slug: item.node.slug },
                    }}
                  >
                    <a>
                      {/* Transition css ligger i globals.css på linje 139-159 */}
                      <article className="col-span-1 product-container">
                        <div className="image-container">
                          <img
                            className="product-image"
                            src={item.node.yarnproduct.image.guid}
                            alt={item.node.yarnproduct.image.alt}
                          />
                        </div>
                        <h2 className="">{item.node.yarnproduct.title}</h2>
                        <span className="block text-xs text-black-70">
                          More colors
                        </span>
                        <span className="block mt-2">
                          {item.node.yarnproduct.price} DKK
                        </span>
                      </article>
                    </a>
                  </Link>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const page = await getYarnPage();
  const data = await getYarnProducts();
  const headerFooterData = await getData();
  const tags = await getTags();

  const newData = data.posts.edges.map((item) => {
    return item;
  });

  const newPage = page.pages.nodes[0];
  return {
    props: {
      newData,
      newPage,
      headerFooterData,
      tags,
    },
  };
}
