import React from 'react';

import ProfileModal from './ProfileModal.jsx';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<ProfileModal />

				<main className="box container">
					<div className="wrapper">
						{ this.props.children }
					</div>
				</main>
			</div>
		);
	}
}
