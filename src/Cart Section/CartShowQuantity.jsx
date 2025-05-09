import React, { useState } from "react";

function CartShowQuantity(Props) {
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

  async function CartApiRemove(ID) {
    const ApiUrl = await fetch(`http://localhost:3000/cart/${ID}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Remove product....");
      })
      .catch(() => {
        alert("Try Again......");
      });
  }

  async function WishListAdd(e, ID) {
    const ApiUrlget = await fetch(`http://localhost:3000/WishList`);
    const ApiData = await ApiUrlget.json();
    const FindWishList = ApiData.find(
      (FindWish) => FindWish.ProductName == e.ProductName
    );
    if (!FindWishList) {
      const ApiUrl = await fetch(`http://localhost:3000/WishList`, {
        method: "POST",
        body: JSON.stringify(e),
      });
      const ApiCARTUrl = await fetch(`http://localhost:3000/cart/${ID}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Added to wishlist");
        })
        .catch(() => {
          alert("Try Again");
        });
    } else {
      alert("Product Already Have your Wishlist");
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
          <button onClick={() => WishListAdd(Props.Product, Props.ID)}>
            Save for Later
          </button>
          <button onClick={() => CartApiRemove(Props.ID)}>Remove</button>
        </div>
      </div>
    </>
  );
}

export { CartShowQuantity };
