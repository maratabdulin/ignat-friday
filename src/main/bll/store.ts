import {combineReducers, legacy_createStore} from 'redux';
import {defaultReducer} from './defaultReducer';

const reducers = combineReducers({
    defaultReducer: defaultReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
