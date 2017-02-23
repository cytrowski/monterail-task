import React from 'react'

export default class Header extends React.Component {
	render() {
		return (
			<header class="single-question-page">
			   <div class="header-row header-row__top">
			      <div class="header--nav">
			         <div class="go-back">
			            <a class="go-back-link" href="/"></a>
			         </div>
			         <h1 class="header--title">Questions</h1>
			         <button class="btn btn__add"></button>
			      </div>

				   <div class="header--last-comment stat stat__item">
						<span class="stat--text">Last time discussed</span>
						<span class="stat--counter">12</span>
						<span class="stat--text">days ago</span>
					</div>
			   </div>
			</header>
		)
	}
};
