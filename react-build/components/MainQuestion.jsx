import React from 'react';
import { connect } from 'react-redux';

import { showProfile } from '../redux/actions/layout';

import Action from './subcomponents/Action.jsx';
import Photo from './subcomponents/Photo.jsx';
import Voting from './subcomponents/Voting.jsx';

@connect(store => {
	return {};
})
export default class MainQuestion extends React.Component {
	constructor() {
		super();

		this.state = {
			vote: 0,
			followText: 'unfollow',
			following: true,
		};
	}

	showProfile(profileId) {
		this.props.dispatch(showProfile(profileId));
	}

	toggleFollow() {
		if (this.state.following) {

			this.setState({
				followText: 'follow',
				following: false,
			});

		} else {

			this.setState({
				followText: 'unfollow',
				following: true,
			});

		}
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
		let data = this.props.data;

		return (
			<div className="item item__main box">
			   <div className="item--cells-wrapper">
			      <div className="item--cell__first">
			         <div className="item--header__extended">
			            <div className="item--header--photo">
								<Photo filename={data.author.photo} profileId={data.author.id} />
							</div>

						   <div className="item--header--text">
								<Action
									onClick={this.showProfile.bind(this, data.author.id)}
									name={data.author.name}
								 	type={data.action.description} />
								<span className="title" href="#">{data.title}</span>
							</div>
			         </div>

						<div className="item--body__extended">
			            <div className="item--space"></div>

							<div className="item--content">
			               <p className="content">{data.content}</p>
			            </div>
			         </div>
			      </div>

				   <div className="item--cell__second">
			         <div className="item--action">
							<span className="item--action--link bounce"
								onClick={this.toggleFollow.bind(this)}>{this.state.followText}</span>
						</div>

					   <div className="item--voting">
							<Voting
								votes={data.votes+ this.state.vote}
								onUpvote={this.upvote.bind(this)}
								onDownvote={this.downvote.bind(this)} />
			         </div>
			      </div>
			   </div>

				<div className="item--button">
			      <button className="btn btn__answer">GIVE new answer</button>
			   </div>
			</div>
		);
	}
}
