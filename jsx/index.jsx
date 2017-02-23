import React from 'react';
import ReactDOM from 'react-dom';

import HeaderWithSearch from './components/HeaderWithSearch.jsx';
import Header from './components/Header.jsx';

const app = document.getElementById('app');

ReactDOM.render(
	<div>
		<HeaderWithSearch />
		<Header />
	</div>,
	app
);
