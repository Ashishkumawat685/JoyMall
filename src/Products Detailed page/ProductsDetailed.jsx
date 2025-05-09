import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import "./ProductsDetailed.css";
import { FaChevronRight } from "react-icons/fa6";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { GeneralInfo } from "./GeneralInfo";

function ProductsDetailed() {
  const { ProductId } = useParams();

  const [ApiDataa, setApiData] = useState([]);

  async function ProductDetailedGet() {
    const ApiUrl = await fetch(`http://localhost:3000/Category/${ProductId}`);
    const ApiData = await ApiUrl.json();
    setApiData(ApiData);
  }

  useEffect(() => {
    ProductDetailedGet();
  }, [ProductId]);
  return (
    <>
      <Header />
      <section className="Product_Detail_main">
        <div className="Product_Detail_Navigator">
          <span>
            Home <FaChevronRight className="Navigator_icon" />
          </span>
          <span>
            Shop <FaChevronRight className="Navigator_icon" />
          </span>
          <span>Product Page</span>
        </div>
        <h1>{ApiDataa.ProductName}</h1>
        <div className="Product_Detail_Options_container">
          <div className="Product_Detail_Options">
            <div className="Product_General_Info">
              <p>General Info</p>
            </div>
            <div className="Product_Details">
              <p>Product Details</p>
            </div>
            <div className="Product_Reviews">
              <p>
                Reviews <span>({ApiDataa.ProductReview})</span>
              </p>
            </div>
          </div>
          <div className="text_Rating_box">
            <IoStar className="text_Rating_box_icon" />
            <IoStar className="text_Rating_box_icon" />
            <IoStar className="text_Rating_box_icon" />
            <IoStar className="text_Rating_box_icon" />
            {ApiDataa.ProductRating > 4.5 ? (
              <IoStar className="text_Rating_box_icon" />
            ) : (
              <IoStarHalf className="text_Rating_box_icon" />
            )}
            <p>({ApiDataa.ProductReview})</p>
          </div>
        </div>
        <div className="Product_General_Info_container">
          <GeneralInfo API={ApiDataa} />
        </div>
      </section>
    </>
  );
}

export { ProductsDetailed };
