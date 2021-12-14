import { getLearnToKnitPage } from "../../../lib/api" ;
import VideoSection from "../../components/VideoSection";

export default function LearnToKnit(props) {
    const section1 = props.content.page.learnsection1;
    const learningVideos = props.content.posts.edges;

    return (
        <>
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
    return {
        props: {
            content,
        }
    }
}