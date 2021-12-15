import { getTags, getYarnPage, getYarnProducts } from "../../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Garn(props) {
  const [filteredList, setFilteredList] = useState(props.newData);
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

  //Material arrays
  const materialBabyAlpakka = [];
  const materialBomuld = [];
  const materialBoerstetAlpakka = [];
  const materialFinmerinould = [];
  const materialhoer = [];
  const materialMerinould = [];
  const materialMohair = [];
  const materialMulberrySilke = [];
  const materialNylon = [];
  const materialSilke = [];
  const materialSuperKidMohair = [];
  const materialUld = [];
  const materialUldSuperWash = [];
  const materialViskose = [];

  // get itemList og Materials
  props.newData.map((item) => {
    item.node.tags.nodes.map((itemTag) => {
      usedTagsMaterial.map((tag) => {
        if (itemTag.slug === tag.slug) {
          if (tag.slug === "baby-alpakka") {
            materialBabyAlpakka.push(item);
          } else if (tag.slug === "bomuld") {
            materialBomuld.push(item);
          } else if (tag.slug === "boerstet-alpakka") {
            materialBoerstetAlpakka.push(item);
          } else if (tag.slug === "fin-merinould") {
            materialFinmerinould.push(item);
          } else if (tag.slug === "hoer") {
            materialhoer.push(item);
          } else if (tag.slug === "merinould") {
            materialMerinould.push(item);
          } else if (tag.slug === "mohair") {
            materialMohair.push(item);
          } else if (tag.slug === "mulberry-silke") {
            materialMulberrySilke.push(item);
          } else if (tag.slug === "nylon") {
            materialNylon.push(item);
          } else if (tag.slug === "silke") {
            materialSilke.push(item);
          } else if (tag.slug === "super-kid-mohair") {
            materialSuperKidMohair.push(item);
          } else if (tag.slug === "uld") {
            materialUld.push(item);
          } else if (tag.slug === "uld-superwash") {
            materialUldSuperWash.push(item);
          } else if (tag.slug === "viskose") {
            materialViskose.push(item);
          }
        }
      });
    });
  });

  //Brand arrays
  const brandSandnes = [];
  const brandHjertegarn = [];
  const brandPermin = [];
  const brandFilcolana = [];
  //get item list of brands
  props.newData.map((item) => {
    item.node.tags.nodes.map((tag) => {
      usedTagsBrand.map((taglist) => {
        if (taglist.name === tag.name) {
          const brandSan = taglist.name.includes("Sandnes");
          const brandHjerte = taglist.name.includes("Hjertegarn");
          const brandPer = taglist.name.includes("Permin");
          const brandFil = taglist.name.includes("Filcolana");
          if (brandSan) {
            brandSandnes.push(item);
          } else if (brandHjerte) {
            brandHjertegarn.push(item);
          } else if (brandPer) {
            brandPermin.push(item);
          } else if (brandFil) {
            brandFilcolana.push(item);
          }
        }
      });
    });
  });

  return (
    <>
      <section className="md:grid md:grid-cols-6 md:gap-4 mt-10">
        <h1 className="md:col-start-3 text-3xl">hello</h1>
      </section>
      <div className="md:grid md:grid-cols-6 md:gap-4 mb-10">
        <aside className=" md:col-span-2">
          <label
            onClick={() => setFilteredList(props.newData)}
            className="block mt-12 font-bold p-10
            "
          >
            Se alle produkter
          </label>
          <div className="bg-white p-10 mb-6">
            <nav>
              <h3 className="font-bold mb-4">Brand</h3>
              <ul className="grid grid-rows-flow gap-2">
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(brandFilcolana)}
                    className="ml-4"
                  >
                    {usedTagsBrand[0].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(brandHjertegarn)}
                    className="ml-4"
                  >
                    {usedTagsBrand[1].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(brandPermin)}
                    className="ml-4"
                  >
                    {usedTagsBrand[2].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(brandSandnes)}
                    className="ml-4"
                  >
                    {usedTagsBrand[3].name}
                  </label>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bg-white p-10 ">
            <nav>
              <h3 className="font-bold mb-4">Fibre</h3>
              <ul className="grid grid-rows-flow gap-2">
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialBabyAlpakka)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[0].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialBomuld)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[1].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialBoerstetAlpakka)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[2].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialFinmerinould)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[3].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialhoer)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[4].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialMerinould)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[5].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialMohair)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[6].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialMulberrySilke)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[7].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialNylon)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[8].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialSilke)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[9].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialSuperKidMohair)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[10].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialUld)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[11].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialUldSuperWash)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[12].name}
                  </label>
                </li>
                <li className="text-black-70 hover:text-black hover:underline">
                  <label
                    onClick={() => setFilteredList(materialViskose)}
                    className="ml-4"
                  >
                    {usedTagsMaterial[13].name}
                  </label>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <div className="md:grid md:grid-row-2 md:col-span-4">
          <section className="md:col-span-1 md:grid md:grid-cols-4 md:gap-4">
            {filteredList.map((item) => {
              return (
                <Link
                  key={item.node.id}
                  href={{
                    pathname: "/products/garn/[slug]",
                    query: { slug: item.node.slug },
                  }}
                >
                  <a>
                    <article className="col-span-1">
                      <img
                        src={item.node.yarnproduct.image.guid}
                        alt={item.node.yarnproduct.image.alt}
                      />
                      <h2>{item.node.yarnproduct.title}</h2>
                      <span className="block">TO DO: colors</span>
                      <span className="block">
                        {item.node.yarnproduct.price}
                      </span>
                    </article>
                  </a>
                </Link>
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
  const tags = await getTags();

  const newData = data.posts.edges.map((item) => {
    return item;
  });

  const newPage = page.pages.nodes[0];
  return {
    props: {
      newData,
      newPage,
      tags,
    },
  };
}
