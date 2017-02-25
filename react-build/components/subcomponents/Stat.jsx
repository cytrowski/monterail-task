import React from 'react';

export default class Stat extends React.Component {
	render() {
		return (
			<li className="stat">
				<span className="stat--label">{this.props.text}</span>

				<span className="stat--value">
					{ !this.props.hasBadge && this.props.value }
					{ this.props.hasBadge &&
						<i className="badge" data-level={this.props.value}></i>
					}
				</span>
			</li>
		);
	}
}
