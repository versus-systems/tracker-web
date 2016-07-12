import { createStore } from "redux";
import rootReducer from "../reducers";

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    typeof window === "object" && typeof window.devToolsExtension !== "undefined"
           ? window.devToolsExtension()
           : f => f
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = rootReducer.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
