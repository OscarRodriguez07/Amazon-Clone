import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={"checkout"}>
      <section className="checkout__left">
        <div>
          <h4>Hello, {user ? user.email : "Guest"}</h4>
          <h2 className={"checkout__title"}>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
      <section className={"checkout__right"}>
        <Subtotal></Subtotal>
      </section>
    </div>
  );
}

export default Checkout;
