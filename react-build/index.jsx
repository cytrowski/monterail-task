import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store'

import AllQuestions from './views/AllQuestions.jsx';
import SingleQuestion from './views/SingleQuestion.jsx';

let app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AllQuestions} />
			<Route path="/:slug" component={SingleQuestion} />
		</Router>
	</Provider>,
	app
);
