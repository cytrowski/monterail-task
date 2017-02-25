import React from 'react';

export default class Action extends React.Component {
	render() {
		let className = '';

		if (this.props.className) {
			className = this.props.className;
		}

		return (
			<div className={"action " + className}>
				<a className="action--name" onClick={this.props.onClick}>
					{this.props.name}
				</a>

				<span className="action--type">
					{this.props.type}
				</span>

				{ this.props.when &&
					<span className="action--time">
						{this.props.when}
					</span>
				}
			</div>
		);
	}
}
