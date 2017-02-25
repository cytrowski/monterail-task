import React from 'react';

export default class ModalHeader extends React.Component {
	render() {
		return (
			<h4 className="modal--header">{this.props.children}</h4>
		);
	}
}
