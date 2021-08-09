import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './browser-history';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createAPI from './services/api';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
