import React from 'react';

export default class MainQuestion extends React.Component {
	render() {
		return (
			<div className="item item__main box">
			   <div className="item--cells-wrapper">
			      <div className="item--cell__first">
			         <div className="item--header__extended">
			            <div className="item--header--photo">
								<img className="photo" src="/images/face.png" />
							</div>
			            <div className="item--header--text">
			               <div className="action">
									<a className="action--name" href="#">Adam</a>
									<span className="action--type">is asking</span>
								</div>
								<span className="title" href="#">Questioning the Idea of Good Carbs, Bad Carbs</span>
							</div>
			         </div>
			         <div className="item--body__extended">
			            <div className="item--space"></div>
			            <div className="item--content">
			               <p className="content">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
			                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			               </p>
			            </div>
			         </div>
			      </div>
			      <div className="item--cell__second">
			         <div className="item--action">
							<span className="item--action--link bounce" href="#">unfollow</span>
						</div>
			         <div className="item--voting">
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
			   </div>
			   <div className="item--button">
			      <button className="btn btn__answer">GIVE new answer</button>
			   </div>
			</div>
		);
	}
}
