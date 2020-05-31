import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import reducers from "./reducers";

const createSagaMiddleware = createSagaMiddleware();
export default createStore(reducers, applyMiddleware(createSagaMiddleware));
createSagaMiddleware.run(sagas)