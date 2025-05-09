import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FcTwoSmartphones } from "react-icons/fc";
import { IoTvSharp } from "react-icons/io5";
import { BsMusicPlayer } from "react-icons/bs";
import { TbCameraSpark } from "react-icons/tb";
import { FiPrinter } from "react-icons/fi";
import { FaChargingStation } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { PiBatteryChargingVerticalFill } from "react-icons/pi";
import { TfiHarddrives } from "react-icons/tfi";
import { CgGames } from "react-icons/cg";
import { CategoriesMenus } from "../CategoriesMenus/CategoriesMenus";
import { ProductMenusData } from "../CategoriesMenus/CategoriesMenusData";

const categories = [
  { name: "Computers & Accessories", icon: <FaComputer /> },
  { name: "Smartphones & Tablets", icon: <FcTwoSmartphones /> },
  { name: "TV, Video & Audio", icon: <IoTvSharp /> },
  { name: "Speakers & Home Music", icon: <BsMusicPlayer /> },
  { name: "Cameras, Photo & Video", icon: <TbCameraSpark /> },
  { name: "Printer & Ink", icon: <FiPrinter /> },
  { name: "Charging Station", icon: <FaChargingStation /> },
  { name: "Headphones", icon: <FaHeadphonesSimple /> },
  { name: "Wearable Electronics", icon: <FiWatch /> },
  { name: "Powerbanks", icon: <PiBatteryChargingVerticalFill /> },
  { name: "HDD/SSD Data Storage", icon: <TfiHarddrives /> },
  { name: "Video Games", icon: <CgGames /> },
];
export function Categories({ SliderFunction }) {
  const [isOpen, setIsOpen] = useState(false);

  const [menopen, setmenuopen] = useState(false);

  const [filteredData, setFilteredData] = useState(null);

  const open = (e) => {
    const clickedCategory = e.target.innerText;

    const matchedData = ProductMenusData.find(
      (item) => item.Categorie === clickedCategory
    );

    if (matchedData) {
      setFilteredData(matchedData);
      setmenuopen(true);
    } else {
      setmenuopen(false);
    }
  };

  function CloseCategorymenu() {
    setmenuopen(false);
  }
  return (
    <div className="categories_container_main">
      <div
        className="Head_2_categories"
        onClick={() => {
          setIsOpen(!isOpen);
          CloseCategorymenu();
          SliderFunction();
        }}
      >
        <div className="Head_2_categories_text">
          <BiCategory className="Head_2_categories_text_icon" />
          <p>Categories</p>
        </div>
        <div className="Head_2_categories_down_icon_box">
          <MdKeyboardArrowDown
            className={`Head_2_categories_down_icon ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      <div
        className={`Head_2_categories_dropdown ${isOpen ? "block" : "hidden"}`}
      >
        {categories.map((ItemCategories, index) => {
          return (
            <>
              <div
                onClick={open}
                key={index}
                className="Head_2_categorie_below_box"
              >
                <div className="Head_2_categorie_below_box_content">
                  {ItemCategories.icon}
                  <p>{ItemCategories.name}</p>
                </div>
                <MdKeyboardArrowRight className="Head_2_categorie_below_box_ArrowRight" />
              </div>
              <CategoriesMenus
                openvalue={menopen}
                menu={filteredData}
                CloseValue={setmenuopen}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
