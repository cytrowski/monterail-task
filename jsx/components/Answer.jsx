import React from 'react';

export default class Answer extends React.Component {
	render() {
		let classes = [];
		let buttonText;

		if (!this.props.isFirst) {
			classes.push('answer__pushed');
		} else {
			classes.push('answer__main')
		}

		if (this.props.isLast) {
			classes.push('answer__last');
		}

		classes = classes.join(' ');

		if (this.props.isFirst && this.props.isLast) {
			buttonText = 'COMMENT';
		} else {
			buttonText = 'CONTINUE discussion';
		}

		return (
			<div>
				<div className={'answer ' + classes}>
				   <div className="answer--photo">
						<img className="photo" src="/images/face.png" />
				      <div className="action answer--action answer--action__mobile">
							<a className="action--name" href="#">Adam</a>
							<span className="action--type">commented it</span>
							<span className="action--time">yesterday</span>
						</div>
				   </div>
				   <div className="answer--body">
				      <div className="action answer--action">
							<a className="action--name" href="#">Adam</a>
							<span className="action--type">commented it</span>
							<span className="action--time">yesterday</span>
						</div>
				      <div className="answer--content">
				         <p className="content">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
							</p>
				      </div>
				   </div>
				   <div className="answer--voting">
				      <div className="stat stat__item">
							<span className="stat--counter">19</span>
							<span className="stat--text">upvotes</span>
							<span className="stat--controls">
								<button className="btn btn__upvote"></button>
								<button className="btn btn__downvote"></button>
							</span>
						</div>
				   </div>
				</div>
				{ this.props.isLast &&
					<div class="item--button">
						<button class="btn btn__answer">{ buttonText }</button>
					</div>
				}
			</div>
		);
	}
}
