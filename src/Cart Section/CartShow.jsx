import React, { useState } from "react";
import { Header } from "../Header/Header";
import "./CartShow.css";
import { CartShowQuantity } from "./CartShowQuantity";
import { useNavigate } from "react-router-dom";

function CartShow() {
  const [CartApidata, setCartApidata] = useState([]);

  async function CartApiGet() {
    const ApiUrl = await fetch("http://localhost:3000/cart");
    const Apidata = await ApiUrl.json();
    setCartApidata(Apidata);
  }
  CartApiGet();

  const DetailedPage = useNavigate();
  function GotoDetailed(ID) {
    DetailedPage(`/ProductDetails/${ID}`);
  }
  return (
    <>
      <Header />
      <section className="CartShow">
        <div className="Cart_Product_left_container">
          <div className="Cart_Product_Address_container">
            <div className="Cart_Product_Address_text">
              <p>From Saved Addresses</p>
            </div>
            <div className="Cart_Product_Address_Pincode_box">
              <button>Enter Dilivery Pincode</button>
            </div>
          </div>
          <div className="Cart_Product_container">
            {CartApidata.map((CartData, index) => {
              return (
                <>
                  <div key={index} className="Cart_Product_main_box">
                    <div className="Cart_Products_content_box">
                      <div
                        onClick={() => GotoDetailed(CartData.id)}
                        className="Cart_Products_content_image"
                      >
                        <img src={CartData.ProductImage} />
                      </div>
                      <div className="Cart_Products_content_details">
                        <h4 onClick={() => GotoDetailed(CartData.id)}>
                          {CartData.ProductName}
                        </h4>
                        <h4>Offer: {CartData.Offer}</h4>
                        <span>$2000</span>
                        <CartShowQuantity
                          ID={CartData.id}
                          price={CartData.ProductPrice}
                          Product={CartData}
                        />
                      </div>
                      <div className="Cart_Products_content_delivery">
                        <p>
                          Delivery by Fri Apr 11 | <span>Free</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div className="Cart_Product_Price_Details_container"></div> */}
      </section>
    </>
  );
}

export { CartShow };
