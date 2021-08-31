import { Link } from 'react-router-dom';
import { useContext } from 'react';

import OrderContext from '../context/OrderContext';
import { routes } from '../App';

import './Navigation.css';

export default function Navigation() {
	const { order } = useContext(OrderContext);
    console.log(order);

	return (
		<ul className="nav">
			{routes.map(route => (
				<li className="nav-item">
					<Link to={route.path}>
                        {route.title === 'My Order'
                        ? `${route.title} (${order.length})`
                        : route.title}
                    </Link>
				</li>
			))}
		</ul>
	);
}
