import React from 'react';
import { Link } from 'react-router';

export default class Question extends React.Component {
	render() {
		return (
			<div className="item__spaced">
			   <div className="item--header">
			      <div className="item--header--photo">
						<img className="photo" src="/images/face.png" />
					</div>
			      <div className="item--header--text">
			         <div className="action">
							<a className="action--name" href="/modal">Joseph</a>
							<span className="action--type">found on new york times</span>
						</div>
						<Link className="title" to="/single">Questioning the Idea of Good Carbs, Bad Carbs</Link>
					</div>
			   </div>
			   <div className="item--main">
			      <div className="item--body">
			         <div className="item--activity__main">
			            <div className="item--activity--name">Found</div>
			         </div>
			         <div className="item--activities-summary">
			            <div className="item--activities-counter">6</div>
			            <div className="item--activities-summary--more">more<br />activities</div>
			         </div>
			         <div className="item--activity">
			            <div className="photo-box">
								<img className="photo" src="/images/face.png" />
							</div>
			            <div className="item--activity--name">Commented</div>
			         </div>
			         <div className="item--activity">
			            <div className="photo-box">
								<img className="photo" src="/images/face.png" />
							</div>
			            <div className="item--activity--name__answered">Answered</div>
			         </div>
			         <div className="item--activity">
			            <div className="photo-box">
								<img className="photo" src="/images/face.png" />
							</div>
			            <div className="item--activity--name__answered">Answered</div>
			         </div>
			         <div className="item--activity">
			            <div className="photo-box">
								<img className="photo" src="/images/face.png" />
							</div>
			            <div className="item--activity--name__answered">Answered</div>
			         </div>
			      </div>
			      <div className="item--stats">
			         <div className="stat stat__item">
							<span className="stat--counter">2</span>
							<span className="stat--text">related discussions</span>
						</div>
			         <div className="stat stat__item">
							<span className="stat--counter">8</span>
							<span className="stat--text">peers involved</span>
						</div>
			         <div className="stat stat__item">
							<span className="stat--counter">5</span>
							<span className="stat--text">conversations</span>
						</div>
			      </div>
			   </div>
			</div>
		);
	}
}
