import { getYarnPage, getYarnProducts, getData } from "../../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Garn(props) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div className=" md:grid md:grid-cols-6 md:grid-flow-row md:gap-4 ">
        <aside className="h-20 md:col-start-0 md:col-end-3">
          <span>Aside bar</span>
        </aside>
        <div className="md:grid md:grid-row-2 md:col-span-4">
          <section className=" md:col-span-1 h-20">
            <h1>{props.newPage.id}</h1>
          </section>
          <section className="md:col-span-1 md:grid md:grid-cols-4 md:gap-4">
            {props.newData.map((item) => {
              return (
                <Link
                  key={item.node.id}
                  href={{
                    pathname: "/products/garn/[slug]",
                    query: { slug: item.node.slug },
                  }}
                >
                  <a>
                    {/* Transition css ligger i globals.css på linje 139-159 */}
                    <article className="col-span-1 product-container">
                      <div className="image-container">
                        <img className="product-image"
                          src={item.node.yarnproduct.image.guid}
                          alt={item.node.yarnproduct.image.alt}
                        />

                      </div>
                      <h2>{item.node.yarnproduct.title}</h2>
                      <span className="block">TO DO: colors</span>
                      <span className="block">
                        {item.node.yarnproduct.price}
                      </span>
                    </article>
                    {/* Transition css ligger i globals.css på linje 139-159 */}
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
  const headerFooterData = await getData();

  const newData = data.posts.edges.map((item) => {
    return item;
  });
  const newPage = page.pages.nodes[0];
  return {
    props: {
      newData,
      newPage,
      headerFooterData,
    },
  };
}
