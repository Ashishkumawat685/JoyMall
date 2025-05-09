import React, { useEffect } from "react";
import "./ShopProduct.css";
import { FaRegHeart } from "react-icons/fa";
import { Header } from "../../Header/Header";
import { useState } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { data, useNavigate } from "react-router-dom";

export function ShopProduct() {
  const [ApiDataa, setApiData] = useState([]);

  async function ProductGet() {
    const ApiUrl = await fetch("http://localhost:3000/Category");
    const ApiData = await ApiUrl.json();
    const datanumber = ApiData.length;
    setApiData(ApiData);
  }

  useEffect(() => {
    ProductGet();
  }, []);

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

  async function WishListAdd(e) {
    const ApiUrlget = await fetch(`http://localhost:3000/WishList`);
    const ApiData = await ApiUrlget.json();
    const FindWishList = ApiData.find(
      (FindWish) => FindWish.ProductName == e.ProductName
    );
    if (!FindWishList) {
      const ApiUrl = await fetch(`http://localhost:3000/WishList`, {
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
      alert("Product Already Have your Wishlist");
    }
  }

  const DetailedPage = useNavigate();
  function GotoDetailed(ID) {
    DetailedPage(`/ProductDetails/${ID}`);
  }

  return (
    <>
      <Header />

      <section>
        <div className="Product_container">
          {ApiDataa.map((Product) => {
            return (
              <>
                <div key={Product.id} className="Products_box">
                  <div className="Products_box_image_container">
                    <img
                      onClick={() => GotoDetailed(Product.id)}
                      src={Product.ProductImage}
                    />
                    <div
                      onClick={() => WishListAdd(Product)}
                      className="image_container_Wishlist_icon_box"
                    >
                      <FaRegHeart className="image_container_Wishlist_icon" />
                    </div>
                  </div>
                  <div className="Products_box_text_container">
                    <div className="text_Rating_box">
                      <IoStar className="text_Rating_box_icon" />
                      <IoStar className="text_Rating_box_icon" />
                      <IoStar className="text_Rating_box_icon" />
                      <IoStar className="text_Rating_box_icon" />
                      {Product.ProductRating > 4.5 ? (
                        <IoStar className="text_Rating_box_icon" />
                      ) : (
                        <IoStarHalf className="text_Rating_box_icon" />
                      )}
                      <p>({Product.ProductReview})</p>
                    </div>
                    <span>{Product.ProductName}</span>
                    <div className="text_Price_box">
                      <h4>${Product.ProductPrice}</h4>
                      <button>
                        <div
                          onClick={() => AddtoCart(Product, Product.id)}
                          className="text_Price_box_cart_icon"
                        >
                          <MdOutlineShoppingCart />
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="Products_box_detailed">
                    <div className="specs-container">
                      <div className="spec-row">
                        <span className="spec-title">Display:</span>
                        <span className="spec-dotted"></span>
                        <span className="spec-value">6.1" XDR</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-title">Capacity:</span>
                        <span className="spec-dotted"></span>
                        <span className="spec-value">128 GB</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-title">Chip:</span>
                        <span className="spec-dotted"></span>
                        <span className="spec-value">A15 Bionic</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-title">Camera:</span>
                        <span className="spec-dotted"></span>
                        <span className="spec-value">12 + 12 MP</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-title">Weight:</span>
                        <span className="spec-dotted"></span>
                        <span className="spec-value">172 grams</span>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
