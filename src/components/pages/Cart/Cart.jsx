import React from 'react'
import  styles  from './Cart.module.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from "../../../Img/meesho.png";

export default function Cart() {
    const [data, setdata] = React.useState([]);
    const [cartData , setCartData] = React.useState([])
    const [button1, setbutton1] = React.useState(true);
    const [button2, setbutton2] = React.useState(false);
    const [button3, setbutton3] = React.useState(false);

    let CarTotalAmount = 0;
      cartData.map((ele) => {
        for (let i = 0; i < cartData.length; i++) {
        CarTotalAmount += (ele.data.quantity) * (ele.data.price);
        console.log(CarTotalAmount)
        }
      })
      console.log(CarTotalAmount)
  

    React.useEffect(() => {
        fetchData()
      }, [])
    
      const fetchData = () => {
        axios.get("http://localhost:3002/products", {
          responseType : "json",
        })
        .then(function(response){
          setdata(response.data)
        })
        .catch(function(error){
          console.log(error)
        })
      }
      const getDataFromCart = () =>{
        axios.get('http://localhost:3002/cart', {
          responseType : "json",
        })
        .then(function(response){
          setCartData(response.data)
        //  console.log(response)
        })
        .then(function(error){
          console.log(error)
        })
      }
      React.useEffect(() => {
        getDataFromCart()
      }, []);
      
  return (
    <div className={styles.container}>
        <div>
            {/* <div>
                <button className={styles.button}  style={button1 ? {border : "#f43397"} : {}} >1</button>
                <p>Cart</p>
            </div>
            <div>
                <button>2</button>
                <p>Address</p>
            </div>
            <div>
                <button>3</button>
                <p>Payment</p>
            </div> */}
        </div>

        <div className={styles.left} >
            <div className={styles.lefttopcontianer}>
                <p className={styles.topname}>Cart</p>
                {/* {cartData.map((item) => (
                  <div key={item.data.id}>
                    {item.length}  
                  </div>
                 ))} */}
            </div>
            <div>
              {cartData.map((ele) => {
                return(
                  <div>
                  <div className={styles.items} style={{display : "flex" , border :"1px solid" , alignItems: "flex-start"}}>
                    <img className={styles.iamge} src={ele.data.image} alt="" />
                    <div>
                      <p>{ele.data.title}</p>
                      <p>Size: XXL</p>
                      <p>₹{ele.data.price}</p>
                      <p 
                        style={{color : "#f43397"}}
                        >X REMOVE</p>
                    </div>
                    <p>EDIT</p>
                  </div>
                  <div style={{display : "flex" , alignItem : "center", justifyContent : "space-between"}}>
                    <p></p>
                    <p>Free Delivery</p>
                  </div>
                  </div>
                )
              } )}
            </div>
        </div>
        <div className={styles.right}>


        </div>
    </div>
  )
}
