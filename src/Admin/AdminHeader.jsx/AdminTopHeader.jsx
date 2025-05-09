import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import "./AdminTopHeader.css";
import { IoIosNotifications } from "react-icons/io";

function AdminTopHeader({ LeftHeaderDisplay }) {
  return (
    <>
      <section className="Admin_Top_header_container">
        <div className="Admin_Top_left_Container">
          <div onClick={LeftHeaderDisplay} className="Admin_Top_left_Icon">
            <AiOutlineMenuUnfold />
          </div>
          <div className="Admin_Top_left_SearchBar">
            <IoIosSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="Admin_Top_Right_Container">
          <div className="Top_Right_Notification_icon">
            <IoIosNotifications />
          </div>
          <div className="Top_Right_Profile">
            <img
              src="https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export { AdminTopHeader };
