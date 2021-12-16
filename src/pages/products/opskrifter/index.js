import {
  getData,
  getOpskriftPage,
  getOpskriftProducts,
  getTags,
  getYarnPage,
  getYarnProducts,
} from "../../../../lib/api";
import Button from "../../../globals/Button";
import { Arrow } from "../../../components/arrow";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { number } from "tailwindcss/lib/util/dataTypes";
import Head from "next/head";

export default function Opskrift(props) {
  const posts = props.data.posts.edges;
  const page = props.page.page;
  const tags = props.tags.tags;

  const [filteredList, setFilteredList] = useState(posts);
  const [brandFilter, setBrandfilter] = useState(true);
  const [difficultyFilter, setdifficultyFilter] = useState(false);

  const usedTagsDifficulty = [];
  tags.nodes.map((tag) => {
    if (tag.slug.includes("svaerhed")) {
      if (tag.count) {
        usedTagsDifficulty.push(tag);
      }
    }
  });

  const usedTagsBrand = [];
  tags.nodes.map((tag) => {
    if (tag.id === "dGVybTozNg==" || tag.id === "dGVybToxNQ==") {
      usedTagsBrand.push(tag);
    }
  });

  return (
    <>
      <Head>
        {/* <title>{props.page.metaFields.sideTitel}</title> */}
        <title>Strikkestedet | Opskrifter</title>
        {/* <meta name="description" content={props.page.metaFields.sideBeskrivelse}></meta> */}
        <meta name="description" content="Her finder du Strikkestedet store udvalg af strikkeopskrifter fra kendte mærker og designere, som eksempelvis PetitKnit, Sandnes, Permin og mange flere."></meta> 
        <link rel="icon" type="image/png" sizez="180x180" href="./../apple-touch-icon.ico"></link>
        <link rel="icon" type="image/png" sizez="32x32" href="./../favicon32x32"></link>
        <link rel="icon" type="image/png" sizez="16x16" href="./../favicon16x16"></link>
      </Head>
      <div className="md:grid md:grid-cols-6 md:gap-4 mb-32 mt-4 p-4 2xl:p-0 md:mt-16">
        <div className="md:hidden">
          <h1 className="font-serif text-5xl mb-4">
            {page.metaFields.sideTitel}
          </h1>
          <p className="text-black-60 mb-4">
            {page.metaFields.sideBeskrivelse}
          </p>
          <div className="w-full flex justify-center">
            <Button href={"/learn/garntyper"}>tekst</Button>
          </div>
        </div>
        <aside className=" md:col-span-2 md:pr-10">
          <label
            onClick={() => setFilteredList(posts)}
            className="block text-black-60 transition hover:underline hover:text-black font-bold m-10"
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
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 mb-1 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Mærke</button>
                <div className="pt-2">
                  <Arrow rotate={brandFilter} />
                </div>
              </div>
              <ul
                className={
                  "grid grid-rows-flow gap-2 bg-white p-10 mb-6 transition-all overflow-scroll " +
                  (brandFilter
                    ? "max-h-[250px]"
                    : "max-h-0 overflow-hidden py-0")
                }
              >
                {usedTagsBrand.map((tag) => {
                  const items = [];
                  posts.map((post) => {
                    post.node.tags.nodes.map((itemTag) => {
                      if (itemTag.slug === tag.slug) {
                        items.push(post);
                      }
                    });
                  });
                  return (
                    <li
                      key={tag.slug}
                      className="text-black-60 transition hover:text-black hover:underline"
                    >
                      <label
                        onClick={() => setFilteredList(items)}
                        className="ml-4 cursor-pointer"
                      >
                        {tag.name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="mb-6">
            <nav>
              <div
                onClick={() => {
                  if (difficultyFilter === false) {
                    return setdifficultyFilter(true);
                  } else {
                    return setdifficultyFilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 mb-1 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Sværhedsgrader</button>
                <div className="pt-2">
                  <Arrow rotate={difficultyFilter} />
                </div>
              </div>
              <ul
                className={
                  "grid grid-rows-flow gap-2 bg-white p-10 mb-6 transition-all overflow-scroll " +
                  (difficultyFilter
                    ? "max-h-[250px]"
                    : "max-h-0 overflow-hidden py-0")
                }
              >
                {usedTagsDifficulty.map((tag) => {
                  const items = [];
                  posts.map((post) => {
                    post.node.tags.nodes.map((itemTag) => {
                      if (itemTag.slug === tag.slug) {
                        items.push(post);
                      }
                    });
                  });
                  return (
                    <li
                      key={tag.slug}
                      className="text-black-60 transition hover:text-black hover:underline"
                    >
                      <label
                        onClick={() => setFilteredList(items)}
                        className="ml-4 cursor-pointer"
                      >
                        {tag.name}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>
        <div className="col-span-4">
          <div className="pb-16 hidden md:grid grid-cols-4 gap-4">
            <h1 className="font-serif text-5xl mb-4 col-span-3">Opskrifter</h1>
            <p className="text-black-60 col-span-3">text for siden</p>
            <div className="col-span-4">
              <Button href={"/learn/garntyper"}>linker til garntyper</Button>
            </div>
          </div>
          <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16 ">
            {filteredList.map((item) => {
              return (
                <div key={item.slug} className="col-span-1">
                      {/* Transition css ligger i globals.css på linje 139-159 */}
                      <article className="col-span-1 product-container relative">
                        <div className="image-container w-full">
                          <Image
                            width="500px"
                            height="700px"
                            layout="responsive"
                            objectFit="cover"
                            className="product-image"
                            src={item.node.opskriftprodukt.imageforlist.guid}
                            alt={item.node.opskriftprodukt.imageforlist.alt}
                          />
                        </div>
                        <div className="px-2 pb-2">
                          <h2 className="">
                            {item.node.opskriftprodukt.title}
                          </h2>
                          <span className="block text-xs text-black-60">
                            {item.node.opskriftprodukt.maerke}
                          </span>
                          <span className="block mt-2">
                            {item.node.opskriftprodukt.pris} DKK
                          </span>
                        </div>
                      </article>
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
  const data = await getOpskriftProducts();
  const page = await getOpskriftPage();
  const tags = await getTags();
  const headerFooterData = await getData();

  return {
    props: {
      tags,
      page,
      data,
      headerFooterData,
    },
  };
}
