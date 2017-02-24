import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import AllQuestions from './views/AllQuestions.jsx';
import SingleQuestion from './views/SingleQuestion.jsx';

let app;

app = document.getElementById('app');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={AllQuestions} />
		<Route path="/single" component={SingleQuestion} />
	</Router>,
	app
);
