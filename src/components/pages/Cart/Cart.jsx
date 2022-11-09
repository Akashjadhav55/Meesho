import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../../Img/meesho.png";

export default function Cart() {
  const [data, setdata] = React.useState([]);
  const [cartData, setCartData] = React.useState([]);
  const [button1, setbutton1] = React.useState(true);
  const [button2, setbutton2] = React.useState(false);
  const [button3, setbutton3] = React.useState(false);

  let CarTotalAmount = 0;
  cartData.map((ele) => {
    for (let i = 0; i < cartData.length; i++) {
      CarTotalAmount += ele.data.price;
      console.log(CarTotalAmount);
    }
  });
  console.log(CarTotalAmount);

  const removeFromCart = (id) => {
    http:axios
      .delete(`http://localhost:3002/cart/${id}`)
      .then(getDataFromCart())
  };

  React.useEffect(() => {
    fetchData();
  }, []);
// hello
  const fetchData = () => {
    axios
      .get("http://localhost:3002/products", {
        responseType: "json",
      })
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getDataFromCart = () => {
    axios
      .get("http://localhost:3002/cart", {
        responseType: "json",
      })
      .then(function (response) {
        setCartData(response.data);
        //  console.log(response)
      })
      .then(function (error) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getDataFromCart();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.lefttopcontianer}>
          <p className={styles.topname}>Cart</p>
        </div>
        <div>
          {cartData.map((ele) => {
            return (
              <div>
                <div
                  className={styles.items}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <img className={styles.iamge} src={ele.data.image} alt="" />
                  <div>
                    <p>{ele.data.title}</p>
                    <p>Size: XXL</p>
                    <p>₹{ele.data.price}</p>
                    <p  onClick={() => removeFromCart(ele.data.id)} style={{ color: "#f43397", cursor :"pointer" }}>X REMOVE</p>
                  </div>
                  <p style={{cursor : "pointer"}} >EDIT</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p></p>
                  <p>Free Delivery</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.right}>
        <p>Price Details</p>
        {cartData.map((ele) => {
          return(
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom : "1px solid #cecece"
              }}
            >
              <p style={{paddingRight : "15px"}}>Total Product Price</p>
              {ele.data.price}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom : "1px solid #cecece"
              }}
            >
              <p >Order Total</p>
              {ele.data.price}
            </div>
            <p style={{fontSize : "12px"}}>Clicking on ‘Continue’ will not deduct any money</p>
            <button style={{ cursor: "pointer", width : "100%", padding:"12px", borderRadius : "8px", backgroundColor : "#f43397" , borderStyle : "none", fontSize :"18px"}} >Continue</button>
          </div>
          );
        })}
      </div>
    </div>
  );
}
