import React, { useEffect, useState } from "react";
import "./AdminProductDetailed.css";
import { AdminLeftHeader } from "../../../../AdminHeader.jsx/AdminLeftHeader";
import { AdminTopHeader } from "../../../../AdminHeader.jsx/AdminTopHeader";

export function AdminProductDetailed() {
  const [ShowLeftHeader, setShowLeftHeader] = useState(false);

  const LeftHeaderDisplay = () => {
    setShowLeftHeader(!ShowLeftHeader);
  };

  const [ProDetails, setProDetails] = useState([]);

  const Productidd = localStorage.getItem("ProductId");
  async function AddminAllProductsget() {
    const ApiUrl = await fetch(`http://localhost:3000/Category/${Productidd}`);
    const ApiData = await ApiUrl.json();
    setProDetails(ApiData);
  }

  useEffect(() => {
    AddminAllProductsget();
  }, []);

  return (
    <>
      <section className="AdminHeader">
        <div
          className={`main_header ${
            ShowLeftHeader ? "main_Header_toggle_display" : ""
          }`}
        >
          <AdminLeftHeader />
        </div>
        <div className={`pages ${ShowLeftHeader ? "pages_full" : ""}`}>
          <AdminTopHeader LeftHeaderDisplay={LeftHeaderDisplay} />

          <div className="Detail_table_container">
            <h2 className="Detail_table_title">📦 Product Details</h2>
            <table className="Detail_Product_table">
              <tr>
                <th>Product Image</th>
                <td>
                  <img src={ProDetails.ProductImage} />
                </td>
              </tr>
              <tr>
                <th>Product Name</th>
                <td>{ProDetails.ProductName}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{ProDetails.Category}</td>
              </tr>
              <tr>
                <th>Product Price</th>
                <td>{ProDetails.ProductPrice}</td>
              </tr>
              <tr>
                <th>Product Replacement Period</th>
                <td>{ProDetails.ProductReplacementPeriod}</td>
              </tr>
              <tr>
                <th>Product Details</th>
                <td>{ProDetails.ProductDetails}</td>
              </tr>
              <tr>
                <th>Product Review</th>
                <td>{ProDetails.ProductReview}</td>
              </tr>
              <tr>
                <th>Product Rating</th>
                <td>{ProDetails.ProductRating}</td>
              </tr>
              <tr>
                <th>Model</th>
                <td>{ProDetails.Model}</td>
              </tr>
              <tr>
                <th>Offer</th>
                <td>{ProDetails.Offer}</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>{ProDetails.Discount}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{ProDetails.RAM}</td>
              </tr>
              <tr>
                <th>ROM</th>
                <td>{ProDetails.ROM}</td>
              </tr>
              <tr>
                <th>Water Proof</th>
                <td>{ProDetails.WaterProof}</td>
              </tr>
              <tr>
                <th>Screen Size</th>
                <td>{ProDetails.ScreenSize}</td>
              </tr>
              <tr>
                <th>Screen Quality</th>
                <td>{ProDetails.ScreenQuality}</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
