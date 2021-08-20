import './cats.css';

export default function Cats({ items }) {
	return (
		<div className="pictures-list">
            <h1>Welcome to cats page 🐈</h1>
            {
                items.map(item => (
                    <div className="pictures-list__box" key={`cats-${item.id}`}>
                        <img src={item.src} alt={item.name} />
                        <h4>{item.name}</h4>
                    </div>
                ))
            }  

		</div>
	);
}
