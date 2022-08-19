import React from "react";
import { useSelector } from "react-redux";

function ProductListing() {
  const products = useSelector((state) => state);
  return (
    <div className="ui grid container" style={{ marginTop: 16 }}>
      <h1>Product Listing</h1>
    </div>
  );
}

export default ProductListing;
