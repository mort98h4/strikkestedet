import {
  getData,
  getOpskriftPage,
  getOpskriftProducts,
  getTags,
} from "../../../../lib/api";
import Button from "../../../globals/Button";
import { Arrow } from "../../../components/arrow";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Opskrift(props) {
  const router = useRouter();
  const { slug } = router.query;

  const posts = props.data.posts.edges;
  const page = props.page.page;
  let filterSlug;

  const [products, setProducts] = useState(posts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState([]);
  const [brandFilter, setBrandfilter] = useState(true);
  const [genderFilter, setGenderFilter] = useState(false);
  const [itemFilter, setItemFilter] = useState(false);
  const [difficultyFilter, setdifficultyFilter] = useState(false);

  console.log(props.data.posts.edges);

  useEffect(() => {
    let params = new URLSearchParams(document.location.search);
    filterSlug = params.get("filter");

    if (filterSlug != null) {
      const tagName = [];
      posts.forEach((product) => {
        product.node.tags.nodes.forEach((tag) => {
          const tagIndex = tagName.indexOf((item) => item.slug === filterSlug);
          if (tagIndex === -1 && tag.slug === filterSlug) {
            tagName.push(tag.name);
          }
        });
      });

      const filter = tagName[0];
      const newActiveFilters = activeFilters.concat(filter);
      setActiveFilters(newActiveFilters);

      const filterProducts = filteredProducts.filter((product) => {
        if (
          product.node.tags.nodes.findIndex((item) => item.name === filter) !=
          -1
        ) {
          return product.node;
        }
      });
      setFilteredProducts(filterProducts);
    }
  }, []);

  const usedTagsBrand = [];
  const brandTags = posts.map((product) => {
    product.node.tags.nodes.forEach((tag) => {
      const tagIndex = usedTagsBrand.indexOf(tag.name);
      if (tag.tagType.brand && tagIndex === -1) {
        usedTagsBrand.push(tag.name);
      }
    });
  });

  const usedTagsGender = [];
  const genderTags = posts.map((product) => {
    product.node.tags.nodes.forEach((tag) => {
      const tagIndex = usedTagsGender.indexOf(tag.name);
      if (tag.tagType.kon && tagIndex === -1) {
        usedTagsGender.push(tag.name);
      }
    });
  });

  const usedTagsItem = [];
  const itemTags = posts.map((product) => {
    product.node.tags.nodes.forEach((tag) => {
      const tagIndex = usedTagsItem.indexOf(tag.name);
      if (tag.tagType.genstand && tagIndex === -1) {
        usedTagsItem.push(tag.name);
      }
    });
  });

  const usedTagsDifficulty = [];
  const difficultyTags = posts.map((product) => {
    product.node.tags.nodes.forEach((tag) => {
      const tagIndex = usedTagsDifficulty.indexOf(tag.name);
      if (tag.tagType.svaerhedsgrad && tagIndex === -1) {
        usedTagsDifficulty.push(tag.name);
      }
    });
  });

  function toggleFilter(filter) {
    if (activeFilters.findIndex((item) => item === filter) === -1) {
      const newActiveFilters = activeFilters.concat(filter);
      setActiveFilters(newActiveFilters);

      const filterProducts = filteredProducts.filter((product) => {
        if (
          product.node.tags.nodes.findIndex((item) => item.name === filter) !=
          -1
        ) {
          return product.node;
        }
      });
      setFilteredProducts(filterProducts);
    } else {
      const newActiveFilters = activeFilters.filter((item) => {
        if (item != filter) {
          return item;
        }
      });
      setActiveFilters(newActiveFilters);

      if (newActiveFilters.length != 0) {
        const newFilteredProducts = [];
        newActiveFilters.forEach((filter) => {
          const index = newActiveFilters.indexOf(filter);
          if (index === 0) {
            products.filter((product) => {
              if (
                product.node.tags.nodes.findIndex(
                  (item) => item.name === filter
                ) != -1
              ) {
                newFilteredProducts.push(product);
              }
            });
          } else {
            const filterNewProducts = newFilteredProducts.filter((product) => {
              if (
                product.node.tags.nodes.findIndex(
                  (item) => item.name === filter
                ) != -1
              ) {
                return product.node;
              }
            });
            newFilteredProducts = filterNewProducts;
          }
        });
        setFilteredProducts(newFilteredProducts);
      } else {
        setFilteredProducts(products);
      }
    }
  }

  function clearFilter() {
    setActiveFilters([]);
    setFilteredProducts(products);
  }

  function isDisabled(filter) {
    const disabled = [];
    filteredProducts.forEach((product) => {
      product.node.tags.nodes.forEach((tag) => {
        if (tag.name === filter) {
          if (disabled.findIndex((item) => item === tag.name) === -1) {
            disabled.push(tag.name);
          }
        }
      });
    });
    if (disabled.length != 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <>
      <Head>
        {/* <title>{props.page.metaFields.sideTitel}</title> */}
        <title>Strikkestedet | Opskrifter</title>
        {/* <meta name="description" content={props.page.metaFields.sideBeskrivelse}></meta> */}
        <meta
          name="description"
          content="Her finder du Strikkestedet store udvalg af strikkeopskrifter fra kendte mærker og designere, som eksempelvis PetitKnit, Sandnes, Permin og mange flere."
        ></meta>
        <link
          rel="icon"
          type="image/png"
          sizez="180x180"
          href="./../apple-touch-icon.ico"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizez="32x32"
          href="./../favicon32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizez="16x16"
          href="./../favicon16x16"
        ></link>
      </Head>
      <div className="md:grid md:grid-cols-6 md:gap-4 mb-32 mt-4 p-4 2xl:p-0 md:mt-16">
        <div className="md:hidden">
          <h1 className="font-serif text-5xl mb-4">{page.title}</h1>
          <p className="text-black-60 mb-4">
            {page.metaFields.sideBeskrivelse}
          </p>
          <div className="w-full flex justify-center">
            <Button href={"/learn/forstaaopskrifter"}>Forstå opskrifter</Button>
          </div>
        </div>
        <aside className=" md:col-span-2 md:pr-10">
          <div className="w-full pl-10 pt-16">
            <label
              onClick={activeFilters.length != 0 ? clearFilter : () => {}}
              className={
                "block text-black-60 font-bold mb-4" +
                (activeFilters.length != 0
                  ? " transition opacity-100 cursor-pointer hover:underline hover:text-black"
                  : " opacity-50")
              }
            >
              {activeFilters.length != 0
                ? "Nulstil filtre"
                : "Ingen filtre valgt"}
            </label>
          </div>

          <div className="">
            <nav>
              <div
                onClick={() => {
                  if (brandFilter === false) {
                    return setBrandfilter(true);
                  } else {
                    return setBrandfilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Brand</button>
                <div className="pt-2">
                  <Arrow rotate={brandFilter} />
                </div>
              </div>
              <ul
                className={
                  "grid grid-rows-flow gap-2 bg-white p-10 mb-1 transition-all overflow-scroll " +
                  (brandFilter
                    ? "max-h-[250px] pt-4 pb-10"
                    : "max-h-0 overflow-hidden py-0")
                }
              >
                {usedTagsBrand.map((item) => {
                  return (
                    <li key={item} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item + "-check"}
                        name="brand"
                        value={item}
                        disabled={isDisabled(item)}
                        onChange={() => toggleFilter(item)}
                        checked={
                          activeFilters.findIndex((value) => value === item) ===
                          -1
                            ? false
                            : true
                        }
                      ></input>
                      <label
                        htmlFor={item + "-check"}
                        className="pl-2 text-black-60"
                      >
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="">
            <nav>
              <div
                onClick={() => {
                  if (genderFilter === false) {
                    return setGenderFilter(true);
                  } else {
                    return setGenderFilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Køn</button>
                <div className="pt-2">
                  <Arrow rotate={genderFilter} />
                </div>
              </div>
              <ul
                className={
                  "grid grid-rows-flow gap-2 bg-white p-10 mb-1 transition-all overflow-scroll " +
                  (genderFilter
                    ? "max-h-[250px] pt-4 pb-10"
                    : "max-h-0 overflow-hidden py-0")
                }
              >
                {usedTagsGender.map((item) => {
                  return (
                    <li key={item} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item + "-check"}
                        name="brand"
                        value={item}
                        disabled={isDisabled(item)}
                        onChange={() => toggleFilter(item)}
                        checked={
                          activeFilters.findIndex((value) => value === item) ===
                          -1
                            ? false
                            : true
                        }
                      ></input>
                      <label
                        htmlFor={item + "-check"}
                        className="pl-2 text-black-60"
                      >
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <div
                onClick={() => {
                  if (itemFilter === false) {
                    return setItemFilter(true);
                  } else {
                    return setItemFilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Produkt</button>
                <div className="pt-2">
                  <Arrow rotate={itemFilter} />
                </div>
              </div>
              <ul
                className={
                  "grid grid-rows-flow gap-2 bg-white p-10 mb-1 transition-all overflow-scroll " +
                  (itemFilter
                    ? "max-h-[250px] pt-4 pb-10"
                    : "max-h-0 overflow-hidden py-0")
                }
              >
                {usedTagsItem.map((item) => {
                  return (
                    <li key={item} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item + "-check"}
                        name="brand"
                        value={item}
                        disabled={isDisabled(item)}
                        onChange={() => toggleFilter(item)}
                        checked={
                          activeFilters.findIndex((value) => value === item) ===
                          -1
                            ? false
                            : true
                        }
                      ></input>
                      <label
                        htmlFor={item + "-check"}
                        className="pl-2 text-black-60"
                      >
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="">
            <nav>
              <div
                onClick={() => {
                  if (difficultyFilter === false) {
                    return setdifficultyFilter(true);
                  } else {
                    return setdifficultyFilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Sværhedsgrad</button>
                <div className="pt-2">
                  <Arrow rotate={difficultyFilter} />
                </div>
              </div>
              <ul
                className={
                  "grid grid-rows-flow gap-2 bg-white p-10 mb-1 transition-all overflow-scroll " +
                  (difficultyFilter
                    ? "max-h-[250px] pt-4 pb-10"
                    : "max-h-0 overflow-hidden py-0")
                }
              >
                {usedTagsDifficulty.map((item) => {
                  return (
                    <li key={item} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item + "-check"}
                        name="brand"
                        value={item}
                        disabled={isDisabled(item)}
                        onChange={() => toggleFilter(item)}
                        checked={
                          activeFilters.findIndex((value) => value === item) ===
                          -1
                            ? false
                            : true
                        }
                      ></input>
                      <label
                        htmlFor={item + "-check"}
                        className="pl-2 text-black-60"
                      >
                        {item}
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
            <h1 className="font-serif text-5xl mb-4 col-span-3">
              {page.title}
            </h1>
            <p className="text-black-60 col-span-3">
              {page.metaFields.sideBeskrivelse}
            </p>
            <div className="col-span-4">
              <Button href={"/learn/forstaaopskrifter"}>
                Forstå strikkeopskrifter
              </Button>
            </div>
          </div>
          <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16 ">
            {filteredProducts.map((item) => {
              console.log(item.node.onesize);
              return (
                <div key={item.slug} className="col-span-1">
                  {/* Transition css ligger i globals.css på linje 139-159 */}
                  <Link
                    href={{
                      pathname: "/products/opskrifter/[slug]",
                      query: { slug: item.node.slug },
                    }}
                  >
                    <a>
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
                            {item.node.opskriftprodukt.onesize ? (
                              `${item.node.opskriftprodukt.pris} DKK`
                            ) : (
                              <>
                                <span className="text-xs">Fra </span>
                                <span>
                                  {item.node.opskriftprodukt.pris} DKK
                                </span>
                              </>
                            )}
                          </span>
                        </div>
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
  const data = await getOpskriftProducts();
  const page = await getOpskriftPage();
  const headerFooterData = await getData();
  const tags = await getTags();

  return {
    props: {
      page,
      data,
      headerFooterData,
      tags,
    },
  };
}
