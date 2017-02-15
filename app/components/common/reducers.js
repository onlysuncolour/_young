import { combineReducers } from 'redux'

import {reducer1} from './reducers/reducer1'
import {reducer2} from './reducers/reducer2'

const reducers = combineReducers({
  reducer,
  reducer2
})

module.exports = {reducers}
