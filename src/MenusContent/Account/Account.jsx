import React, { useState } from "react";
import "./Account.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Account({ AccountMenu, setAccountMenu }) {
  const [AccountfirstMenu, setAccountfirstMenu] = useState("None");
  function AccountfirstMenuShow() {
    setAccountfirstMenu("Block");
  }

  function AccountMenuHide() {
    setTimeout(() => {
      setAccountMenu("none");
      setAccountfirstMenu("none");
    }, 1000);
  }

  //   .............................Go to Sign In page
  const GotoSignUpPage = useNavigate();

  const GotoSignUp = () => {
    const confirm = window.confirm(
      "Are you sure you want to go to the Sign Up page?"
    );

    if (confirm) {
      localStorage.removeItem("UserID");
      GotoSignUpPage("/SignUp");
    }
  };

  const Logout = () => {
    const confirm = window.confirm("Are you sure you want to log out?");

    if (confirm) {
      localStorage.removeItem("UserID");
      GotoSignUpPage("/");
    }
  };

  return (
    <>
      <section style={{ display: `${AccountMenu}` }} className="Account_Menus">
        <ul>
          <li onClick={AccountfirstMenuShow}>
            <p>Auth Pages</p>
            <RiArrowRightSLine />
          </li>
          <li>
            <p>Shop User</p>
            <RiArrowRightSLine />
          </li>
        </ul>
      </section>
      <section
        style={{ display: `${AccountfirstMenu}` }}
        className="Account_First_menu"
        onMouseLeave={AccountMenuHide}
      >
        <ul>
          <li onClick={GotoSignUp}>
            <p>Sign Up</p>
          </li>
          <li onClick={Logout}>
            <p>Logout</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export { Account };
