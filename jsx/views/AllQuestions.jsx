import React from 'react';
import axios from 'axios';

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
	}

	componentWillMount() {
		axios({
			method: 'POST',
			url: '/api/get-questions',
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			data: {}
		}).then((response) => {
			let data = response.data;

			this.setState({
				questions: [<Question key={data.id} data={data} />]
			})
		});
	}

	loadMore() {
		//TODO
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
