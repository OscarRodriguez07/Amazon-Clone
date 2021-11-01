import React from "react";
import { useHistory } from "react-router";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  //Alternative Way of getting the Total Price
  // const total = basket.reduce(function (total, item) {
  //   return total + item.price;
  // }, 0);
  console.log(basket[0]?.price);
  return (
    <div className={"subtotal"}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        //Alternative Way of getting the Total Price
        //value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
