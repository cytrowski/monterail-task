import React from 'react';
import axios from 'axios';

import Main from '../components/Main.jsx';
import Header from '../components/Header.jsx';
import MainQuestion from '../components/MainQuestion.jsx';
import Answer from '../components/Answer.jsx';
import AnswersWrapper from '../components/AnswersWrapper.jsx';
import StatItem from '../components/subcomponents/StatItem.jsx';

export default class SingleQuestion extends React.Component {
	constructor() {
		super();

		this.state = {
			question: null,
		};
	}
	componentWillMount() {
		axios({
			method: 'POST',
			url: '/api/get-question/' + this.props.params.slug,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			data: {}
		}).then((response) => {
			let question = response.data;

			this.setState({
				question: question,
			})
		});
	}

	render() {
		if (this.state.question === null) {
			return null;
		}

		let question = this.state.question;
		let answers = [];
		let wrapperIndex = 1;

		question.answers.forEach((answer) => {
			let mainAnswer = <Answer key={answer.id} isFirst={true}
				isLast={answer.comments.length == 0} data={answer} />;
			let comments = [];
			let index = 1;

			answer.comments.forEach((comment) => {
				comments.push(<Answer key={comment.id} isFirst={false}
					isLast={answer.comments.length == index} data={comment} />);
				index++;
			});

			answers.push(
				<AnswersWrapper key={wrapperIndex}>
					{mainAnswer}
					{comments}
				</AnswersWrapper>
			);

			wrapperIndex++;
		});

		return (
			<div>
				<Header data={question} />
				<Main>
					<MainQuestion data={question} />

					<StatItem className="answers-header"
						counter={question.stats.peers}
						textAfter={"peers already answered " + question.author.name} />

					{answers}
				</Main>
			</div>
		);
	}
}
