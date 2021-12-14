import { getUnderstandPatternsPage } from "../../../lib/api" ;
import ImageSection from "../../components/ImageSection";
import Head from "next/head";

export default function Patterns(props) {
    const section1 = props.content.page.learnsection1;
    const learningImages = props.content.posts.nodes;

    return (
        <>
            <Head>
                <title>{props.content.page.metaFields.sideTitel}</title>
                <meta name="description" content={props.content.page.metaFields.sideBeskrivelse}></meta> 
            </Head>
            <section className="grid grid-cols-6 gap-4">
                <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
                    <h1 className="font-serif text-3xl lg:text-5xl mb-4">{props.content.page.title}</h1>
                    <p className="text-black-60">{section1.body1}</p>
                </article>
            </section>

            {learningImages.map((image) => {
                return <ImageSection key={image.id} index={learningImages.findIndex(item => item.id === image.id)} {...image}></ImageSection>
            })}
        </>
    )
}

export async function getStaticProps() {
    const content = await getUnderstandPatternsPage();
    return {
        props: {
            content,
        }
    }
}