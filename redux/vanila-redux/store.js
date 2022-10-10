function createStore(reducer) {
  let store;
  let handler = [];
  reducer(state, {
    type: "@@redux/INIT",
  });
  return {
    dispatch: (action) => {
      state = reducer(state, action);
      handler.forEach((fn) => fn());
    },
    subscribe: (fn) => {
      handler.push(fn);
    },
    getState: () => state,
  };
}
