import React from 'react';

export default class LoadMore extends React.Component {
	render() {
		return (
			<div className="load-more">
			   { this.props.hasMore &&
					<button className="btn btn__link btn__load"
					onClick={this.props.onClick}>load more questions</button>}
				{ !this.props.hasMore && <span className="no-more-items">no more questions to load</span> }
			</div>
		);
	}
}
