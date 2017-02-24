const defaultState = {
	profile: null,
	showProfile: false,
};

export default function reducer(state=defaultState, action) {
	switch (action.type) {
		case 'SHOW_PROFILE': {
			return {...state, profile: action.profile, showProfile: true};
		}
		case 'HIDE_PROFILE': {
			return {...defaultState};
		}
	}

	return {...state}
}
