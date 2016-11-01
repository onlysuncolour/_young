import { combineReducers } from 'redux'

import {store} from './reducers/store1'
import {store2} from './reducers/store2'

const stores = combineReducers({
  store,
  store2
})

module.exports = {stores}
