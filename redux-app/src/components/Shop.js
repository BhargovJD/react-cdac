import React from "react";

function Shop() {
  return (
    <div className="container my-3 text-center">
      <h3>Apple Watch : 50 rupees</h3>
      <button type="button" class="btn btn-primary m-3">
        +
      </button>
      <span>Add this item to your shopping cart</span>
      <button type="button" class="btn btn-primary m-3">
        -
      </button>
    </div>
  );
}

export default Shop;
