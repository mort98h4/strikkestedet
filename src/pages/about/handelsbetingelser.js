import { getConditionsPage } from "../../../lib/api";
import ImageSection from "../../components/ImageSection";

export default function AboutUs(props) {
    console.log(props);
    const section1 = props.content.page.aboutsection1;
    const conditions = props.content.page.handelsbetingelser;
    const aboutImages = props.content.posts.nodes;

    return (
        <>
            <section className="grid grid-cols-6 gap-4">
                <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
                    <h1 className="font-serif text-3xl lg:text-5xl mb-4">{props.content.page.title}</h1>
                    <p className="text-black-60">{section1.body1}</p>
                </article>
            </section>
            <section className="grid grid-cols-6 gap-4 pb-16">
                {(conditions.header01 != null || conditions.body01 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header01}</h2> 
                        {conditions.subheader01 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader01}</h3> : ""}
                        <p className="text-black-60">{conditions.body01}</p>
                    </article>
                ) : "")}
                {(conditions.header02 != null || conditions.body02 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header02}</h2> 
                        {conditions.subheader02 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader02}</h3> : ""}
                        <p className="text-black-60">{conditions.body02}</p>
                    </article>
                ) : "")}
                {(conditions.header03 != null || conditions.body03 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header03}</h2> 
                        {conditions.subheader03 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader03}</h3> : ""}
                        <p className="text-black-60">{conditions.body03}</p>
                    </article>
                ) : "")}
                {(conditions.header04 != null || conditions.body04 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header04}</h2> 
                        {conditions.subheader04 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader04}</h3> : ""}
                        <p className="text-black-60">{conditions.body04}</p>
                    </article>
                ) : "")}
                {(conditions.header05 != null || conditions.body05 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header05}</h2> 
                        {conditions.subheader05 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader05}</h3> : ""}
                        <p className="text-black-60">{conditions.body05}</p>
                    </article>
                ) : "")}
                {(conditions.header06 != null || conditions.body06 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header06}</h2> 
                        {conditions.subheader06 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader06}</h3> : ""}
                        <p className="text-black-60">{conditions.body06}</p>
                    </article>
                ) : "")}
                {(conditions.header07 != null || conditions.body07 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header07}</h2> 
                        {conditions.subheader07 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader07}</h3> : ""}
                        <p className="text-black-60">{conditions.body07}</p>
                    </article>
                ) : "")}
                {(conditions.header08 != null || conditions.body08 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header08}</h2> 
                        {conditions.subheader08 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader08}</h3> : ""}
                        <p className="text-black-60">{conditions.body08}</p>
                    </article>
                ) : "")}
                {(conditions.header09 != null || conditions.body09 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header09}</h2> 
                        {conditions.subheader09 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader09}</h3> : ""}
                        <p className="text-black-60">{conditions.body09}</p>
                    </article>
                ) : "")}
                {(conditions.header10 != null || conditions.body10 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header10}</h2> 
                        {conditions.subheader10 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader10}</h3> : ""}
                        <p className="text-black-60">{conditions.body10}</p>
                    </article>
                ) : "")}
                {(conditions.header11 != null || conditions.body11 != null ? (
                    <article className="col-span-6 lg:col-span-4 lg:col-start-2 px-16">
                        <h2 className="font-bold text-lg">{conditions.header11}</h2> 
                        {conditions.subheader11 != null ? 
                        <h3 className="font-bold mb-2">{conditions.subheader11}</h3> : ""}
                        <p className="text-black-60">{conditions.body11}</p>
                    </article>
                ) : "")}
            </section>

            {aboutImages.map((image) => {
                return <ImageSection key={image.id} index={aboutImages.findIndex(item => item.id === image.id)} {...image}></ImageSection>
            })}
        </>
    )
}

export async function getStaticProps() {
    const content = await getConditionsPage();
    return {
        props: {
            content,
        }
    }
}