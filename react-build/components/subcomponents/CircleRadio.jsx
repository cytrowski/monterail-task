import React from 'react';

export default class CircleRadio extends React.Component {
	render() {
		return (
			<div>
				<input type="radio" id={this.props.id} name={this.props.name}
					defaultChecked={this.props.defaultChecked} onChange={this.onChange} />

				<label className="radio radio__circle" htmlFor={this.props.id}>
					<span>{this.props.text}</span>
				</label>
			</div>
		);
	}
}
