import React from 'react'
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		let data = this.props.data;
		
		return (
			<header className="single-question-page">
			   <div className="header-row header-row__top">
			      <div className="header--nav">
			         <div className="go-back">
			            <Link className="go-back-link" to="/"></Link>
			         </div>
			         <h1 className="header--title">Questions</h1>
			         <button className="btn btn__add"></button>
			      </div>

				   <div className="header--last-comment stat stat__item">
						<span className="stat--text">Last time discussed</span>
						<span className="stat--counter">{data.lastDiscussed.counter}</span>
						<span className="stat--text">{data.lastDiscussed.unit} ago</span>
					</div>
			   </div>
			</header>
		)
	}
};
