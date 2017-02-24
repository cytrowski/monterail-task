import axios from 'axios';

export function showProfile(profileId) {
	return dispatch => {
		axios({
			method: 'POST',
			url: '/api/get-user/' + profileId,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			data: {}
		}).then(response => {
			let profile = response.data;

			dispatch({
				type: 'SHOW_PROFILE',
				profile,
			});
		});
	}
}

export function hideProfile() {
	return {
		type: 'HIDE_PROFILE',
	};
}
