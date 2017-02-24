import React from 'react';

import Main from '../components/Main.jsx';
import Header from '../components/Header.jsx';
import MainQuestion from '../components/MainQuestion.jsx';
import Answer from '../components/Answer.jsx';

export default class SingleQuestion extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Main>
					<MainQuestion />

					<div className="stat stat__item answers-header">
						<span className="stat--counter">2</span>
						<span className="stat--text">peers already answered Adam</span>
					</div>

					<div class="answers-wrapper">
						<Answer isFirst={true} isLast={false} />
						<Answer isFirst={false} isLast={true} />
					</div>

					<div class="answers-wrapper">
						<Answer isFirst={true} isLast={true} />
					</div>
				</Main>
			</div>
		);
	}
}
