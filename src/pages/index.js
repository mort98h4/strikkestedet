import { getHomePage, getData, getSelectedYarnItems, getSelectedPatternsItems } from "../../lib/api";
import Button from "../globals/Button";
import CustomerReview from "../components/CustomerReview";
import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';
import { useState } from 'react';

export default function Home(props) {
  console.log(props);
  const [selectedItemsList, setSelectedItemsList] = useState(props.yarn);
  const [categoryIsYarn, setCategoryIsYarn] = useState(true)

  const ctaSection1 = props.content.page.homepagectasection1;
  const ctaSection2 = props.content.page.homepagectasection2;
  const ctaSection3 = props.content.page.homepagectasection3;
  const section1 = props.content.page.homepagesection1;
  const section2 = props.content.page.homepagesection2;
  const newsLetter = props.content.page.homepagenewsletter;
  const selectedItems = props.content.page.homepageselecteditems;
  const reviews = props.content.posts.edges;

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    console.log(e.currentTarget.value);
    e.currentTarget.value === "knittingPatterns" ? setSelectedItemsList(props.patterns) : setSelectedItemsList(props.yarn);
    setCategoryIsYarn(categoryIsYarn = !categoryIsYarn)
  }

  return (
    <>
      <Head>
        <title>{props.content.page.metaFields.sideTitel}</title>
        <meta name="description" content={props.content.page.metaFields.sideBeskrivelse}></meta>
        <link rel="icon" type="image/png" sizez="180x180" href="./apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizez="32x32" href="./favicon32x32"></link>
        <link rel="icon" type="image/png" sizez="16x16" href="./favicon16x16"></link>
      </Head>
      <section className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center relative">
          <Image priority={true} layout="fill" objectFit="cover" sizes="100vw, 66vw" src={ctaSection1.image1.guid} alt={ctaSection1.image1.altText}></Image>
          <Button href={ctaSection1.ctaHref1} fullWidth={false}>{ctaSection1.ctaText1}</Button>
        </div>
        <div className="col-span-6 md:col-span-2 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center relative">
          <Image priority={true} layout="fill" objectFit="cover" sizes="100vw, 33vw" src={ctaSection2.image2.guid} alt={ctaSection2.image2.altText}></Image>
          <Button href={ctaSection2.ctaHref2}>{ctaSection2.ctaText2}</Button>
        </div>
      </section>

      <section className="grid grid-cols-6 gap-4">
        <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            {section1.header1}
          </h2>
          <p className="text-black-60">{section1.body1}</p>
        </article>
      </section>

      <section className="grid grid-cols-6 md:gap-4">
        <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8 flex flex-wrap content-center">
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            {newsLetter.headerNewsletter}
          </h2>
          <p className="text-black-60 mb-16">
            {newsLetter.bodyNewsletter}
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full mb-16">
              <label htmlFor="newsletterEmail" className="block mb-2 text-lg">
                {newsLetter.labelNewsletter}
              </label>
              <input
                type="email"
                id="newsletterEmail"
                autoComplete="email"
                className="block w-full p-2 bg-gray-input outline-none border border-solid border-gray-input transition focus:bg-white focus:outline-none focus:border-black"
                required
              />
              <span className="text-black-40 text-sm mb-16">
                {newsLetter.info}
              </span>
            </div>
            <Button type="submit" href={false} fullWidth={true}>
              {newsLetter.buttonText}
            </Button>
          </form>
        </div>
        <div className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center relative">
          <Image layout="fill" objectFit="cover" sizes="100vw, 66vw" src={ctaSection3.image3.guid} alt={ctaSection3.image3.altText}></Image>
          <Button href={ctaSection3.ctaHref3}>{ctaSection3.ctaText3}</Button>
        </div>
      </section>

      <section className="grid grid-cols-6 gap-4">
        <article className="col-span-6 lg:col-span-3 lg:col-start-3 p-16">
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            {section2.header2}
          </h2>
          <p className="text-black-60">{section2.body2}</p>
        </article>
      </section>

      <section className="grid grid-cols-6 md:gap-4">
        <div className="col-span-6 lg:col-span-2 bg-white p-16 md:p-8 self-center h-full">
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            {selectedItems.headerSelecteditems}
          </h2>
          <p className="text-black-60 mb-4">
            {selectedItems.bodySelecteditems}
          </p>
          <h3 className="font-sans text-xl lg:text-2xl font-bold mb-4">
            {selectedItems.subheaderSelecteditems}
          </h3>
          <div className="flex items-center w-full mb-2">
            <input
              type="radio"
              id="yarnRadio"
              name="selectedProducts"
              value="yarn"
              defaultChecked
              onChange={handleChange}
            ></input>
            <label
              htmlFor="yarnRadio"
              className="pl-4 text-base cursor-pointer"
            >
              {selectedItems.label1}
            </label>
          </div>
          <div className="flex items-center w-full">
            <input
              type="radio"
              id="knittingPatternsRadio"
              name="selectedProducts"
              value="knittingPatterns"
              onChange={handleChange}
            ></input>
            <label
              htmlFor="knittingPatternsRadio"
              className="pl-4 text-base cursor-pointer"
            >
              {selectedItems.label2}
            </label>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4 grid grid-cols-4 gap-4 px-4 lg:px-0 lg:pr-4">
          {selectedItemsList.posts.edges.map((item) => {
            const product = categoryIsYarn ? item.node.yarnproduct : item.node.opskriftprodukt;

            return (
              <div key={item.node.id} className="col-span-2 md:col-span-1">
                <Link
                      href={{
                        pathname: "/products/garn/[slug]",
                        query: { slug: item.node.slug },
                      }}
                >
                  <a>
                    <article className="col-span-1 product-container h-100 relative">
                      <div className="image-container w-full">
                        <Image
                          width={categoryIsYarn ? product.image.mediaDetails.width : product.imageforlist.mediaDetails.width}
                          height={categoryIsYarn ? product.image.mediaDetails.height : product.imageforlist.mediaDetails.height}
                          sizes={"50vw"}
                          layout='responsive'
                          objectFit='cover'
                          className="product-image"
                          src={(categoryIsYarn ? product.image.guid : product.imageforlist.guid)}
                          alt={"Udvalgt produkt"}
                        ></Image>
                      </div>
                      <div className="px-2 pb-2">
                        <h4 className="">{product.title}</h4>
                        <span className="block text-xs text-black-60">
                          More colors
                        </span>
                        <span className="block mt-2">
                          {categoryIsYarn ? product.price : product.pris} DKK
                        </span>
                      </div>
                    </article>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
        
      </section>

      <section className="grid grid-cols-6 gap-4 md:mt-8">
        <h2 className="font-serif text-3xl lg:text-5xl m-16 mb-4 md:m-8 md:mb-4 col-span-6">
          Kunderne siger
        </h2>
        {reviews.map((item) => {
            return <CustomerReview key={item.node.id} {...item}></CustomerReview>
        })}
      </section> 
    </>
  )
}

export async function getStaticProps() {
  const content = await getHomePage();
  const headerFooterData = await getData();
  const yarn = await getSelectedYarnItems();
  const patterns = await getSelectedPatternsItems();
  return {
    props: {
      content,
      headerFooterData,
      yarn,
      patterns
    }
  }
}