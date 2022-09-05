import React from "react";
import { useSelector } from "react-redux";

function ProductComponent() {
  const product = useSelector((state) => state.allProducts.product);
  // const { id, title } = product[0];
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
