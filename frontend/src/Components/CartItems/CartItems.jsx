import React, { useContext, useState } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");
  const handlePromoCodeSubmit = () => {
    // Regular expression for a promo code with alphabets and two numbers
    const promoCodePattern = /^[A-Za-z]{1}[0-9]{2}$/;

    if (promoCodePattern.test(promoCode)) {
      // Promo code is valid, you can handle success here
      setError("");
      alert("Your promo code has been added successfully");
    } else {
      // Promo code is invalid
      setError(
        "Invalid promo code. Please enter a promo code with alphabet and two numbers."
      );
      alert(
        "Invalid promo code. Please enter a promo code with alphabet and two numbers."
      );
    }
  };
  const getRoundedTotalAmount = () => {
    return Math.floor(getTotalCartAmount());
  };

  const isCartEmpty = () => {
    return Object.values(cartItems).every((quantity) => quantity === 0);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {isCartEmpty() ? (
        <p className="empty-cart-message">
          Your cart is empty. Add items to proceed to checkout.
        </p>
      ) : (
        <>
          {products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div>
                  <div className="cartitems-format-main cartitems-format">
                    <img
                      className="cartitems-product-icon"
                      src={e.image}
                      alt=""
                    />
                    <p cartitems-product-title>{e.name}</p>
                    <p>€{e.new_price}</p>
                    <button className="cartitems-quantity">
                      {cartItems[e.id]}
                    </button>
                    <p>€{e.new_price * cartItems[e.id]}</p>
                    <img
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                      className="cartitems-remove-icon"
                      src={cross_icon}
                      alt=""
                    />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}

          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>€{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>€{getRoundedTotalAmount()}</h3>
                </div>
              </div>
              {isCartEmpty() ? (
                <button disabled>PROCEED TO CHECKOUT</button>
              ) : (
                <Link to="/form">
                  <button>PROCEED TO CHECKOUT</button>
                </Link>
              )}
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input
                  type="text"
                  placeholder="promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={handlePromoCodeSubmit}>Submit</button>
              </div>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
