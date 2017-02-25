import React from 'react'

import HeaderNav from './subcomponents/HeaderNav.jsx';
import StatItem from './subcomponents/StatItem.jsx';

export default class Header extends React.Component {
	render() {
		let data = this.props.data;

		return (
			<header className="single-question-page">
			   <div className="header-row header-row__top">
			      <HeaderNav hasGoBackLink={true} />

				   <StatItem className="header--last-comment"
						textBefore="Last time discussed"
						counter={data.lastDiscussed.counter}
						textAfter={data.lastDiscussed.unit + ' ago'} />
			   </div>
			</header>
		)
	}
};
