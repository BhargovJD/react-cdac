import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Shop() {
  const dispatch = useDispatch();
  const { addBalance, removeBalance } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  return (
    <div className="container my-3 text-center">
      <h3>Add/Remove Balance</h3>
      <button
        type="button"
        class="btn btn-primary m-3"
        onClick={() => addBalance(100)}
      >
        +
      </button>
      <span>Update Balance</span>
      <button
        type="button"
        class="btn btn-primary m-3"
        onClick={() => removeBalance(50)}
      >
        -
      </button>
    </div>
  );
}

export default Shop;
