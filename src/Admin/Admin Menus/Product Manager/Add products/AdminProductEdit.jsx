import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminProductEdit() {
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
  };

  const [ApiData, setApiData] = useState([]);

  const Productsinput = {
    Category:
      `${formData.category}`.length > 0
        ? `${formData.category}`
        : ApiData.Category,
    ProductName:
      `${formData.ProductName}`.length > 0
        ? `${formData.ProductName}`
        : ApiData.ProductName,
    ProductPrice:
      `${formData.ProductPrice}`.length > 0
        ? `${formData.ProductPrice}`
        : ApiData.ProductPrice,
    ProductDetails:
      `${formData.ProductDetails}`.length > 0
        ? `${formData.ProductDetails}`
        : ApiData.ProductDetails,
    ProductReplacementPeriod:
      `${formData.ProductReplacementPeriod}`.length > 0
        ? `${formData.ProductReplacementPeriod}`
        : ApiData.ProductReplacementPeriod,
    ProductRating:
      `${formData.ProductRating}`.length > 0
        ? `${formData.ProductRating}`
        : ApiData.ProductRating,
    ProductReview:
      `${formData.ProductReview}`.length > 0
        ? `${formData.ProductReview}`
        : ApiData.ProductReview,
    model: `${formData.model}`.length > 0 ? `${formData.model}` : ApiData.model,
    ProductImage:
      `${formData.ProductImage}`.length > 0
        ? `${formData.ProductImage}`
        : ApiData.ProductImage,
  };

  const Productd = localStorage.getItem("ProductId");
  const GoToProductPage = useNavigate();

  async function AdminEditProduct(e) {
    e.preventDefault();
    const ApiUlr2 = await fetch(`http://localhost:3000/Category/${Productd}`);
    const ApiData2 = await ApiUlr2.json();
    setApiData(ApiData2);

    const ApiUrl = await fetch(`http://localhost:3000/Category/${Productd}`, {
      method: "PATCH",
      body: JSON.stringify(Productsinput),
    })
      .then(() => {
        alert("Product Edited......");
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
        GoToProductPage("/Product_Mangagement-All_Products");
        localStorage.removeItem("ProductId");
      })
      .catch(() => {
        alert("Please Try Again.......");
      });
  }
  return (
    <>
      <form onSubmit={AdminEditProduct}>
        <div className="form-container">
          <h2 className="form-heading">📦 Product Upload</h2>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index}>{cat}</option>
            ))}
          </select>

          <input
            name="ProductName"
            placeholder="Product Name"
            value={formData.ProductName}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <input
            name="ProductPrice"
            placeholder="Product Price"
            value={formData.ProductPrice}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <input
            name="ProductDetails"
            placeholder="Product Details"
            value={formData.ProductDetails}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <input
            name="ProductReplacementPeriod"
            placeholder="Product Replacement Period"
            value={formData.ProductReplacementPeriod}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <input
            name="ProductRating"
            placeholder="Product Rating"
            value={formData.ProductRating}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <input
            name="ProductReview"
            placeholder="Product Review"
            value={formData.ProductReview}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <input
            name="model"
            placeholder="Product model"
            value={formData.model}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <input
            name="ProductImage"
            placeholder="Product Image"
            value={formData.ProductImage}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />

          <button className="submit-button">Submit</button>
        </div>
      </form>
    </>
  );
}

export { AdminProductEdit };
