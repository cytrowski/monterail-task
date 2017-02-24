import React from 'react';

export default class AnswersWrapper extends React.Component {
	render() {
		return (
			<div class="answers-wrapper">
				{this.props.children}
			</div>
		);
	}
}
