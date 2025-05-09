import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUpload() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    ip_address: "",
  });

  const formDatainput = {
    first_name: `${formData.first_name}`,
    last_name: `${formData.last_name}`,
    email: `${formData.email}`,
    gender: `${formData.gender}`,
    ip_address: `${formData.ip_address}`,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const ApiUrl = await fetch("https://userapi-tau.vercel.app/users", {
      method: "POST",
      body: JSON.stringify(formDatainput),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Form Submitted Successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          ip_address: "",
        });
        setTimeout(() => {
          SignInPagenew("/");
        }, 500);
      })
      .catch(() => {
        alert(" something wrong...");
      });
  }

  const SignInPagenew = useNavigate();

  const SignInPage = () => {
    setTimeout(() => {
      SignInPagenew("/");
    }, 500);
  };
  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ip_address"
            placeholder="ip_address"
            value={formData.ip_address}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
          <button type="submit" onClick={SignInPage}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export { SignUpload };
