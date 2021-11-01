import React from "react";
import "./product.css";
import data from "./produtData";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function Product() {
  const [state] = useStateValue();
  const [product, setProduct] = React.useState(data);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(basket);
  }, [basket]);
  return (
    <>
      {product.map((item) => {
        const { id, title, image, price, rating } = item;
        const addToBasket = () => {
          dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          });
        };
        return (
          <div key={id} className={"product  product" + id}>
            <div className="product__info">
              <p>{title}</p>
              <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
              </p>
              <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
              </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
          </div>
        );
      })}
    </>
  );
}

export default Product;
