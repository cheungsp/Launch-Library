import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM, { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import App from './components/App/index';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
  , document.querySelector('#root'));