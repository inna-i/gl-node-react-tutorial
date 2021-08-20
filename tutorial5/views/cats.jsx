export default function Cats({ items }) {
    return <ul>
        { items.map(item => (<li>{item.name}</li>))}
    </ul>;
}
