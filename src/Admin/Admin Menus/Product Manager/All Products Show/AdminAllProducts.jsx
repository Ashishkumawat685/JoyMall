import React, { useEffect, useState } from "react";
import "./AdminAllProducts.css";
import { AdminLeftHeader } from "../../../AdminHeader.jsx/AdminLeftHeader";
import { AdminTopHeader } from "../../../AdminHeader.jsx/AdminTopHeader";
import { useNavigate } from "react-router-dom";

function AdminAllProducts() {
  // header function.............
  const [ShowLeftHeader, setShowLeftHeader] = useState(false);

  const LeftHeaderDisplay = () => {
    setShowLeftHeader(!ShowLeftHeader);
  };

  // Products get function ...............
  const [ProData, setProData] = useState([]);
  async function AddminAllProductsget() {
    const ApiUrl = await fetch("http://localhost:3000/Category");
    const ApiData = await ApiUrl.json();
    setProData(ApiData);
  }

  useEffect(() => {
    AddminAllProductsget();
  }, []);

  // Product Delete Function ..........
  async function AdminProductsDelete(ProductId) {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirm) {
      const ApiUrl = await fetch(
        `http://localhost:3000/Category/${ProductId}`,
        {
          method: "Delete",
        }
      )
        .then(() => {
          alert("This Product Deleted.....");
          AddminAllProductsget();
        })
        .catch(() => {
          alert("Please Try Again..........");
        });
    }
  }

  // Product Edit functioin.........
  const GoToEditPro = useNavigate();

  function AdminGoToEditProduct(ProductId) {
    GoToEditPro("/Product_Edit");
    localStorage.setItem("ProductId", ProductId);
  }

  // Product Detail Page
  const GoToDetailsPro = useNavigate();

  function AdminGoToDetailsPage(ProductId) {
    GoToDetailsPro("/Product_Detail");
    localStorage.setItem("ProductId", ProductId);
  }

  localStorage.removeItem("ProductId");

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
          <div className="table-container">
            <h2 className="table-title">📦 All Product List</h2>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Model</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {ProData.map((prod) => (
                  <tr key={prod.id}>
                    <td>
                      <img
                        className="Admin_Product_images"
                        src={prod.ProductImage}
                      />
                    </td>
                    <td>{prod.ProductName}</td>
                    <td>{prod.Category}</td>
                    <td>{prod.ProductPrice}</td>
                    <td>{prod.ProductRating}</td>
                    <td>{prod.Model}</td>
                    <td>
                      <button
                        onClick={() => AdminGoToEditProduct(prod.id)}
                        className="Admin_Product_buttons"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="Admin_Product_buttons"
                        onClick={() => AdminProductsDelete(prod.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => AdminGoToDetailsPage(prod.id)}
                        className="Admin_Product_buttons"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export { AdminAllProducts };
