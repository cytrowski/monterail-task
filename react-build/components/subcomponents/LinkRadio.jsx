import React from 'react';

export default class LinkRadio extends React.Component {
	render() {
		return (
			<div>
				<input type="radio" id={this.props.id} name={this.props.name}
					defaultChecked={this.props.defaultChecked}
					onChange={this.props.onChange} />

				<label className="radio radio__link" htmlFor={this.props.id}>
					{this.props.text}
				</label>
			</div>
		);
	}
}
