import { getYarnPage, getYarnProduct, getYarnProducts } from "../../../lib/api";

function Product(props) {
  console.log(props.data.postBy.yarnproduct);
  const info = props.data.postBy.yarnproduct;
  const colors = props.data.postBy.color;

  return (
    <>
      <article className="md:grid md:grid-cols-6 md:gap-4">
        <div className="col-start-5 ">
          <aside className="fixed">
            <h1 className="text-3xl lg:text-5xl">{info.title}</h1>
            <p>{info.text}</p>
          </aside>
        </div>
        <section className="md:grid md:grid-cols-4 md:gap-4 md:col-end-5 md:col-span-4">
          <div className="md:col-span-2">
            <img src={info.image.guid} alt="" />
          </div>
          <div className="md:col-span-2">
            <img src={info.image.guid} alt="" />
          </div>
        </section>
      </article>
    </>
  );
}

export default Product;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "permin-rigmor" } },
      { params: { slug: "filcolana-tilia" } },
      { params: { slug: "filcolana-arwetta" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getYarnProduct(params.slug);

  return {
    props: {
      data,
    },
  };
}
