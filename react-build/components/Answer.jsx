import React from 'react';
import { connect } from 'react-redux';

import { showProfile } from '../redux/actions/layout';

import Photo from './subcomponents/Photo.jsx';

@connect(store => {
	return {};
})
export default class Answer extends React.Component {
	constructor() {
		super();

		this.state = {
			vote: 0
		};
	}

	showProfile(profileId) {
		this.props.dispatch(showProfile(profileId));
	}

	upvote() {
		this.setState({
			vote: Math.min(1, this.state.vote + 1),
		});
	}

	downvote() {
		this.setState({
			vote: Math.max(-1, this.state.vote - 1),
		});
	}

	render() {
		let classes = [];
		let buttonText, data;

		if (!this.props.isFirst) {
			classes.push('answer__pushed');
		} else {
			classes.push('answer__main')
		}

		if (this.props.isLast) {
			classes.push('answer__last');
		}

		classes = classes.join(' ');

		if (this.props.isFirst && this.props.isLast) {
			buttonText = 'COMMENT';
		} else {
			buttonText = 'CONTINUE discussion';
		}

		data = this.props.data;

		return (
			<div>
				<div className={'answer ' + classes}>
				   <div className="answer--photo">
						<Photo filename={data.author.photo} profileId={data.author.id} />
				      <div className="action answer--action answer--action__mobile">
							<span className="action--name"
								onClick={this.showProfile.bind(this, data.author.id)}>{data.author.name}</span>
							<span className="action--type">commented it</span>
							<span className="action--time">{data.when}</span>
						</div>
				   </div>
				   <div className="answer--body">
				      <div className="action answer--action">
							<a className="action--name"
								onClick={this.showProfile.bind(this, data.author.id)}>{data.author.name}</a>
							<span className="action--type">commented it</span>
							<span className="action--time">{data.when}</span>
						</div>
				      <div className="answer--content">
				         <p className="content">{data.content}</p>
				      </div>
				   </div>
				   <div className="answer--voting">
				      <div className="stat stat__item">
							<span className="stat--counter">{data.votes+ this.state.vote}</span>
							<span className="stat--text">upvotes</span>
							<span className="stat--controls">
								<button className="btn btn__upvote" onClick={this.upvote.bind(this)}></button>
								<button className="btn btn__downvote" onClick={this.downvote.bind(this)}></button>
							</span>
						</div>
				   </div>
				</div>
				{ this.props.isLast &&
					<div class="item--button">
						<button class="btn btn__answer">{ buttonText }</button>
					</div>
				}
			</div>
		);
	}
}
