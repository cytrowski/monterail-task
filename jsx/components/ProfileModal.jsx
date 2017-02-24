import React from 'react';

export default class ProfileModal extends React.Component {
	constructor() {
		super();

		this.state = {
			show: false,
		};
	}

	closeModal() {
		this.setState({
			show: false,
		});
	}

	render() {
		if (!this.state.show) {
			return null;
		}

		return (
			<div>
				<div className="layer" onClick={this.closeModal.bind(this)}></div>
				<div className="modal">
					<span className="close bounce" onClick={this.closeModal.bind(this)}></span>

				   <div className="modal-wrapper">
				      <div className="modal--profile center-box">
							<img className="photo__big" src="/images/face.png" />
				         <div className="profile-name">Dr. Halima</div>
				      </div>

					   <ul className="stats-list stats-list__profile">
				         <li className="stat">
								<span className="stat--label">Member for</span>
								<span className="stat--value">5 months</span>
							</li>
				         <li className="stat">
								<span className="stat--label">Last seen</span>
								<span className="stat--value">Sunday afternoon</span>
							</li>
				         <li className="stat">
								<span className="stat--label">Activity level</span>
								<span className="stat--value">
									<i className="badge"></i>
								</span>
							</li>
				      </ul>

					   <hr className="hline" />

					   <div className="modal--nav">
				         <button className="btn btn__nav btn__prev"></button>
				         <h3 className="big-title">How it all started</h3>
				         <button className="btn btn__nav btn__next"></button>
				      </div>

						<h4 className="modal--header">That's where we have been these 5 month ago</h4>

					   <div className="square-stats-wrapper">
				         <ul className="square-stats">
				            <li className="square-stats--row">
									<span className="square-stat square-stat__1st">
										<span className="stat--counter square-stat--value">46</span>
										<span className="stat--text">peers</span>
									</span>
									<span className="square-stat square-stat__2nd">
										<span className="stat--counter square-stat--value">29</span>
				               	<span className="stat--text">discussions</span>
									</span>
				            </li>
				            <li className="square-stats--row">
									<span className="square-stat square-stat__3rd">
										<span className="stat--counter square-stat--value">19</span>
										<span className="stat--text">findings</span>
									</span>
									<span className="square-stat square-stat__4th">
										<span className="stat--counter square-stat--value">10</span>
				               	<span className="stat--text">questions</span>
									</span>
				            </li>
				         </ul>
				      </div>

				      <h4 className="modal--header">Who joined the platform the same period</h4>

						<div className="center-box">
				         <div className="card">
				            <div className="card--photo">
									<img className="photo" src="/images/face.png" />
								</div>
								<a className="card--name" href="#">Joseph Aluoh</a>
							</div>
				         <div className="card">
				            <div className="card--photo">
									<img className="photo" src="/images/face.png" />
								</div>
								<a className="card--name" href="#">Joseph Aluoh</a>
							</div>
				         <div className="card">
				            <div className="card--photo">
									<img className="photo" src="/images/face.png" />
								</div>
								<a className="card--name" href="#">Joseph Aluoh</a>
							</div>
				      </div>

				      <h4 className="modal--header">The hottest discussion these days</h4>
					</div>

				   <div className="modal--hottest-discussion">
				      <div className="modal-wrapper">
							<img className="photo" src="/images/face.png" />
				         <div className="action">
								<a className="action--name" href="#">Andrew</a>
								<span className="action--type">found The Guardian article</span>
							</div>
							<a className="title" href="#">Vegan diet to stop diabetes progress</a>

						   <ul className="stats-list stats-list__hottest">
				            <li className="stat stat__item">
									<span className="stat--counter">6</span>
									<span className="stat--text">peers involved</span>
								</li>
				            <li className="stat stat__item">
									<span className="stat--counter">3</span>
									<span className="stat--text">related discussions</span>
								</li>
				            <li className="stat stat__item">
									<span className="stat--counter">3</span>
									<span className="stat--text">conversations</span>
								</li>
				            <li className="stat stat__item">
									<span className="stat--counter">19</span>
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
