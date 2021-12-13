import { getHomePage } from "../../lib/api";
import Button from "../globals/Button";
import CustomerReview from "../components/CustomerReview";

export default function Home(props) {
  const ctaSection1 = props.content.page.homepagectasection1;
  const ctaSection2 = props.content.page.homepagectasection2;
  const ctaSection3 = props.content.page.homepagectasection3;
  const section1 = props.content.page.homepagesection1;
  const section2 = props.content.page.homepagesection2;
  const newsLetter = props.content.page.homepagenewsletter;
  const selectedItems = props.content.page.homepageselecteditems;
  const reviews = props.content.posts.edges;

  const patternsBgImage = {
    backgroundImage: "url('" + ctaSection1.image1.guid + "')",
  };
  const yarnBgImage = {
    backgroundImage: "url('" + ctaSection2.image2.guid + "')",
  };
  const knitBgImage = {
    backgroundImage: "url('" + ctaSection3.image3.guid + "')",
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center" style={patternsBgImage}>
          <Button href={ctaSection1.ctaHref1} fullWidth={false}>{ctaSection1.ctaText1}</Button>
        </div>
        <div className="col-span-6 md:col-span-2 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center" style={yarnBgImage}>
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
        <div
          className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center"
          style={knitBgImage}
        >
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
        <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8 flex flex-wrap content-center">
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
            ></input>
            <label
              htmlFor="knittingPatternsRadio"
              className="pl-4 text-base cursor-pointer"
            >
              {selectedItems.label2}
            </label>
          </div>
        </div>
        <div className="col-span-1"></div>
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
  return {
    props: {
      content,
    }
  }
  // const allPosts = await getAllPosts();
  // return {
  //   props: {
  //     allPosts
  //   }
  // };
}