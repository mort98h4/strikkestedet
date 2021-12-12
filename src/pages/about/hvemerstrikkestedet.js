import { getAboutUsPage } from "../../../lib/api";
import ImageSection from "../../components/ImageSection";

export default function AboutUs(props) {
    console.log(props);

    return (
        <>
            <section>
                Jeg er en test
            </section>
        </>
    )
}

export async function getStaticProps() {
    const content = await getAboutUsPage();
    return {
        props: {
            content,
        }
    }
}