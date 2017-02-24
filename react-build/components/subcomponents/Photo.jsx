import React from 'react';
import { connect } from 'react-redux';

import { showProfile } from '../../redux/actions/layout';

@connect(store => {
	return {};
})
export default class Photo extends React.Component {
	showProfile(profileId) {
		if (!profileId) {
			return;
		}

		this.props.dispatch(showProfile(profileId));
	}

	render() {
		let className = 'photo';

		if (this.props.isBig) {
			className += '__big';
		}

		return (
			<img className={className} src={'/photo/' + this.props.filename}
				onClick={this.showProfile.bind(this, this.props.profileId)}/>
		);
	}
}
