import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import "./App.css";

import { ShopProduct } from "./MenusContent/Shop/ShopProduct";
import { Login } from "./Login/loginpage";
import { SignUp } from "./SignUp/SignUp";
import { CartShow } from "./Cart Section/CartShow";
import { WishListShow } from "./Wishlist Section/WishListProduct";
import { ProductsDetailed } from "./Products Detailed page/ProductsDetailed";
import { Admin } from "./Admin/Admin";
import { AdminLogin } from "./Admin/Login/Adminloginpage";
import { AdminAllProducts } from "./Admin/Admin Menus/Product Manager/All Products Show/AdminAllProducts";
import { AdminAddProduct } from "./Admin/Admin Menus/Product Manager/Add products/AdminAddProducts";
import { AdminProductEdit } from "./Admin/Admin Menus/Product Manager/Add products/AdminProductEdit";
import { AdminProductDetailed } from "./Admin/Admin Menus/Product Manager/All Products Show/Product Details/AdminProductDetailed";
import { Home } from "./MenusContent/Home";
import { Registration } from "./Practice";
import { SignUpload } from "./SignUp/Signupload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<ShopProduct />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<CartShow />} />
          <Route path="/WishList" element={<WishListShow />} />
          <Route
            path="/ProductDetails/:ProductId"
            element={<ProductsDetailed />}
          />

          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/AdminPanel" element={<Admin />} />
          <Route
            path="/Product_Mangagement-All_Products"
            element={<AdminAllProducts />}
          />
          <Route path="/Product_Add" element={<AdminAddProduct />} />
          <Route path="/Product_Edit" element={<AdminProductEdit />} />
          <Route path="/Product_Detail" element={<AdminProductDetailed />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/up" element={<SignUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
