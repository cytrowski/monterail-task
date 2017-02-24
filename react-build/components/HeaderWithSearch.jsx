import React from 'react'
import { connect } from 'react-redux';

import { filterQuestions, resetSearchFilters, sortBy } from '../redux/actions/search';

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
			      <div className="header--nav">
			         <h1 className="header--title">Questions</h1>
			         <button className="btn btn__add"></button>
			      </div>

				   <div className="header--form-fields">
			         <div className="header--category">
			            <input type="radio" id="shelf" name="category"
								defaultChecked={false} onChange={this.updateSearchCategory.bind(this)} />
			            <label className="radio radio__circle" for="shelf">
								<span>My shelf</span>
							</label>
			            <input type="radio" id="all" name="category"
								defaultChecked={true} onChange={this.updateSearchCategory.bind(this)} />
			            <label className="radio radio__circle" for="all">
								<span>All questions</span>
							</label>
			         </div>

					   <div className="header--sorting">
							<span className="sorting-text">Sort by:</span>
			            <input type="radio" id="recent" name="sort-by"
								defaultChecked={true} onChange={this.updateSortFactor.bind(this)} />
			            <label className="radio radio__link" for="recent">recent</label>
							<span className="sorting-text">or</span>
			            <input type="radio" id="hot" name="sort-by"
								defaultChecked={false} onChange={this.updateSortFactor.bind(this)} />
			            <label className="radio radio__link" for="hot">hot</label>
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
