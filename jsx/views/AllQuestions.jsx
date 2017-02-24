import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';

import HeaderWithSearch from '../components/HeaderWithSearch.jsx';
import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Question from '../components/Question.jsx';
import LoadMore from '../components/subcomponents/LoadMore.jsx';

@connect(store => {
	return {
		search: store.search,
	}
})
export default class AllQuestions extends React.Component {
	constructor() {
		super();

		this.state = {
			questions: [],
			skip: 0,
			hasMore: true,
		};
	}

	componentWillMount() {
		this.loadQuestions();
	}

	loadQuestions() {
		axios({
			method: 'POST',
			url: '/api/get-questions/' + this.state.skip,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			data: {}
		}).then((response) => {
			this.setState({
				questions: this.state.questions.concat(response.data.questions),
				skip: this.state.skip + 3,
				hasMore: response.data.hasMore,
			});
		});
	}

	loadMore() {
		this.loadQuestions();
	}

	render() {
		let list = this.state.questions;
		let filteredQuestions = [];
		let questions = [];
		let search = this.props.search;

		list.forEach((item) => {
			if (search.searchText == '' || item.title.toLowerCase().indexOf(search.searchText) >= 0) {
				filteredQuestions.push(item);
			}
		});

		if (search.sortBy == 'hot') {
			filteredQuestions = _.orderBy(filteredQuestions, ['howHot'], ['desc']);
		}

		filteredQuestions.forEach((item) => {
			questions.push(<Question key={item.id} data={item} />);
		});

		return (
			<div>
				<HeaderWithSearch />
				<Main>
					<div className="box">
						{ questions }
						<LoadMore onClick={this.loadMore.bind(this)} hasMore={this.state.hasMore} />
					</div>
				</Main>
			</div>
		);
	}
}
