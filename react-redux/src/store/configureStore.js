import { 
  createStore,
  applyMiddleware,
  compose,
  combineReducers 
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {reducers} from '~/redux'
import DevTools from '~/containers/DevTools';


const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument(),
);


export default function configureStore(initialState) {
  let store = createStore(combineReducers(reducers), initialState, enhancer);
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../redux/reducers', () =>
                                   store.replaceReducer(require('../redux/reducers')/*.default if you use Babel 6+ */)
    );
  }
  return store;
}

