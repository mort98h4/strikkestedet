export default function VideoSection(props) {
    console.log(props);
    return (
        <section className="w-full mb-4">
            <article className="grid grid-cols-6 gap-4 flex flex-wrap">
                <div className={"col-span-6 lg:col-span-3 embed-responsive embed-responsive-16by9 " + ((props.index % 2 > 0) ? "lg:order-2" : "lg:order-1")}>
                    <iframe className="embed-responsive-item" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className={"col-span-6 lg:col-span-3 p-16 self-center " + ((props.index % 2 > 0) ? "lg:order-1" : "lg:order-2")}>
                    <span className="font-sans text-sm text-black-60">{props.videoNumber}.</span>
                    <h2 className="font-serif text-xl lg:text-3xl mb-4">{props.header}</h2>
                    <p className="text-black-60">{props.body}</p>
                </div>
            </article>
        </section>
    )
}