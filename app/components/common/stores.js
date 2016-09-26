import { combineReducers } from 'redux'

import {store1} from './reducers/store1'
import {store2} from './reducers/store2'

const stores = combineReducers({
  store1,
  store2
})

module.exports = {stores}
