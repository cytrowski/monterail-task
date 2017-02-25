import React from 'react';

export default class SquareState extends React.Component {
	render() {
		return (
			<span className={"square-stat square-stat__" + this.props.order}>
				<span className="stat--counter square-stat--value">{this.props.counter}</span>

				<span className="stat--text">{this.props.text}</span>
			</span>
		);
	}
}
