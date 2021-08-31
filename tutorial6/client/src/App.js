import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OrderForm from './components/OrderForm/OrderForm';
import Home from './components/Home';
import CoffeeDrinks from './components/CoffeeDrinks';
import { OrderProvider } from './context/OrderContext';

import './App.css';

const ContextRoute = ({ component, ...rest }) => {
	const Component = component;

	return (
		<Route {...rest}>
			<OrderProvider>
				<Component />
			</OrderProvider>
		</Route>
	);
};

export const routes = [
	{
		path: '/',
		component: Home,
		title: 'Home',
		exact: true,
	},
	{
		path: '/drinks',
		component: CoffeeDrinks,
		title: 'Drinks',
		exact: true,
	},
	{
		path: '/order',
		component: OrderForm,
		title: 'My Order',
	},
];

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					{routes.map(route => (
						<ContextRoute exact={route.exact} path={route.path} component={route.component} />
					))}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
