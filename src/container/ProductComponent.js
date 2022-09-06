import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card" style={{height:'400px',overflow:'hidden',padding:'20px'}}>
              <div className="image">
                <img src={image} alt={title} style={{height:'200px'}}/>
              </div>
              <div className="content" style={{textAlign:'left'}}>
                <div className="header">{title}</div>
                <div className="meta price header">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}

export default ProductComponent;
