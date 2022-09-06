import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Err", err));
    dispatch(setProducts(response.data));
    // console.log(response.data)
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container" style={{ marginTop: 16 }}>
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
