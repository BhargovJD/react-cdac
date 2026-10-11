export const addBalance = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_BALANCE",
      payload: amount,
    });
  };
};

export const removeBalance = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_BALANCE",
      payload: amount,
    });
  };
};
