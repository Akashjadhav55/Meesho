import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './product.module.css'
import { Button } from '@mui/material'
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Product from '../../Home/Product'

export default function ProductDetails() {
  const { id } = useParams() 
  const [data, setData] = React.useState({})
  const [button1, setButton1 ] = React.useState(false)
  const [button2, setButton2 ] = React.useState(false)
  const [button3, setButton3 ] = React.useState(false)
  const [button4, setButton4 ] = React.useState(false)
  const [button5, setButton5 ] = React.useState(false)



  const getSearchData = () => {
    axios.get(`http://localhost:3002/products/${id}` , {
      responseType : "json",
    })
    .then(function(response){
      setData(response.data)
    })
    .then(function(error){
      console.log(error)
    })
  }
  React.useState(() => {
    getSearchData();
  }, []);

  const set1 = () => {
    setButton1(true)
    setButton2(false)
    setButton3(false)
    setButton4(false)
    setButton5(false)
  }
  const set2 = () => {
    setButton1(false)
    setButton2(true)
    setButton3(false)
    setButton4(false)
    setButton5(false)
  }
  const set3 = () => {
    setButton1(false)
    setButton2(false)
    setButton3(true)
    setButton4(false)
    setButton5(false)
  }
  const set4 = () => {
    setButton1(false)
    setButton2(false)
    setButton3(false)
    setButton4(true)
    setButton5(false)
  }
  const set5 = () => {
    setButton1(false)
    setButton2(false)
    setButton3(false)
    setButton4(false)
    setButton5(true)
  }


  return (
    <div className={styles.container}>
    <div className={styles.containerFirst}>
      <div className={styles.left}>
        <div>
          <img src={data.image} alt="" className={styles.image} />
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="outlined"> <ShoppingCartIcon/> Add to Cart</Button>
          <Button style={{backgroundColor : "#f43397", color: "#fff"}} variant="contained"  > <KeyboardDoubleArrowRightIcon/> Buy Now</Button>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <p>{data.category}</p>
          <h1> ₹ {data.price}</h1>
          <div className={styles.rating}>
              {/* <p className={styles.rate}>{data.rating.rate} *</p> */}
              {/* <p className={styles.count} >{data.rating.count} Reviews</p> */}
          </div>
          <p className={styles.free}>Free Delivery</p>  
        </div>
      
        <div className={styles.sizesContainer}>
          <p > Select Size </p>
          <div>
             <button className={styles.buttonstyles} onClick={() => set1()} onDoubleClick={() => setButton1(false)} style={button1 == true ? {border: "1px solid #f43397 ", color : "#f43397" } : {} }  variant="outlined">  S </button>
             <button className={styles.buttonstyles}  onClick={() => set2()} onDoubleClick={() => setButton2(false)} style={button2 == true ? {border: "1px solid #f43397 ", color : "#f43397"} : {} } variant="outlined">  M </button>
             <button className={styles.buttonstyles} onClick={() => set3()} onDoubleClick={() => setButton3(false)} style={button3 == true ? {border: "1px solid #f43397 ", color : "#f43397"} : {} } variant="outlined">  L </button>
             <button className={styles.buttonstyles} onClick={() => set4()}  onDoubleClick={() => setButton4(false)} style={button4 == true ? {border: "1px solid #f43397 ", color : "#f43397"} : {} } variant="outlined">  XL </button>
             <button className={styles.buttonstyles} onClick={() => set5()} onDoubleClick={() => setButton5(false)} style={button5 == true ? {border: "1px solid #f43397 ", color : "#f43397"} : {} } variant="outlined">  XXL </button>
          </div>
        </div>

        <div>
          <p className={styles.headname}>Product Details</p>
          <p>{data.description}</p>
        </div>

        <div className={styles.shopDetails}>
          <p className={styles.NameSold} >Sold By</p>
          <div className={styles.shopName}>
            <StoreIcon className={styles.ShopImag} />
            <p>Krishna ethnic world-</p>
            <Button variant="outlined" style={{color : "#f43397"}} >View Shop</Button>
          </div>
          <div className={styles.ratingContainer}>
            <div>
              {/* <p>{data.rating.rate} *</p>
              <p>{data.rating.count} Rating</p> */}
            </div>
            <div>
              <p>1,728</p>
              <p>Followers</p>
            </div>
            <div>
              <p>177</p>
              <p>Products</p>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <div className={styles.fetch}>
      <p className={styles.name3} > People also viewed </p>
      <Product/>
    </div>
      
      
    </div>
  )
}
