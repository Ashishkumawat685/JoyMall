import React, { useEffect, useState } from "react";
import "./Header.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";
import { VscColorMode } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Categories } from "../Category Section/Category Main/Categories";
import { NavLink, useNavigate } from "react-router-dom";
import { HeadSearch } from "./Head Search/HeadSearch";
import { Account } from "../MenusContent/Account/Account";

import { auth } from "../Login/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function Header({ setSlideWidth, SlideWidth }) {
  const [show, setshow] = useState(false);
  const NavbarShow = () => {
    setshow(!show);
  };
  const [Searchshow, setSearchshow] = useState(true);
  const SearchShowfu = () => {
    setSearchshow(!Searchshow);
  };

  const [onSearch, setOnSearch] = useState("");

  const handleChange = (e) => {
    setOnSearch(e.target.value);
  };

  const LoginPage = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("UserID")) {
      LoginPage("/");
    }
  }, [LoginPage]);

  // ................................ Search box show..........................

  const [ShowSearch, setShowSearch] = useState("none");
  const ShowBox = () => {
    setShowSearch("Block");
  };

  const hideBox = () => {
    setShowSearch("none");
  };

  // Cart Section number of cart item
  const [CartNumber, setCartNumber] = useState("");
  async function fetchCartNumber() {
    const ApiUrl = await fetch("http://localhost:3000/cart");
    const Apidata = await ApiUrl.json();
    setCartNumber(Apidata.length);
  }
  fetchCartNumber();

  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);
  const fetchUserDetails = async () => {
    const UserId = localStorage.getItem("UserID");
    try {
      const response = await fetch(`http://localhost:3000/Student/${UserId}`); // ← API URL adjust करें
      const data = await response.json();
      setUserData(data);
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setUserData(null);
  };

  // Account Section.............................................
  const [AccountMenu, setAccountMenu] = useState("None");
  function AccountMenuShow() {
    setAccountMenu("Block");
  }

  // Slider width set

  function SlideWidthset() {
    if (window.innerWidth < 991) {
      return; // मोबाइल पर कुछ मत करो
    }
    setSlideWidth(!SlideWidth);
  }

  return (
    <>
      <section
        className="Head_1_Section"
        style={{ height: `${Searchshow ? "80px" : "140px"}` }}
      >
        <div className="Head_1_container">
          <div className="Head_1_menu_box">
            <div onClick={NavbarShow} className="Head_1_menu_icon">
              <RiMenuFill className="Head_1_menu_icon-icon" />
            </div>
          </div>
          <div className="Head_1_logo_box">
            <div className="Head_1_logo_icon">
              <span>
                <HiOutlineShoppingCart />
              </span>
            </div>
            <div className="Head_1_logo_Name">
              <p>
                Joy<span>Mall</span>
              </p>
            </div>
          </div>
          <div className="Head_search_container">
            <div className="Head_search_box">
              <IoSearch className="Head_search_icon" />
              <input
                onChange={handleChange}
                type="text"
                placeholder="Search the products"
                onClick={ShowBox}
              />
            </div>
            <HeadSearch
              searchValue={onSearch}
              showSearch={ShowSearch}
              setShowSearch={setShowSearch}
            />
          </div>
          <div className="Head_1_Right_items_containor">
            <div className="Head_Right_Sale_box">
              <div className="Head_Right_percentage_box">
                <AiOutlinePercentage className="Head_Right_percentage_icon" />
              </div>
              <div className="Head_Right_Sale_content">
                <p>Only this month</p>
                <h3>Super Sale 20%</h3>
              </div>
            </div>
            <div className="Head_1_Right_icon_container">
              <div className="Head_1_Right_Dark_icon_box">
                <VscColorMode />
              </div>
              <div className="Head_1_Right_Search_icon_box">
                <IoSearch onClick={SearchShowfu} className="Head_search_icon" />
              </div>
              <div
                onClick={fetchUserDetails}
                className="Head_1_Right_Account_icon_box"
              >
                <CgProfile />
              </div>
              {showPopup ? (
                <div className="popup-overlay">
                  <div className="popup-content">
                    <h2>User Details</h2>
                    <div>
                      <h6>
                        <strong>Name:</strong> {userData.FirstName}
                      </h6>
                      <h6>
                        <strong>Email:</strong> {userData.Email}
                      </h6>
                      <h6>
                        <strong>Phone:</strong> {userData.Mobile}
                      </h6>
                    </div>
                    <button onClick={closePopup}>Close</button>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="Head_1_Right_wishlist_icon_box">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/WishList"
                >
                  <FaRegHeart />
                </NavLink>
              </div>
              <div className="Head_1_Right_cart_icon_box">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/Cart"
                >
                  <BsCartCheck />
                </NavLink>
              </div>
              <p>{CartNumber}</p>
            </div>
          </div>
        </div>

        <div className="Head_search_container_smallScreen">
          <div className="Head_search_box_smallScreen">
            <IoSearch className="Head_search_icon_smallScreen" />
            <input
              type="text"
              placeholder="Search the products"
              onChange={handleChange}
              onClick={ShowBox}
            />
          </div>
          {/* <HeadSearch /> */}
        </div>
        <HeadSearch
          searchValue={onSearch}
          showSearch={ShowSearch}
          setShowSearch={setShowSearch}
        />
      </section>

      <section className={`Head_2_Section ${show ? "navShow" : "navHide"}`}>
        <div className="Head_2_container">
          <div className="Head_2_categories_Logo">
            <div className="Head_2_categories_Logo_Name">
              <p>
                Joy<span>Mall</span>
              </p>
            </div>
            <div
              onClick={NavbarShow}
              className="Head_2_categories_logo_exit_box"
            >
              <RxCross2 className="Head_2_categories_logo_exit_icon" />
            </div>
          </div>

          <Categories SliderFunction={SlideWidthset} />

          <div className="Head_2_menus_containor">
            <ul>
              <li>
                <div className="Head_2_menus_box">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Home"
                  >
                    Home
                  </NavLink>
                  <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                </div>
              </li>
              <li>
                <div className="Head_2_menus_box">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Shop"
                  >
                    Shop
                  </NavLink>
                  <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                </div>
              </li>
              <li>
                <div className="Head_2_menus_box">
                  <a href="#">Pages</a>
                  <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                </div>
              </li>
              <li>
                <div className="Head_2_menus_box">
                  <a href="#">Docs</a>
                  <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                </div>
              </li>
              <li>
                <div className="Head_2_menus_box">
                  <a href="#">Components</a>
                  <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                </div>
              </li>
              <li>
                <div
                  onClick={AccountMenuShow}
                  className="Head_2_menus_box Head_2_menus_box_Account"
                >
                  <a href="#">Account</a>
                  <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                  <Account
                    AccountMenu={AccountMenu}
                    setAccountMenu={setAccountMenu}
                  />
                </div>
              </li>
              <div className="Head_2_language_box">
                <li>
                  <div className="Head_2_menus_box">
                    <a href="#">Eng</a>
                    <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                  </div>
                </li>
              </div>
              <li>
                <div className="Head_2_menus_box">
                  <a href="#">USD ($)</a>
                  <MdKeyboardArrowDown className="Head_2_menus_down_icon" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export { Header };
