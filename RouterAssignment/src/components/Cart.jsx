export const Cart = () => {
  let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
  return (
    <div>
      {cartArr.map((data, i) => {
        return (
          <div key={i}>
            <img
              style={{ height: "200px", width: "200px" }}
              src={data.image}
              alt=""
            />
            <p>Price: {data.title}</p>
            <p>Price: {data.price}</p>
          </div>
        );
      })}
    </div>
  );
};
