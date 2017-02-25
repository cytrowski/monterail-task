import React from 'react';

export default class Voting extends React.Component {
	render() {
		let statText = 'upvotes';

		switch (this.props.votes) {
			case 1: {
				statText = 'upvote';
				break;
			}
			case -1: {
				statText = 'downvote';
				break;
			}
			default: {
				if (this.props.votes < 0) {
					statText = 'downvotes';
				}
			}
		}

		return (
			<div className="stat stat__item">
				<span className="stat--counter">{Math.abs(this.props.votes)}</span>

				<span className="stat--text">{statText}</span>

				<span className="stat--controls">
					<button className="btn btn__upvote" onClick={this.props.onUpvote}></button>

					<button className="btn btn__downvote" onClick={this.props.onDownvote}></button>
				</span>
			</div>
		);
	}
}
