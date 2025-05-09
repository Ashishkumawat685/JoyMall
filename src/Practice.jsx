import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/SignUp/SignUp.css";

function Registration() {
  const [Regis, setRegis] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Mobile: "",
    Password: "",
    CunPassword: "",
  });

  function ValueInput(e) {
    setRegis((Prev) => ({ ...Prev, [e.target.name]: e.target.value }));
  }
  console.log(Regis);
  return (
    <>
      <div className="signup-container">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={Regis.FirstName}
            onChange={ValueInput}
            required
          />
          <input
            type="text"
            name="LastName"
            value={Regis.LastName}
            placeholder="Last Name"
            onChange={ValueInput}
            required
          />
          <input
            type="email"
            name="Email"
            value={Regis.Email}
            placeholder="Email"
            onChange={ValueInput}
            required
          />
          <input
            type="text"
            name="Mobile"
            value={Regis.Mobile}
            placeholder="Mobile"
            onChange={ValueInput}
            required
          />
          <input
            type="password"
            name="Password"
            value={Regis.Password}
            placeholder="Password"
            onChange={ValueInput}
            required
          />
          <input
            type="password"
            name="CunPassword"
            value={Regis.CunPassword}
            placeholder="Confirm Password"
            onChange={ValueInput}
            required
          />
          <button type="submit">Sign Up</button>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
}

export { Registration };
