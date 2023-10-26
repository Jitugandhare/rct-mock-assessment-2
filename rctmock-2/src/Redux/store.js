
import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import quizReducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  quiz: quizReducer,
  
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
