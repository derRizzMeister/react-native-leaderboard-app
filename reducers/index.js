import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from '../reducers/users/Users';

const rootReducer = combineReducers({
    users: userReducer,
});

const store = createStore(rootReducer);

export default store;
