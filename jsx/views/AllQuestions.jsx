import React from 'react';

import HeaderWithSearch from '../components/HeaderWithSearch.jsx';
import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Question from '../components/Question.jsx';
import LoadMore from '../components/LoadMore.jsx';

export default class AllQuestions extends React.Component {
	constructor() {
		super();

		this.state = {
			questions: []
		};

		this.lastKey = 5;

		for (let i = 1; i <= 5; i++) {
			this.state.questions.push(<Question key={i} />);
		}
	}

	loadMore() {
		let newQuestions = this.state.questions;

		for (let i = 1; i <= 5; i++) {
			newQuestions.push(<Question key={i + this.lastKey} />);
			this.lastKey++;
		}

		this.setState({
			questions: newQuestions,
		});
	}

	render() {
		return (
			<div>
				<HeaderWithSearch />
				<Main>
					<div className="box">
						{ this.state.questions }
						<LoadMore onClick={this.loadMore.bind(this)} />
					</div>
				</Main>
			</div>
		);
	}
}
