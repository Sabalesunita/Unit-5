import { Button } from "antd";
import "./nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  const navbar = [
    { title: "Start", to: "/start" },
    { title: "Sell", to: "/sell" },
    { title: "Market", to: "/market" },
    { title: "Manage", to: "/manage" },
  ];

  const nav = [
    { title: "Price", to: "/price" },
    { title: "Learn", to: "/learn" },
    { title: "Login", to: "/login" },
  ];
  return (
    <>
      <nav className="main-nav">
        <div
          style={{
            display: "flex",
            width: "45%",
            justifyContent: "space-around",
            marginLeft: "4%",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              height: "40px",
              width: "180px",
              padding: "10px 20px 10px 20px",
            }}
          >
            <img
              style={{ height: "25px", width: "90px" }}
              src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
              alt=""
            />
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "70%",
              background: "#002e25",
              color: "white",
            }}
          >
            {navbar.map((e, i) => {
              return (
                <Link
                  key={i}
                  to={e.to}
                  style={{
                    margin: "5px",
                    background: "#002e25",
                    color: "white",
                  }}
                >
                  {e.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "4%",
          }}
        >
          {nav.map((e, i) => {
            return (
              <Link
                key={i}
                to={e.to}
                style={{ margin: "5px", background: "#002e25", color: "white" }}
              >
                {e.title}
              </Link>
            );
          })}
          <Button
            style={{ background: "#008060", color: "white", border: "none" }}
          >
            Start Free Trial
          </Button>
        </div>
      </nav>
    </>
  );
};
