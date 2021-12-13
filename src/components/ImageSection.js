export default function ImageSection(props) {
    console.log(props);
    const image = props.learningimages ? props.learningimages : props.aboutimages;

    return (
        <section className="w-full mb-4">
            <article className="grid grid-cols-6 gap-4 flex flex-wrap">
                <img 
                    loading="lazy" 
                    src={image.image.guid} 
                    alt={image.image.altText} 
                    className={"col-span-6 md:col-span-3 lg:col-span-2 md:px-8 "
                    + ((props.index % 2 > 0) ? " md:order-2" : " md:order-1 lg:col-start-2")}>
                </img>
                <div 
                    className={"col-span-6 md:col-span-3 lg:col-span-2 px-8 pb-8 md:pb-0 self-center " 
                    + ((props.index % 2 > 0) ? " md:order-1 lg:col-start-2" : " md:order-2")}>
                    <h2 className="font-serif text-xl lg:text-3xl mb-4">{image.imageHeader}</h2>
                    <p className="text-black-60">{image.imageBody}</p>
                </div>
            </article>
        </section>
    )
}