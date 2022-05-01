import { Link } from "react-router-dom"

export const Nav=()=>{
      let cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
      let count=cartArr.length;
    const nav =[
        {title:"Home", to:"/"},
        {title :"Product", to:"/product"},
        {title:"User",to:"/users"},
        {title :"Cart", to:"/cart"}
    ]
    return (
        <>
        {nav.map((product,i)=>{
           return <Link key={i} to={product.to} style ={{margin:"5px"}}> { product.title}</Link>
        })}
        </>
    )
}