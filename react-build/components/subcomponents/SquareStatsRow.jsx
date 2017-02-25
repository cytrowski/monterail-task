import React from 'react';

export default class SquareStatsRow extends React.Component {
	render() {
		return (
			<li className="square-stats--row">
				{this.props.children}
			</li>
		);
	}
}
