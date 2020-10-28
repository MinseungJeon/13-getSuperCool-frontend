import React from "react";
import "./Product.scss";
import logoImg from "./logoText.svg";

class Product extends React.Component {
  render() {
    const { id, modelImg, iconImg, name, productImg, price } = this.props;

    return (
      <div id={id} className="Product">
        <div className="productThumbnail">
          <img src={modelImg} alt={modelImg} />
          <img className="logoText" src={logoImg} alt="logoImg" />
        </div>
        <img className="logoIcon" src={iconImg} alt="logoImg" />
        <img className="productImg" src={productImg} alt={name} />

        <span>
          <div>{name}</div>
          <div>{price}</div>
        </span>
        <button
          onClick={() => {
            console.log("123");
          }}
        >
          ADD TO CART
        </button>
      </div>
    );
  }
}

export default Product;
