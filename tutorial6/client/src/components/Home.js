import Header from './Header';
import Quotes from './Quotes';
import BestCoffeeDrinks from './BestCoffeeDrinks';
import Navigation from './Navigation';

export default function Home() {
	return (
		<>
			<Navigation />
			<Header />
			<BestCoffeeDrinks />
			<Quotes />
		</>
	);
}
