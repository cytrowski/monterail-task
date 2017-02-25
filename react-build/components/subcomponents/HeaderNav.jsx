import React from 'react';
import { Link } from 'react-router';

export default class HeaderNav extends React.Component {
	render() {
		return (
			<div className="header--nav">
				{ this.props.hasGoBackLink &&
					<div className="go-back">
						<Link className="go-back-link" to="/"></Link>
					</div>
				}

				<h1 className="header--title">Questions</h1>

				<button className="btn btn__add"></button>
			</div>
		);
	}
}
