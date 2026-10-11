const amountReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_BALANCE":
      return state + action.payload;
    case "REMOVE_BALANCE":
      return state - action.payload;
    default:
      return state;
  }
};

export default amountReducer;
