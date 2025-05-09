import React, { useState } from "react";
import { ProductMenusData } from "./CategoriesMenusData";
import "./CategoriesMenus.css";

export function CategoriesMenus({ openvalue, menu, CloseValue }) {
  if (!menu) return null; // ✅ No Data, No Render

  function CloseCategorymenu() {
    CloseValue(false);
  }
  return (
    <>
      <div
        className="CategoriesMenus_container"
        style={{ display: `${openvalue === true ? "flex" : "none"}` }}
        key={menu.id}
      >
        <div className="CategoriesMenus_menu1_box">
          <ul>
            <div>
              <h4>{menu.Heading1}</h4>
              {Array.isArray(menu.Heading1_SubHeading)
                ? menu.Heading1_SubHeading.map((Heading1_data, index) => (
                    <li key={index}>
                      <a href="#">{Heading1_data.SubHeading}</a>
                    </li>
                  ))
                : ""}
            </div>
            <div className="Heading2_box">
              <h4>{menu.Heading2}</h4>
              {Array.isArray(menu.Heading2_SubHeading)
                ? menu.Heading2_SubHeading.map((Heading2_data, index) => (
                    <li key={index}>
                      <a href="#">{Heading2_data.SubHeading}</a>
                    </li>
                  ))
                : ""}
            </div>
          </ul>
        </div>
        <div className="CategoriesMenus_menu2_box">
          <ul>
            <h4>{menu.Heading3}</h4>
            {Array.isArray(menu.Heading3_SubHeading)
              ? menu.Heading3_SubHeading.map((Heading3_data, index) => (
                  <li key={index}>
                    <a href="#">{Heading3_data.SubHeading}</a>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        <div className="CategoriesMenus_Offer_box">
          <p>Save up to $400</p>
          <p>
            Start from <span>$1599.00</span> $1399.00
          </p>
          <h2>
            Surface <br /> Laptop Studio
          </h2>
          <img src="https://cartzilla-html.createx.studio/assets/img/mega-menu/electronics/01.png" />
          <button>Shop now</button>
          <div
            onClick={CloseCategorymenu}
            className="CategoriesMenus_Close_box"
          >
            <div className="CategoriesMenus_Close_icon"></div>
          </div>
        </div>
      </div>
    </>
  );
}
