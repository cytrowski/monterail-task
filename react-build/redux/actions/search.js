
export function filterQuestions(searchText, searchIn, sortBy) {
	return {
		type: 'FILTER_QUESTIONS',
		searchText,
		searchIn,
		sortBy,
	};
}

export function resetSearchFilters() {
	return {
		type: 'RESET_FILTERS',
	};
}

export function sortBy(sortBy) {
	return {
		type: 'SORT',
		sortBy,
	};
}
