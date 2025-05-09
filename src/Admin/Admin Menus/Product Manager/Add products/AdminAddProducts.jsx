import React, { useState } from "react";
import "./AdminAddProducts.css";
import { AdminLeftHeader } from "../../../AdminHeader.jsx/AdminLeftHeader";
import { AdminTopHeader } from "../../../AdminHeader.jsx/AdminTopHeader";

export function AdminAddProduct() {
  const [ShowLeftHeader, setShowLeftHeader] = useState(false);

  const LeftHeaderDisplay = () => {
    setShowLeftHeader(!ShowLeftHeader);
  };

  const categories = [
    "Computers & Accessories",
    "Smartphones & Tablets",
    "TV, Video & Audio",
    "Speakers & Home Music",
    "Cameras, Photo & Video",
    "Printer & Ink",
    "Charging Station",
    "Headphones",
    "Wearable Electronics",
    "Powerbanks",
    "HDD/SSD Data Storage",
    "Video Games",
  ];

  const [formData, setFormData] = useState({
    category: "",
    ProductName: "",
    ProductPrice: "",
    ProductDetails: "",
    ProductReplacementPeriod: "",
    ProductRating: "",
    ProductReview: "",
    model: "",
    ProductImage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const Productsinput = {
    Category: `${formData.category}`,
    ProductName: `${formData.ProductName}`,
    ProductPrice: `${formData.ProductPrice}`,
    ProductDetails: `${formData.ProductDetails}`,
    ProductReplacementPeriod: `${formData.ProductReplacementPeriod}`,
    ProductRating: `${formData.ProductRating}`,
    ProductReview: `${formData.ProductReview}`,
    model: `${formData.model}`,
    ProductImage: `${formData.ProductImage}`,
  };
  async function AdminPostProducts(e) {
    e.preventDefault();
    const ApiUrl = await fetch("http://localhost:3000/Category", {
      method: "POST",
      body: JSON.stringify(Productsinput),
    })
      .then(() => {
        alert("Form Submitted Successfully!");
        setFormData({
          category: "",
          ProductName: "",
          ProductPrice: "",
          ProductDetails: "",
          ProductReplacementPeriod: "",
          ProductRating: "",
          ProductReview: "",
          model: "",
          ProductImage: "",
        });
      })
      .catch(() => {
        alert(" something wrong...");
      });
  }
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

          <form onSubmit={AdminPostProducts}>
            <div className="form-container">
              <h2 className="form-heading">📦 Product Upload</h2>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} required>
                    {cat}
                  </option>
                ))}
              </select>

              <input
                name="ProductName"
                placeholder="Product Name"
                value={formData.ProductName}
                onChange={handleChange}
                className="form-input"
                required
                autoComplete="off"
              />
              <input
                name="ProductPrice"
                placeholder="Product Price"
                value={formData.ProductPrice}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                required
              />
              <input
                name="ProductDetails"
                placeholder="Product Details"
                value={formData.ProductDetails}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                required
              />
              <input
                name="ProductReplacementPeriod"
                placeholder="Product Replacement Period"
                value={formData.ProductReplacementPeriod}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                required
              />
              <input
                name="ProductRating"
                placeholder="Product Rating"
                value={formData.ProductRating}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                required
              />
              <input
                name="ProductReview"
                placeholder="Product Review"
                value={formData.ProductReview}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                required
              />
              <input
                name="model"
                placeholder="Product model"
                value={formData.model}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                required
              />
              <input
                name="ProductImage"
                placeholder="Product Image"
                value={formData.ProductImage}
                onChange={handleChange}
                className="form-input"
                autoComplete="off"
                required
              />

              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
