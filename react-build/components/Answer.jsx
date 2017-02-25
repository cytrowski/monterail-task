import React from 'react';
import { connect } from 'react-redux';

import { showProfile } from '../redux/actions/layout';

import Photo from './subcomponents/Photo.jsx';
import Action from './subcomponents/Action.jsx';
import Voting from './subcomponents/Voting.jsx';

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

					  <Action
							className="answer--action answer--action__mobile"
							onClick={this.showProfile.bind(this, data.author.id)}
							name={data.author.name}
							type="commented it"
							when={data.when} />
				   </div>

					<div className="answer--body">
						<Action
							className="answer--action"
							onClick={this.showProfile.bind(this, data.author.id)}
							name={data.author.name}
							type="commented it"
							when={data.when} />

					   <div className="answer--content">
				         <p className="content">{data.content}</p>
				      </div>
				   </div>

				   <div className="answer--voting">
						<Voting
							votes={data.votes+ this.state.vote}
							onUpvote={this.upvote.bind(this)}
							onDownvote={this.downvote.bind(this)} />
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
