import React from 'react'
import { connect } from 'react-redux';

import { filterQuestions, resetSearchFilters, sortBy } from '../redux/actions/search';

import HeaderNav from './subcomponents/HeaderNav.jsx';
import CircleRadio from './subcomponents/CircleRadio.jsx';
import LinkRadio from './subcomponents/LinkRadio.jsx';

@connect(store => {
	return {
		search: store.search,
	};
})
export default class HeaderWithSearch extends React.Component {
	constructor() {
		super();

		this.state = {
			searchText: '',
			searchIn: 'all',
			sortBy: 'recent'
		};
	}

	componentWillUnmount() {
		this.props.dispatch(resetSearchFilters());
	}

	updateSearchText(e) {
		this.setState({
			searchText: e.target.value,
		});
	}

	updateSearchCategory(e) {
		this.setState({
			searchIn: e.target.id,
		})
	}

	updateSortFactor(e) {
		this.setState({
			sortBy: e.target.id,
		});

		this.props.dispatch(sortBy(e.target.id));
	}

	submit(e) {
		e.preventDefault();

		this.props.dispatch(filterQuestions(
			this.state.searchText.toLowerCase(),
			this.state.searchIn,
			this.state.sortBy,
		))
	}

	render() {
		return (
			<header>
			   <div className="header-row header-row__top">
			      <HeaderNav hasGoBackLink={false} />

				   <div className="header--form-fields">
			         <div className="header--category">
			            <CircleRadio id="shelf" name="category" defaultChecked={false}
								onChange={this.updateSearchCategory.bind(this)} text="My shelf" />

							<CircleRadio id="all" name="category" defaultChecked={true}
								onChange={this.updateSearchCategory.bind(this)} text="All questions" />
			         </div>

					   <div className="header--sorting">
							<span className="sorting-text">Sort by:</span>

							<LinkRadio id="recent" name="sort-by" defaultChecked={true}
								onChange={this.updateSortFactor.bind(this)} text="recent" />

							<span className="sorting-text">or</span>

							<LinkRadio id="hot" name="sort-by" defaultChecked={false}
								onChange={this.updateSortFactor.bind(this)} text="hot" />
			         </div>
			      </div>
			   </div>

				<form className="search-form header-row" method="post" onSubmit={this.submit.bind(this)}>
			      <input className="input input__search" placeholder="Search questions"
						defaultValue={this.state.searchText} onChange={this.updateSearchText.bind(this)} />
			      <button className="btn btn__search" type="submit">SEARCH</button>
			   </form>
			</header>
		)
	}
};
