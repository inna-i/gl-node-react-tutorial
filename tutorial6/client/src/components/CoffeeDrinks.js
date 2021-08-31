import { useContext } from 'react';
import OrderContext from '../context/OrderContext';
import Navigation from './Navigation';
import Quotes from './Quotes';

import latteImg from '../images/latte.png';
import cappuccinoImg from '../images/cappuccino.png';
import macchiatoImg from '../images/macchiato.png';
import esspressoWithMintImg from '../images/espressoWithMint.png';
import americanoImg from '../images/americano.png';
import mochaImg from '../images/mocha.png';

import './CoffeeDrinks.css';

// TODO use API
const drinks = [
	{ _id: '1', type: 'Cappuccino', price: 35, quantity: 100 },
	{ _id: '2', type: 'Macchiato', price: 40, quantity: 100 },
	{ _id: '3', type: 'Espresso', price: 30, quantity: 100 },
	{ _id: '4', type: 'Latte', price: 35, quantity: 100 },
	{ _id: '5', type: 'Americano', price: 35, quantity: 100 },
	{ _id: '6', type: 'Flat White', price: 35, quantity: 100 },
	{ _id: '7', type: 'Irish Coffee', price: 35, quantity: 100 },
	{ _id: '8', type: 'Cold Brew', price: 35, quantity: 100 },
];

const getImgSrc = type => {
	const imgSrcs = {
		cappuccino: cappuccinoImg,
		macchiato: macchiatoImg,
		latte: latteImg,
		americano: americanoImg,
		mocha: mochaImg,
	};

	return imgSrcs[type.toLowerCase()] || esspressoWithMintImg;
};

function CoffeeDrinks() {
	// TODO make a call to the api

    // Context API in use to share order details between components
	const { order, setOrder } = useContext(OrderContext);

	return (
		<section className="drinks-section">
            <Navigation />
            <Quotes text="We know how to make you happy" />
			<h3>Our best coffee drinks</h3>
			<div className="drinks-list">
				{drinks.map(drink => (
					<div className="drink-item" key={drink.type}>
						<img src={getImgSrc(drink.type)} alt={drink.type} />
						<p className="drink-name">
                            {drink.type}
                            <span>{` (${drink.price} UAH)`}</span>
                        </p>
						<button
                            onClick={() => setOrder([...order, drink])}
                        >
                            Add to my Order
                        </button>
					</div>
				))}
			</div>
		</section>
	);
}

export default CoffeeDrinks;
