import { getLearnToKnitPage } from "../../../lib/api" ;
import VideoSection from "../../components/VideoSection";

export default function LearnToKnit(props) {
    console.log(props);
    const section1 = props.content.page.ltksection1;

    const array = [
        {
            id: "432ds2",
            url: "https://www.youtube.com/embed/uE-1RPDqJAY",
            header: "Overskrift",
            body: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            videoNumber: 1
        }
    ]

    return (
        <>
            <section className="grid grid-cols-6 gap-4">
                <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
                    <h1 className="font-serif text-3xl lg:text-5xl mb-4">{props.content.page.title}</h1>
                    <p className="text-black-60">{section1.body1}</p>
                </article>
            </section>

            {array.map((obj) => {
                return <VideoSection key={obj.id} index={array.findIndex(item => item.id === obj.id)} {...obj}></VideoSection>
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