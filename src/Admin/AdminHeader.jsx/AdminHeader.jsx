import React, { useState } from "react";
import "./AdminHeader.css";
import { AdminTopHeader } from "./AdminTopHeader";
import { AdminLeftHeader } from "./AdminLeftHeader";
import { Dashboard } from "../Dashoboard/Dashboard";
import { AdminAllProducts } from "../Admin Menus/Product Manager/All Products Show/AdminAllProducts";

function AdminHeader() {
  const [ShowLeftHeader, setShowLeftHeader] = useState(false);

  const LeftHeaderDisplay = () => {
    setShowLeftHeader(!ShowLeftHeader);
  };
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
          <Dashboard />
        </div>
      </section>
    </>
  );
}

export { AdminHeader };
