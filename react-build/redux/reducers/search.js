const defaultState = {
	searchText: '',
	searchIn: 'all',
	sortBy: 'recent',
};

export default function reducer(state=defaultState, action) {
	switch (action.type) {
		case 'FILTER_QUESTIONS': {
			return {
				...state,
				searchText: action.searchText,
				searchIn: action.searchIn,
				sortBy: action.sortBy,
			};
		}
		case 'RESET_FILTERS': {
			return {
				...defaultState,
			};
		}
		case 'SORT': {
			return {
				...defaultState,
				sortBy: action.sortBy,
			};
		}
	}

	return {...state}
}
