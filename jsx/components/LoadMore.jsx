import React from 'react';

export default class LoadMore extends React.Component {
	render() {
		return (
			<div className="load-more">
			   <button className="btn btn__link btn__load"
					onClick={this.props.onClick}>load more questions</button>
			</div>
		);
	}
}
