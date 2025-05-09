import React, { useState } from "react";

function WishListQuantity(Props) {
  const [ProductQnt, setProductQnt] = useState(1);

  const Product_decreaseQuantity = () => {
    if (ProductQnt > 1) {
      setProductQnt(ProductQnt - 1);
    }
  };

  const Product_increaseQuantity = () => {
    if (ProductQnt < 5) {
      setProductQnt(ProductQnt + 1);
    }
  };

  const toalpricec = Props.price * ProductQnt;

  async function WishListApiRemove(ID) {
    const ApiUrl = await fetch(`http://localhost:3000/WishList/${ID}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Remove product....");
      })
      .catch(() => {
        alert("Try Again......");
      });
  }

  async function AddtoCart(e, ID) {
    // const UserId = localStorage.getItem("UserID");
    const ApiUrlget = await fetch(`http://localhost:3000/cart`);
    const ApiData = await ApiUrlget.json();
    const FindCart = ApiData.find(
      (FindCart) => FindCart.ProductName == e.ProductName
    );
    if (!FindCart) {
      const ApiUrl = await fetch(`http://localhost:3000/cart`, {
        method: "POST",
        body: JSON.stringify(e),
      });
      const ApiWishUrl = await fetch(`http://localhost:3000/WishList/${ID}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Added to cart");
        })
        .catch(() => {
          alert("Try Again");
        });
    } else {
      alert("This Product Already Have your Cart");
    }
  }
  return (
    <>
      <span>${toalpricec.toFixed(2)}</span>

      <div className="Cart_Products_content_bottom">
        <div className="Cart_Products_Quantity">
          <p onClick={Product_decreaseQuantity}>-</p>
          <input type="text" value={ProductQnt} />
          <p onClick={Product_increaseQuantity}>+</p>
        </div>
        <div className="Cart_Products_Remove_Wishlist_box">
          <button onClick={() => AddtoCart(Props.Product, Props.ID)}>
            Add to cart
          </button>
          <button onClick={() => WishListApiRemove(Props.ID)}>Remove</button>
        </div>
      </div>
    </>
  );
}

export { WishListQuantity };
