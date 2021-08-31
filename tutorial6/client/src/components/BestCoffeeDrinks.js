import latteImg from '../images/latte.png';
import cappuccinoImg from '../images/cappuccino.png';
import macchiatoImg from '../images/macchiato.png';
import esspressoWithMintImg from '../images/espressoWithMint.png';
import americanoImg from '../images/americano.png';
import mochaImg from '../images/mocha.png';

import './CoffeeDrinks.css';

const drinks = [
	{ type: 'Cappuccino', price: 35, quantity: 100 },
	{ type: 'Macchiato', price: 40, quantity: 100 },
	{ type: 'Espresso', price: 30, quantity: 100 },
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

function BestCoffeeDrinks() {
	return (
		<section className="drinks-section">
			<h3>Our best coffee drinks</h3>
			<div className="drinks-list">
				{drinks.map(drink => (
					<div className="drink-item" key={drink.type}>
						<img src={getImgSrc(drink.type)} alt={drink.type} />
						<p className="drink-name">
                            {drink.type}
                        </p>
					</div>
				))}
			</div>
		</section>
	);
}

export default BestCoffeeDrinks;
