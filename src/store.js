import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
	reducer: rootReducer,
	middleware: middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
