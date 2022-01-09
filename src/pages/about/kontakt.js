import { getContactPage, getData } from "../../../lib/api" ;
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
                <link rel="icon" type="image/png" size="180x180" href="./../apple-touch-icon.ico"></link>
                <link rel="icon" type="image/png" size="32x32" href="./../favicon32x32"></link>
                <link rel="icon" type="image/png" size="16x16" href="./../favicon16x16"></link> 
            </Head>
            <section className="grid grid-cols-6 gap-4">
                <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
                    <h1 className="font-serif text-3xl lg:text-5xl mb-4">{props.content.page.title}</h1>
                    <p className="text-black-60">{section1.body1}</p>
                </article>
            </section>

            <section className="grid grid-cols-6 gap-4 mb-8 lg:mb-16">
                <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-2 px-8 pb-8 md:pb-0 self-center">
                    <p className="text-black-60 mb-4">
                        Butikken holder åbent tirsdag til fredag fra kl. 10-17.30, samt lørdag fra kl. 10-14.
                    </p>
                    {address.map(item => {
                        return <AddressList key={item.id} {...item} color="text-black-60"></AddressList>
                    })}
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 embed-responsive embed-responsive-16by9">
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
    const headerFooterData = await getData();
    return {
      props: {
        content,
        headerFooterData
      }
    }
  }