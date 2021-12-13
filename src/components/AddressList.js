export default function AddressList(props) {
    console.log(props);
    return (
        <ul className={props.color}>
            <li className="">
                E-mail: <a className="transition hover:text-black hover:underline" href={`mailto:${props.kontaktMap.email}`}>{props.kontaktMap.email}</a>
            </li>
            <li className="mb-4">
                Tel: <a className="transition hover:text-black hover:underline" href={`tel:${props.kontaktMap.phone}`}>+45 {props.kontaktMap.phone}</a>
            </li>
            <li className="">{props.kontaktMap.address}</li>
            <li className="">{(props.kontaktMap.zipCode + " " + props.kontaktMap.city)}</li>
            <li className="">{props.kontaktMap.country}</li>
        </ul>
    )
}