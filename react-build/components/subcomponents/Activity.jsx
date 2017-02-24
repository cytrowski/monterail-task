import React from 'react';

import Photo from './Photo.jsx';

export default class Activity extends React.Component {
	render() {
		let classSufix = '';
		let data = this.props.data;

		if (this.props.data.action.toLowerCase() == 'answered') {
			classSufix = '__answered';
		}

		return (
			<div className="item--activity">
				<div className="photo-box">
					<Photo filename={data.author.photo} profileId={data.author.id} />
				</div>
				<div className={'item--activity--name' + classSufix}>
					{data.action}
				</div>
			</div>
		);
	}
}
