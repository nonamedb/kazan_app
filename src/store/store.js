import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default compose(applyMiddleware(thunk))(createStore)(rootReducer);
