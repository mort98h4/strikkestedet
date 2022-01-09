import { getLearnToKnitPage, getData } from "../../../lib/api" ;
import VideoSection from "../../components/VideoSection";
import Head from "next/head";

export default function LearnToKnit(props) {
    const section1 = props.content.page.learnsection1;
    const learningVideos = props.content.posts.edges;

    return (
        <>
            <Head>
                <title>{props.content.page.metaFields.sideTitel}</title>
                <meta name="description" content={props.content.page.metaFields.sideBeskrivelse}></meta>
                <link rel="icon" type="image/png" size="180x180" href="./../apple-touch-icon.ico"></link>
                <link rel="icon" type="image/png" size="32x32" href="./../favicon32x32"></link>
                <link rel="icon" type="image/png" size="16x16" href="./../avicon16x16"></link>
            </Head>
            <section className="grid grid-cols-6 gap-4">
                <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
                    <h1 className="font-serif text-3xl lg:text-5xl mb-4">{props.content.page.title}</h1>
                    <p className="text-black-60">{section1.body1}</p>
                </article>
            </section>

            {learningVideos.map((video) => {
                return <VideoSection key={video.node.id} index={learningVideos.findIndex(item => item.node.id === video.node.id)} {...video}></VideoSection>
            })}
        </>
    )
}

export async function getStaticProps() {
    const content = await getLearnToKnitPage();
    const headerFooterData = await getData();
    return {
      props: {
        content,
        headerFooterData
      }
    }
  }