import React from "react";
import styles from "./Home.module.css"
import { Button } from '@mui/material'
import logo from "../../Img/playstore.webp"



import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function Home() {
  return (
    <div>

    <div className={styles.containerAds}>
        <div className={styles.containerTwo}>
          <h1>Lowest Prices Best Qaulity Shopping</h1>
          <div className={styles.threeElement}>
            <div>
              <img src="https://images.meesho.com/images/pow/freeDelivery.svg" alt="" />
              <p>Free <br /> Delivery</p>
            </div>
            <div>
              <img src="https://images.meesho.com/images/pow/cod.svg" alt="" />
              <p>Cash On <br /> Delivery</p>
            </div>
            <div>
              <img src="https://images.meesho.com/images/pow/easyReturns.svg" alt="" />
              <span>Easy <br /> Returns</span>
            </div>
          </div>
          <button  className={styles.button} variant="contained"> <img src={logo} alt="" /> Download the Meesho App </button>
        </div>
        <div className={styles.AdsImagecontainer}>
          <img className={styles.AdsImage} src="https://images.meesho.com/images/marketing/1631722939962.webp" alt="" />
        </div>
    </div>


    <div className={styles.Heading}>
      <div className={styles.lines}></div>
        <span className={styles.text} >Top Categories to choose from</span>
      <div className={styles.lines}></div>
    </div>


    <div className={styles.AdsImage2} >
      <div className={styles.ImageFirst}>
          <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" />
      </div>
      <div className={styles.IamgeSecond}>
        <div className={styles.img1}>
          <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt="" />
        </div>
        <div className={styles.img2}>
          <img src="https://images.meesho.com/images/marketing/1649759799809.webp" alt="" />
        </div>
      </div>
    </div>


    <div className={styles.homeContImage}>
      <div className={styles.container1}>
        <img src="https://images.meesho.com/images/marketing/1664368165450.webp" alt="" />
      </div>
      <div className={styles.container2}>
        <div className={styles.img3}> 
          <img src="https://images.meesho.com/images/marketing/1649760808952.webp" alt="" /> 
          <img src="https://images.meesho.com/images/marketing/1664364866805.webp" alt="" />
        </div>
        <div className={styles.img3}> 
          <img src="https://images.meesho.com/images/marketing/1649760703179.webp" alt="" />
          <img src="https://images.meesho.com/images/marketing/1664364917657.webp" alt="" /> 
        </div>
        <div className={styles.img3}> 
          <img src="https://images.meesho.com/images/marketing/1649760786763.webp" alt="" />
          <img src="https://images.meesho.com/images/marketing/1664364898513.webp" alt="" />
        </div>
      </div>
    </div>


    <div className={styles.homeContImage3}>
      <img src="https://images.meesho.com/images/pow/downloadBannerDesktop.webp" alt="" />
      <div className={styles.child1OfCont} >
        <h4 style={{color : "rgb(45,133,248)", fontSize :"28px" }} >Become a Reseller and</h4>
        <h1 style={{color : "rgb(244,51,151)", fontSize : "42px"}}  >Start your Online Business</h1>
        <h1 style={{ color:"rgb(244,51,151)", fontSize:"42px" }} >with Zero Investment</h1>
        <div className={styles.Child}>
          <div className={styles.child1}><img src="https://images.meesho.com/images/pow/playstoreIcon.webp" alt="" /></div>
          <div className={styles.child1}><img src="https://images.meesho.com/images/pow/appstoreIcon.webp" alt="" /></div>
        </div>
      </div>
    </div>

    <div className={styles.head}>
      <h1>Product For You</h1>
    </div>

    <div className={styles.fetchContainer}>
      <div className={styles.left}>
        <div  className={styles.sorting}>
        <p>Sort by:</p>
        <select > 
          <option value="relevance">Relevance</option>
          <option value="new">New Arrivals</option>
          <option value="priceHigh">Price( High to Low)</option>
          <option value="priceLow" selected>Price(Low to High)</option>
          <option value="rating">Rating</option>
          <option value="discount">Discount</option>
        </select>
        </div>
        
      </div>
      <div className={styles.right}>

      </div>
    </div>

    

    </div>

  );
}
