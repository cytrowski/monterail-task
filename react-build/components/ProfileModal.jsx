import React from 'react';
import { connect } from 'react-redux';

import { showProfile, hideProfile } from '../redux/actions/layout';

import ModalHeader from './subcomponents/ModalHeader.jsx';
import UserCard from './subcomponents/UserCard.jsx';
import Photo from './subcomponents/Photo.jsx';
import Action from './subcomponents/Action.jsx';
import Stat from './subcomponents/Stat.jsx';
import StatItem from './subcomponents/StatItem.jsx';
import SquareStat from './subcomponents/SquareStat.jsx';
import SquareStatsRow from './subcomponents/SquareStatsRow.jsx';

@connect(store => {
	return {
		profile: store.layout.profile,
		showProfile: store.layout.showProfile,
	};
})
export default class ProfileModal extends React.Component {
	constructor() {
		super();

		this.topPosition = null;
	}

	showProfile(profileId) {
		this.props.dispatch(showProfile(profileId));
	}

	closeModal() {
		this.topPosition = null;
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

		if (this.topPosition === null) {
			this.topPosition = window.scrollY;
		}

		return (
			<div>
				<div className="layer" onClick={this.closeModal.bind(this)}></div>
				<div className="modal" style={{top: this.topPosition}}>
					<span className="close bounce" onClick={this.closeModal.bind(this)}></span>

				   <div className="modal-wrapper">
				      <div className="modal--profile center-box">
							<Photo isBig={true} filename={profile.photo} />
				         <div className="profile-name">{profile.name}</div>
				      </div>

					   <ul className="stats-list stats-list__profile">
							<Stat text="Member for" value={profile.memberFor} />

							<Stat text="Last seen" value={profile.lastSeen} />

							<Stat text="Activity level" value={profile.activityLevel} hasBadge={true} />
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
				            <SquareStatsRow>
									<SquareStat order="1st"
										counter={profile.stats.peers} text="peers" />

									<SquareStat order="2nd"
										counter={profile.stats.discussions} text="discussions" />
								</SquareStatsRow>


								<SquareStatsRow>
									<SquareStat order="3rd"
										counter={profile.stats.findings} text="findings" />

									<SquareStat order="4th"
										counter={profile.stats.questions} text="questions" />
								</SquareStatsRow>
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

							<Action name="Sarah" onClick={this.showProfile.bind(this, 4)}
								type="found the Guardian article" />

							<span className="title">Cras in purus eu magna vulputate</span>

						   <ul className="stats-list stats-list__hottest">
								<StatItem tag="li" counter="4" textAfter="peers involved" />

								<StatItem tag="li" counter="36" textAfter="related discussions" />

								<StatItem tag="li" counter="18" textAfter="conversations" />

								<StatItem tag="li" counter="90" textAfter="upvotes" />
				         </ul>
				      </div>
				   </div>
				</div>
			</div>
		);
	}
}
