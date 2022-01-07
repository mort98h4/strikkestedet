import { getYarnPage, getYarnProducts, getData } from "../../../../lib/api";
import { getTags } from "../../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Arrow } from "../../../components/arrow";
import Button from "../../../globals/Button";

export default function Garn(props) {
  const [products, setProducts] = useState(props.newData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState([]);
  const [brandFilter, setBrandfilter] = useState(true);
  const [fiberFilter, setFiberfilter] = useState(false);
  const [needleFilter, setNeedleFilter] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  console.log(props);

  const tags = props.tags.tags;
  const usedTagsBrand = [];
  const brandTags = props.newData.map(product => {
    product.node.tags.nodes.forEach(tag => {
      const tagIndex = usedTagsBrand.indexOf(tag.name);
      if (tag.tagType.brand && tagIndex === -1) {
        usedTagsBrand.push(tag.name);
      }
    })
  });

  const usedTagsMaterial = [];
  const materialTags = props.newData.map(product => {
    product.node.tags.nodes.forEach(tag => {
      const tagIndex = usedTagsMaterial.indexOf(tag.name);
      if (tag.tagType.fibre && tagIndex === -1) {
        usedTagsMaterial.push(tag.name);
      }
    })
  });

  const usedTagsNeedle = [];
  const needleTags = props.newData.map(product => {
    product.node.tags.nodes.forEach(tag => {
      const tagIndex = usedTagsNeedle.indexOf(tag.name);
      if (tag.tagType.pind && tagIndex === -1) {
        usedTagsNeedle.push(tag.name);
      }
    })
  })

  function addFilter(filter) {
    console.log(filter);
    if (activeFilters.findIndex(item => item === filter) === -1) {
      activeFilters.push(filter);
      setActiveFilters(activeFilters);
    } 

    const filterProducts = filteredProducts.filter(product => {
      if (product.node.tags.nodes.findIndex(item => item.name === filter) != -1) {
        return product.node;
      };
    })
    setFilteredProducts(filterProducts);
  }

  function removeFilter(filter) {
    console.log(filter);
    const newActiveFilters = activeFilters.filter(item => {
      if (item != filter) {
        return item;
      }
    });
    setActiveFilters(newActiveFilters);
    if (newActiveFilters.length != 0) {
      const newFilteredProducts = [];
      newActiveFilters.forEach(filter => {
        const index = newActiveFilters.indexOf(filter);
        if (index === 0) {
          products.filter(product => {
            if (product.node.tags.nodes.findIndex(item => item.name === filter) != -1) {
              newFilteredProducts.push(product);
            }
          })
        } else {
          const filterNewProducts = newFilteredProducts.filter(product => {
            if (product.node.tags.nodes.findIndex(item => item.name === filter) != -1) {
              return product.node;
            }
          })
          newFilteredProducts = filterNewProducts;
        }
      })
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }

  function clearFilter() {
    setActiveFilters([]);
    setFilteredProducts(products);
  }

  return (
    <>
      <Head>
          <title>{props.newPage.metaFields.sideTitel}</title>
          <meta name="description" content={props.newPage.metaFields.sideBeskrivelse}></meta> 
          <link rel="icon" type="image/png" sizez="180x180" href="./../apple-touch-icon.ico"></link>
          <link rel="icon" type="image/png" sizez="32x32" href="./../favicon32x32"></link>
          <link rel="icon" type="image/png" sizez="16x16" href="./../favicon16x16"></link>
      </Head>  
      <div className="md:grid md:grid-cols-6 md:gap-4 mb-32 mt-4 p-4 2xl:p-0 md:mt-16">
        <div className="md:hidden">
          <h1 className="font-serif text-5xl mb-4">Garn</h1>
          <p className="text-black-60 mb-4">
            {props.newPage.yarnpage.text}
          </p>
          <div className="w-full flex justify-center">
          <Button href={'/learn/garntyper'}>{props.newPage.yarnpage.cta}</Button>

          </div>

        </div>
        <aside className=" md:col-span-2 md:pr-10">
          <div className="w-full pb-8">
            <label 
              onClick={activeFilters.length != 0 ? clearFilter : () => {}} 
              className={"block text-black-60 font-bold mb-4" + (activeFilters.length != 0 ? " transition cursor-pointer hover:underline hover:text-black" : "")}
            >
              {activeFilters.length != 0 ? "Nulstil filtre" : "Ingen filtre valgt"}
            </label>
            {activeFilters.length != 0 ?
              activeFilters.map(item => {
                return (
                  <button key={item} className="active-filter mr-2 mb-2 p-2 bg-white transition hover:bg-black-10 inline-flex" onClick={() => removeFilter(item)}><img src="./../cross.svg" className="inline-block self-center mr-1 w-4 h-4"/>{item}</button>
                )
              }) 
            : 
            ""}
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
                  <Arrow rotate={brandFilter}/>
                </div>
              </div>
              <ul className={"grid grid-rows-flow gap-2 bg-white p-10 mb-1 transition-all overflow-scroll " + (brandFilter ? "max-h-[250px] pt-4 pb-10" : "max-h-0 overflow-hidden py-0")}>
                  {
                  usedTagsBrand.map(item => {
                    return (
                      <li 
                        key={item} 
                        className="text-black-60 transition cursor-pointer ml-4 hover:text-black hover:underline" 
                        onClick={() => addFilter(item)}
                      >
                        {item}
                      </li>
                    )
                  })
                  }
                </ul>
            </nav>
          </div>
          <div className="">
            <nav>
              <div
                onClick={() => {
                  if (fiberFilter === false) {
                    return setFiberfilter(true);
                  } else {
                    return setFiberfilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Fibre</button>
                <div className="pt-2">
                  <Arrow rotate={fiberFilter} />
                </div>
              </div>
                <ul className={"grid grid-rows-flow gap-2 bg-white px-10 mb-1 transition-all overflow-scroll " + (fiberFilter ? "max-h-[250px] pt-4 pb-10" : "max-h-0 overflow-hidden py-0")}>
                  {
                  usedTagsMaterial.map(item => {
                    return (
                      <li key={item} className="text-black-60 transition cursor-pointer ml-4 hover:text-black hover:underline" onClick={() => addFilter(item)}>
                        {item}
                      </li>
                    )
                  })
                  }
                </ul>
            </nav>
          </div>
          <div className="mb-10">
            <nav>
              <div
                onClick={() => {
                  if (needleFilter === false) {
                    return setNeedleFilter(true);
                  } else {
                    return setNeedleFilter(false);
                  }
                }}
                className="flex flex-row justify-between bg-white p-x-10 pl-10 pr-10 pt-4 transition cursor-pointer hover:bg-black-10"
              >
                <button className="font-bold mb-4 ">Vejledende pinde</button>
                <div className="pt-2">
                  <Arrow rotate={needleFilter} />
                </div>
              </div>
                <ul className={"grid grid-rows-flow gap-2 bg-white p-10 mb-1 transition-all overflow-scroll " + (needleFilter ? "max-h-[250px] pt-4 pb-10" : "max-h-0 overflow-hidden py-0")}>
                  {
                  usedTagsNeedle.map(item => {
                    return (
                      <li key={item} className="text-black-60 transition cursor-pointer ml-4 hover:text-black hover:underline" onClick={() => addFilter(item)}>
                        {item}
                      </li>
                    )
                  })
                  }
                </ul>
            </nav>
          </div>
        </aside>
        <div className="col-span-4 ">
          <div className="pb-16 hidden md:grid grid-cols-4 gap-4">
            <h1 className="font-serif text-5xl mb-4 col-span-3">Garn</h1>
            <p className="text-black-60 col-span-3">
            {props.newPage.yarnpage.text}
            </p>
            <div className="col-span-4">
              <Button href={'/learn/garntyper'}>{props.newPage.yarnpage.cta}</Button>

            </div>
          </div>
          <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16 ">
            {filteredProducts.length === 0 ? 
              <p className="col-span-full text-lg md:text-xl text-black-60">
                Der er desværre ingen produkter, der passer til din filtrering.
              </p> 
              : filteredProducts.map((item) => {
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
                      <article className="col-span-1 product-container relative">
                        <div className="image-container w-full">
                          <Image
                            width={item.node.yarnproduct.image.mediaDetails.width}
                            height={item.node.yarnproduct.image.mediaDetails.height}
                            sizes={"50vw"}
                            layout='responsive'
                            objectFit='cover'
                            className="product-image"
                            src={item.node.yarnproduct.image.guid}
                            alt={item.node.yarnproduct.image.alt}
                          />
                        </div>
                        <div className="px-2 pb-2">
                          <h2 className="">{item.node.yarnproduct.title}</h2>
                          <span className="block text-xs text-black-60">
                            More colors
                          </span>
                          <span className="block mt-2">
                            {item.node.yarnproduct.price} DKK
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
