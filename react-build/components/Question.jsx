import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { showProfile } from '../redux/actions/layout';

import Photo from './subcomponents/Photo.jsx';
import Action from './subcomponents/Action.jsx';
import Activity from './subcomponents/Activity.jsx';
import StatItem from './subcomponents/StatItem.jsx';

@connect(store => {
	return {}
})
export default class Question extends React.Component {
	showProfile(profileId) {
		this.props.dispatch(showProfile(profileId));
	}

	render() {
		let data = this.props.data;
		let activities = [];

		data.activities.forEach(activity => {
			activities.push(<Activity key={activity.id} data={activity} />)
		});

		return (
			<div className="item__spaced">
			   <div className="item--header">
			      <div className="item--header--photo">
						<Photo filename={data.author.photo} profileId={data.author.id} />
					</div>

					<div className="item--header--text">
						<Action name={data.author.name}
							onClick={this.showProfile.bind(this, data.author.id)}
							type={data.action.description} />

						<Link className="title" to={'/' + data.slug}>{data.title}</Link>
					</div>
			   </div>

				<div className="item--main">
			      <div className="item--body">
			         <div className="item--activity__main">
			            <div className="item--activity--name">{data.action.type}</div>
			         </div>

						<div className="item--activities-summary">
			            <div className="item--activities-counter">{data.moreActivities}</div>
			            <div className="item--activities-summary--more">more<br />activities</div>
			         </div>

						{ activities }
			      </div>

					<div className="item--stats">
						<StatItem counter={data.stats.discussions}
							textAfter="related discussions" />

						<StatItem counter={data.stats.peers}
							textAfter="peers involved" />

						<StatItem counter={data.stats.conversations}
							textAfter="conversations" />
			      </div>
			   </div>
			</div>
		);
	}
}
