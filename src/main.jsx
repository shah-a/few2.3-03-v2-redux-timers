import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import { updateTime } from './actions';
import { saveState, loadState } from './utils';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

let lastUpdate = Date.now();
setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdate;
  lastUpdate = now;
  store.dispatch(updateTime(deltaTime));
}, 50);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
