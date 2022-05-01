import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  //   let cartArr = JSON.parse(localStorage.getItem("cartItem")) || [];
  let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setData(data);
    });
  });

  const addtocart = (data) => {
    console.log(data);
    cartArr.push(data);
    console.log(cartArr);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));

  };
  return (
    <div>
      <img
        style={{ width: "200px", height: "200px", margin: "10px"}}
        src={data.image}
        alt=""
      />
      <p>Title: {data.title}</p>
      <p>Price: {data.price}</p>
      <button onClick={() => addtocart(data)}>Add to card</button>
    </div>
  );
};
