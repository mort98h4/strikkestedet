import Link from 'next/link';

export default function Button(props){
    const classList = `${props.fullWidth ? "w-full " : "w-60 lg:w-80 "}bg-btn transition hover:bg-btn-hover font-sans text-xl lg:text-2xl text-white min-w-40 py-4 relative`;
    return (
        props.href ? 
        <Link href={props.href}>
            <button type={props.type} className={classList}>{props.children}</button>
        </Link>
        :
        <button type={props.type} className={classList}>{props.children}</button>
    )
}