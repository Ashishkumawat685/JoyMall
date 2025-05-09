import React, { useState } from "react";
import { Price_Quantity } from "./Price&Quantity";

function GeneralInfo({ API }) {
  // border impliment on change color section
  const [border, setborder] = useState("Gray_Blue");
  const borderImp = (e) => {
    setborder(e);
  };

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <section className="General_Info_main">
        <div className="General_Info_Product_left_container">
          <div className="left_container_image">
            <img src={API.ProductImage} alt="" />
          </div>
        </div>
        <div className="General_Info_Product_Right_container">
          <div className="Right_container_model">
            <p className="Right_container_model_heading">Model</p>
            <div className="Right_container_model_options">
              <button>64 GB</button>
              <button>128 GB</button>
              <button>256 GB</button>
              <button>512 GB</button>
            </div>
          </div>
          <div className="Right_container_color">
            <p className="Right_container_color_heading">Model</p>
            <div className="Right_container_color_options">
              <div
                onClick={() => borderImp("Gray_Blue")}
                style={{
                  border: border === "Gray_Blue" ? "1px solid black" : "none",
                }}
                className="color_options_Gray_Blue"
              >
                <p className="Gray_Blue"></p>
              </div>
              <div
                onClick={() => borderImp("Pink")}
                style={{
                  border: border === "Pink" ? "1px solid black" : "none",
                }}
                className="color_options_Pink"
              >
                <p className="Pink"></p>
              </div>
              <div
                onClick={() => borderImp("Light_Blue")}
                style={{
                  border: border === "Light_Blue" ? "1px solid black" : "none",
                }}
                className="color_options_Light_Blue"
              >
                <p className="Light_Blue"></p>
              </div>
              <div
                onClick={() => borderImp("Green")}
                style={{
                  border: border === "Green" ? "1px solid black" : "none",
                }}
                className="color_options_Green"
              >
                <p className="Green"></p>
              </div>
            </div>
          </div>

          <Price_Quantity Price={API} />

          <div className="Right_container_Shipping_container">
            <div class="shipping-section">
              <h3>Shipping options</h3>
              <div class="shipping-row">
                <span>Pickup from the store</span>
                <span>Today</span>
                <span class="bold">Free</span>
              </div>
              <div class="shipping-row">
                <span>Pickup from postal offices</span>
                <span>Tomorrow</span>
                <span class="bold">$25.00</span>
              </div>
              <div class="shipping-row">
                <span>Delivery by courier</span>
                <span>2-3 days</span>
                <span class="bold">$35.00</span>
              </div>
            </div>
          </div>

          <div className="accordion-container">
            {/* Warranty Section */}
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleSection("warranty")}
              >
                Warranty information
                <span>{activeSection === "warranty" ? "▲" : "▼"}</span>
              </div>
              <div
                className={`accordion-content-wrapper ${
                  activeSection === "warranty" ? "open" : ""
                }`}
              >
                <div className="accordion-content">
                  <div className="warranty-box">
                    <span className="warranty-icon">🛡️</span>
                    <p>
                      <strong>Warranty:</strong> 12 months of official
                      manufacturer's warranty.
                      <br />
                      Exchange/return of the product within 14 days.
                    </p>
                  </div>
                  <p className="accordion-note">
                    Explore the details of our{" "}
                    <a href="#">product warranties here</a>, including duration,
                    coverage, and any additional protection plans available. We
                    prioritize your satisfaction, and our warranty information
                    is designed to keep you informed and confident in your
                    purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => toggleSection("payment")}
              >
                Payment and credit
                <span>{activeSection === "payment" ? "▲" : "▼"}</span>
              </div>
              <div
                className={`accordion-content-wrapper ${
                  activeSection === "payment" ? "open" : ""
                }`}
              >
                <div className="accordion-content">
                  <p className="accordion-note">
                    Experience hassle-free transactions with our{" "}
                    <a href="#">flexible payment options</a> and credit
                    facilities. Learn more about the various payment methods
                    accepted, installment plans, and any exclusive credit offers
                    available to make your shopping experience seamless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { GeneralInfo };
