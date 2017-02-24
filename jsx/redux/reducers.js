import { combineReducers } from 'redux'

import layout from './reducers/layout'
import search from './reducers/search'

export default combineReducers({
	layout,
	search
});
