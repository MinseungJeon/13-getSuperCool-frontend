import React from "react";
import logoImg from "./logoText.svg";
import ColorOptionBox from "../ColorOptionBox/ColorOptionBox";
<<<<<<< HEAD
import { withRouter , Link } from "react-router-dom";
=======
import { withRouter } from "react-router-dom";
>>>>>>> 1feebe7cb247b4578c27fba9c7cd0d20582b6ea9
import "./Product.scss";


class Product extends React.Component {
  render() {
    const {
      id,
      modelImg,
      name,
      productImg,
      price,
      showCart,
      product
    } = this.props;

    return (
      <div onClick={() =>
<<<<<<< HEAD
        this.props.history.push(`/shop/${id}`)
=======
        this.props.history.push(`http://10.58.7.186:8000/shop/${id}`)
>>>>>>> 1feebe7cb247b4578c27fba9c7cd0d20582b6ea9
      } id={id} className="Product">
        <ColorOptionBox />
        <Link className="link" to ={`/shop/${id}`}>
          <div className="productThumbnail">
            <img src={modelImg} alt={modelImg} />
            <img className="logoText" src={logoImg} alt="logoImg" />
          </div>
        </Link>
        <img
          className="logoIcon"
          src="https://i.ibb.co/wS6dvTj/icontrans.png"
          alt="logoImg"
        />
        <img className="productImg" src={productImg} alt={name} />

        <span>
          <div>{name}</div>
          <div>
            {price}.00<span>€</span>
          </div>
        </span>
        <button onClick={() => showCart(product)}>ADD TO CART</button>
      </div>
    );
  }
}

export default withRouter(Product);
