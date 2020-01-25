import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/root';

let configureStore;

if (process.env.NODE_ENV === 'development') {
  configureStore = () => createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));
} else {
  configureStore = () => createStore(
    rootReducer,
    applyMiddleware(thunk),
  );
}


export default configureStore();
