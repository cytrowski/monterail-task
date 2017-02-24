import React from 'react';
import { connect } from 'react-redux';

import { showProfile, hideProfile } from '../redux/actions/layout';

import ModalHeader from './subcomponents/ModalHeader.jsx';
import UserCard from './subcomponents/UserCard.jsx';
import Photo from './subcomponents/Photo.jsx';

@connect(store => {
	return {
		profile: store.layout.profile,
		showProfile: store.layout.showProfile,
	};
})
export default class ProfileModal extends React.Component {
	showProfile(profileId) {
		this.props.dispatch(showProfile(profileId));
	}

	closeModal() {
		this.props.dispatch(hideProfile());
	}

	render() {
		let profile, joinedCards;

		if (!this.props.showProfile || this.props.profile === null) {
			return null;
		}

		profile = this.props.profile;
		joinedCards = [];

		profile.whoJoined.forEach(user => {
			joinedCards.push(<UserCard key={user.id} data={user}
				onClick={this.showProfile.bind(this, user.id)} />);
		});

		return (
			<div>
				<div className="layer" onClick={this.closeModal.bind(this)}></div>
				<div className="modal" style={{top:window.scrollY}}>
					<span className="close bounce" onClick={this.closeModal.bind(this)}></span>

				   <div className="modal-wrapper">
				      <div className="modal--profile center-box">
							<Photo isBig={true} filename={profile.photo} />
				         <div className="profile-name">{profile.name}</div>
				      </div>

					   <ul className="stats-list stats-list__profile">
				         <li className="stat">
								<span className="stat--label">Member for</span>
								<span className="stat--value">{profile.memberFor}</span>
							</li>
				         <li className="stat">
								<span className="stat--label">Last seen</span>
								<span className="stat--value">{profile.lastSeen}</span>
							</li>
				         <li className="stat">
								<span className="stat--label">Activity level</span>
								<span className="stat--value">
									<i className="badge" data-level={profile.activityLevel}></i>
								</span>
							</li>
				      </ul>

					   <hr className="hline" />

					   <div className="modal--nav">
				         <button className="btn btn__nav btn__prev"></button>
				         <h3 className="big-title">How it all started</h3>
				         <button className="btn btn__nav btn__next"></button>
				      </div>

						<ModalHeader>That's where we have been these {profile.memberFor} ago</ModalHeader>

					   <div className="square-stats-wrapper">
				         <ul className="square-stats">
				            <li className="square-stats--row">
									<span className="square-stat square-stat__1st">
										<span className="stat--counter square-stat--value">{profile.stats.peers}</span>
										<span className="stat--text">peers</span>
									</span>
									<span className="square-stat square-stat__2nd">
										<span className="stat--counter square-stat--value">{profile.stats.discussions}</span>
				               	<span className="stat--text">discussions</span>
									</span>
				            </li>
				            <li className="square-stats--row">
									<span className="square-stat square-stat__3rd">
										<span className="stat--counter square-stat--value">{profile.stats.findings}</span>
										<span className="stat--text">findings</span>
									</span>
									<span className="square-stat square-stat__4th">
										<span className="stat--counter square-stat--value">{profile.stats.questions}</span>
				               	<span className="stat--text">questions</span>
									</span>
				            </li>
				         </ul>
				      </div>

				      <ModalHeader>Who joined the platform the same period</ModalHeader>

						<div className="center-box">
				         {joinedCards}
				      </div>

				      <ModalHeader>The hottest discussion these days</ModalHeader>
					</div>

				   <div className="modal--hottest-discussion">
				      <div className="modal-wrapper">
							<Photo filename="sarah.jpg" profileId="4" />
				         <div className="action">
								<a className="action--name">Sarah</a>
								<span className="action--type">found The Guardian article</span>
							</div>
							<span className="title">Cras in purus eu magna vulputate</span>

						   <ul className="stats-list stats-list__hottest">
				            <li className="stat stat__item">
									<span className="stat--counter">4</span>
									<span className="stat--text">peers involved</span>
								</li>
				            <li className="stat stat__item">
									<span className="stat--counter">36</span>
									<span className="stat--text">related discussions</span>
								</li>
				            <li className="stat stat__item">
									<span className="stat--counter">18</span>
									<span className="stat--text">conversations</span>
								</li>
				            <li className="stat stat__item">
									<span className="stat--counter">90</span>
									<span className="stat--text">upvotes</span>
								</li>
				         </ul>
				      </div>
				   </div>
				</div>
			</div>
		);
	}
}
