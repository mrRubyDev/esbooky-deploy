import React, { useState } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./src/redux/reducers";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import LoginHome from "./src/screens/login-home-navigator";

// const store = createStore(
// 	reducers,
// 	{},
// 	//
// 	applyMiddleware(thunk)
// );

const store = createStore(
	reducers,
	{},
	composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
	return (
		<Provider store={store}>
			<LoginHome />
		</Provider>
	);
};

export default App;
