import { getHomePage, getCustomerReviews, getAllPosts } from "../../lib/api";
import Button from "../globals/Button";
import CustomerReview from "../components/CustomerReview";

export default function Home(props) {
  console.log(props);
  const homePage = props.content.page.homepage;
  const reviews = props.content.posts.edges;

  const patternsBgImage = {
    backgroundImage: "url('" + homePage.image1.guid + "');",
  };
  const yarnBgImage = {
    backgroundImage: "url('" + homePage.image2.guid + "');",
  };
  const knitBgImage = {
    backgroundImage: "url('" + homePage.image3.guid + "');",
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  function getStarsArray(num) {
    let stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(i);
    }
    return stars;
  }
  return (
    <>
      <section className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center" style={patternsBgImage}>
          <Button href={homePage.ctaHref1} fullWidth={false}>{homePage.cta1}</Button>
        </div>
        <div className="col-span-6 md:col-span-2 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center" style={yarnBgImage}>
          <Button href={homePage.ctaHref2}>{homePage.cta2}</Button>
        </div>
      </section>

      <section className="grid grid-cols-6 gap-4">
        <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            {/* TODO: Get header from WP */}
          </h2>
          <p className="text-black-60">{/* TODO: Get body from WP */}</p>
        </article>
      </section>

      <section className="grid grid-cols-6 md:gap-4">
        <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8 flex flex-wrap content-center">
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            {/* TODO: Get header from WP */}
          </h2>
          <p className="text-black-60 mb-16">
            {/* TODO: Get body from WP */}
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full mb-16">
              <label htmlFor="newsletterEmail" className="block mb-2 text-lg">
                Indtast din e-mail
              </label>
              <input
                type="email"
                id="newsletterEmail"
                autoComplete="email"
                className="block w-full p-2 bg-gray-input outline-none border border-solid border-gray-input transition focus:bg-white focus:outline-none focus:border-black"
                required
              />
              <span className="text-black-40 text-sm mb-16">
                Vi benytter kun din e-mail til at sende dig gode tilbud og
                nyheder.
              </span>
            </div>
            <Button type="submit" href={false} fullWidth={true}>
              Tilmeld
            </Button>
          </form>
        </div>
        <div
          className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center"
          style={knitBgImage}
        >
          <Button href={homePage.ctaHref3}>{homePage.cta3}</Button>
        </div>
      </section>

      <section className="grid grid-cols-6 gap-4">
        <article className="col-span-6 lg:col-span-3 lg:col-start-3 p-16">
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            {/* TODO: Get header from WP */}
          </h2>
          <p className="text-black-60">{/* TODO: Get body from WP */}</p>
        </article>
      </section>

      <section className="grid grid-cols-6 md:gap-4">
        <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8 flex flex-wrap content-center">
          {/* TODO: Use real content here */}
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">
            Udvalgte produkter
          </h2>
          <p className="text-black-60 mb-4">
            {/* TODO: Get body from WP */}
          </p>
          <h3 className="font-sans text-xl lg:text-2xl font-bold mb-4">
            Filtrer mellem udvalgte produkter
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
              Garn
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
              Strikkeopskrifter
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