import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import authReducer from "./Reducer/authReducer";

const reducer = combineReducers({ auth: authReducer });
// Using Combine Reducers here although only one reducer is present.
// Official explaination here:
// https://react-redux.js.org/using-react-redux/connect-mapstate#mapstatetoprops-will-not-run-if-the-store-state-is-the-same

// The first one is to make the chrome dev extension work
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// We are using thunk, because it allows delaying the dispatch actions
const store = createStore(reducer, composeEnhanced(applyMiddleware(thunk)));

// Thunk wraps the dispatch actions into custom functions which are available with the mapDispatchToProps

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

