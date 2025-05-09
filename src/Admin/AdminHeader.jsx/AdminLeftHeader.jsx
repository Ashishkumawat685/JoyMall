import React, { useEffect, useState } from "react";
import Loog from "./image-removebg-preview.png";

import {
  FaAngleDown,
  FaClipboardList,
  FaShoppingBag,
  FaUserCircle,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";

import { MdPayments } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { TbBrandAmie } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";

function AdminLeftHeader() {
  const [SubMenu, setSubMenu] = useState(false);
  function SubMenusShow(menuId) {
    setSubMenu((prev) => (prev === menuId ? null : menuId));
  }

  const adminLoginPage = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("AdminUserID")) {
      adminLoginPage("/Admin");
    }
  }, [adminLoginPage]);

  return (
    <>
      <section className="AdminLeftHeader">
        <div className="Admin_Header_logo">
          <img src={Loog} alt="" />
        </div>
        <ul>
          <li
            onClick={() => SubMenusShow(1)}
            style={{ maxHeight: SubMenu === 1 ? "300px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <FaShoppingBag /> <a href="#">Product Management</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{
                  rotate: SubMenu === 1 ? "180deg" : "0deg",
                }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● Add New Product</a>
                </li>
                <li>
                  <a href="#">● View / Edit Products</a>
                </li>
                <li>
                  <a href="#">● Product Categories</a>
                </li>
                <li>
                  <a href="#">● Product Attributes</a>
                </li>
                <li>
                  <a href="#">● Stock Management</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(2)}
            style={{ maxHeight: SubMenu === 2 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <FaClipboardList />
                <a href="#">Product Management</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 2 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Product_Mangagement-All_Products"
                  >
                    ● View / Edit Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Product_Add"
                  >
                    ● Add New Product
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(3)}
            style={{ maxHeight: SubMenu === 3 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <FaUsers />
                <a href="#">Customer Management</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 3 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● All Customers</a>
                </li>
                <li>
                  <a href="#">● Customer Details / Purchase History</a>
                </li>
                <li>
                  <a href="#">● Customer Reviews & Ratings</a>
                </li>
                <li>
                  <a href="#">● Support / Complaints</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(4)}
            style={{ maxHeight: SubMenu === 4 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <TbReportAnalytics />
                <a href="#">Sales Reports</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 4 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● Sales Reports</a>
                </li>
                <li>
                  <a href="#">● Product-wise Performance</a>
                </li>
                <li>
                  <a href="#">● Category-wise Sales</a>
                </li>
                <li>
                  <a href="#">● Customer Insights</a>
                </li>
                <li>
                  <a href="#">● Returns & Refunds Statistics</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(5)}
            style={{ maxHeight: SubMenu === 5 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <RiDiscountPercentLine />
                <a href="#">Offers & Discounts</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 5 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● Create Discount Codes</a>
                </li>
                <li>
                  <a href="#">● Flash Sales</a>
                </li>
                <li>
                  <a href="#">● Festival / Seasonal Offers</a>
                </li>
                <li>
                  <a href="#">● Product Bundles</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(6)}
            style={{ maxHeight: SubMenu === 6 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <TbBrandAmie />
                <a href="#">Brand & Category Management</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 6 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● Add/Edit/Delete Brands</a>
                </li>
                <li>
                  <a href="#">● Manage Categories & Subcategories</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(7)}
            style={{ maxHeight: SubMenu === 7 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <MdPhotoLibrary />
                <a href="#"> Media Library</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 7 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● Upload Images</a>
                </li>
                <li>
                  <a href="#">● Manage Product Galleries</a>
                </li>
                <li>
                  <a href="#">● Banners & Sliders</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(8)}
            style={{ maxHeight: SubMenu === 8 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <MdPayments />
                <a href="#">Payment Management</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 8 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● Payment Status</a>
                </li>
                <li>
                  <a href="#">● Gateway Configuration</a>
                </li>
                <li>
                  <a href="#">● Refund History</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(9)}
            style={{ maxHeight: SubMenu === 9 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <FaUserShield />
                <a href="#">Admin User Roles</a>
              </div>
              <FaAngleDown
                className="admin_nav_menu_downArrow"
                style={{ rotate: SubMenu === 9 ? "180deg" : "0deg" }}
              />
            </div>
            <div className="Admin_nav_menu_Submenus">
              <ul>
                <li>
                  <a href="#">● Manage Admin Users</a>
                </li>
                <li>
                  <a href="#">● Assign Roles / Permissions</a>
                </li>
                <li>
                  <a href="#">● Activity Logs</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => SubMenusShow(9)}
            style={{ maxHeight: SubMenu === 9 ? "900px" : "0px" }}
          >
            <div className="Admin_nav_menu">
              <div className="Admin_nav_menu_name">
                <FaUserCircle />
                <a href="#">Profile</a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export { AdminLeftHeader };
