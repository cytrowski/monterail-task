import React from 'react';

import Photo from './Photo.jsx';

export default class UserCard extends React.Component {
	render() {
		let data = this.props.data;

		return (
			<div className="card">
			   <div className="card--photo">
					<Photo filename={data.photo} profileId={data.id} />
			   </div>

			   <span className="card--name" onClick={this.props.onClick}>{data.name}</span>
			</div>
		);
	}
}
