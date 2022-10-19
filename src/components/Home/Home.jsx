import { style } from "@mui/system";
import React from "react";
import styles from "./Home.module.css"

export default function Home() {
  return (
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
              <p>Easy <br /> Returns</p>
            </div>
          </div>
        </div>
        <div className={styles.AdsImagecontainer}>
          <img className={styles.AdsImage} src="https://images.meesho.com/images/marketing/1631722939962.webp" alt="" />
        </div>
    </div>
  );
}
