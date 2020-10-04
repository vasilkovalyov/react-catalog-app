import React from 'react';
import './scss/app.scss';
import './App.scss';

import { BrowserRouter, Switch } from 'react-router-dom';

/*Routes */
import { 
	Home, 
	SignIn, 
	SignUp,
	AppRoute,
	EditProduct,
	CreateProduct
} from './routes'

/*Layouts*/
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<main className="main">
					<Switch>
						<AppRoute exact path="/" component={Home} layout={MainLayout} />
						<AppRoute path="/sign-in" component={SignIn} layout={AuthLayout} />
						<AppRoute path="/sign-up" component={SignUp} layout={AuthLayout} />
						<AppRoute path="/edit/:product" component={EditProduct} layout={MainLayout} />
						<AppRoute path="/create/" component={CreateProduct} layout={MainLayout} />
					</Switch>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
