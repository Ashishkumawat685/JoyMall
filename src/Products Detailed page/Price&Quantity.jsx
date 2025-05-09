import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Price_Quantity({ Price }) {
  const [ProductQnt, setProductQnt] = useState(1);
  const QutIncrement = () => {
    if (ProductQnt <= 4) {
      setProductQnt(ProductQnt + 1);
    }
  };

  const QutDecrement = () => {
    if (ProductQnt >= 2) {
      setProductQnt(ProductQnt - 1);
    }
  };

  const ProductPrice = Price.ProductPrice * ProductQnt;

  async function AddtoCart(e) {
    // const UserId = localStorage.getItem("UserID");
    const ApiUrlget = await fetch(`http://localhost:3000/cart`);
    const ApiData = await ApiUrlget.json();
    const FindCart = ApiData.find(
      (FindCart) => FindCart.ProductName == e.ProductName
    );
    if (!FindCart) {
      const ApiUrl = await fetch(`http://localhost:3000/cart`, {
        method: "POST",
        body: JSON.stringify(e),
      })
        .then(() => {
          alert("Added");
        })
        .catch(() => {
          alert("Try Again");
        });
    } else {
      alert("This Product Already Have your Cart");
    }
  }
  return (
    <>
      <div className="Right_container_Price_and_Quantity_container">
        <div className="Right_container_Price_container">
          <div className="Price_text">
            <h2>${ProductPrice.toFixed(2)}</h2>
          </div>
          <div className="Available_text">
            <p>
              <FaRegCheckCircle className="Available_text_icon" />
              Available to order
            </p>
          </div>
        </div>
        <div className="Right_container_Quantity_container">
          <div className="Quantity_Inc_Dec_box">
            <p onClick={QutDecrement}>
              <FaMinus />
            </p>
            <p>{ProductQnt}</p>
            <p onClick={QutIncrement}>
              <FaPlus />
            </p>
          </div>
          <div onClick={() => AddtoCart(Price)} className="Quantity_Add_Cart">
            <p>
              <span>
                <IoCartOutline />
              </span>
              <span>Add to cart</span>
            </p>
          </div>
          <div className="Quantity_Add_Wishlist">
            <div class="wishlist-icon">
              <FaRegHeart />
            </div>
            <span class="tooltip-text">Add to Wishlist</span>
          </div>
        </div>
      </div>
    </>
  );
}
export { Price_Quantity };
