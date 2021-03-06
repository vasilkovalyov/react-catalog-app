import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'

import './scss/app.scss';
import './App.scss';

import { BrowserRouter, Switch } from 'react-router-dom';

import actions from './redux/actions';

/*Layouts*/
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'

/*Routes */
import { 
	Home, 
	SignIn, 
	SignUp,
	AppRoute,
	EditProduct,
	CreateProduct
} from './routes'

import firebase from './firebase';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		firebase.auth.onAuthStateChanged(function(user) {
			dispatch(actions.auth_user(user));
		})
		dispatch(actions.load_products());
		
	}, [dispatch])
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
