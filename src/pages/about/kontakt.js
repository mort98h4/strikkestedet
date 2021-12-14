import { getContactPage } from "../../../lib/api";
import AddressList from "../../components/AddressList";
import Head from "next/head";

export default function AboutUs(props) {
    const section1 = props.content.page.aboutsection1;
    const address = props.content.posts.nodes.map(item => {
        if (item.id === "cG9zdDo0NDE=") {
            return item;
        }
    });

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

            <section className="grid grid-cols-6 gap-4 pb-16">
                <div className="col-span-6 lg:col-span-2 lg:col-start-2 px-16 pb-8 lg:pb-0 self-center">
                    <p className="text-black-60 mb-4">
                        Butikken holder åbent tirsdag til fredag fra kl. 10-17.30, samt lørdag fra kl. 10-14.
                    </p>
                    {address.map(item => {
                        return <AddressList key={item.id} {...item} color="text-black-60"></AddressList>
                    })}
                </div>
                <div className="col-span-6 lg:col-span-2 embed-responsive embed-responsive-16by9">
                    <iframe 
                        className="embed-responsive-item"
                        src={address[0].kontaktMap.googleMapsUrl} 
                        frameBorder="0" 
                        scrolling="no">
                    </iframe>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps() {
    const content = await getContactPage();
    return {
        props: {
            content,
        }
    }
}