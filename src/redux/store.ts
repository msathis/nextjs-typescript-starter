import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";

const logger = createLogger();

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, logger))
  );
}
