import { style } from "@mui/system";
import React from "react";
import styles from "./Categary.module.css";

function Categary() {
  const [open1, setopen1] = React.useState(false);
  const [open2, setopen2] = React.useState(false);
  const [open3, setopen3] = React.useState(false);
  const [open4, setopen4] = React.useState(false);
  const [open5, setopen5] = React.useState(false);
  const [open6, setopen6] = React.useState(false);
  const [open7, setopen7] = React.useState(false);
  const [open8, setopen8] = React.useState(false);
  const [open9, setopen9] = React.useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.div1}
        onMouseEnter={() => setopen1(true)}
        style={
          open1 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Women Ethnic</p>
        {open1 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen1(false)}>
            <div>
              <p>All Women Ethnic</p>
              <div><p>View All</p></div>
            </div>
            <div>
              <p>Sarees</p>
              <div>
                <p>All Sarees</p>
                <p>Silk Sarees</p>
                <p>Cotton Silk Sarees</p>
                <p>Cotton Sarees</p>
                <p>Georgette Sarees</p>
                <p>Chiffon Sarees</p>
                <p>Satin Sarees</p>
              </div>
            </div>
            <div>
              <p> Kurtis</p>
              <div>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
                <p>Cotton Kurtis</p>
                <p>Embroidered Kurtis</p>
              </div>
            </div>
            <div>
              <p>Kurta Sets</p>
              <div><p>All Kurta Sets</p></div>
            </div>
            <div>
              <p>Suits & Dress Material</p>
              <div>
                <p>All Suits & Dress Material</p>
                <p>Cotton Suits</p>
                <p>Embroidered Suits</p>
                <p>Chanderi Suits</p>
              </div>
            </div>
            <div>
              <p>Other Ethnic</p>
              <div>
                <p>Other Ethnic</p>
                <p>Blouses</p>
                <p>Dupattas</p>
                <p>Lehanga</p>
                <p>Gown</p>
                <p>Ethnic Bottomwear</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen2(true)}
        style={
          open2 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Women Western</p>
        {open2 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen2(false)}>
           <div>
            <p>Topwear</p>
            <div>
              <p>Tops</p>
              <p>Dresses</p>
              <p>Sweaters</p>
              <p>Jumpsuits</p>
            </div>
           </div>
           <div>
            <p>Bottomwear</p>
            <div>
              <p>Jeans</p>
              <p>Jeggings</p>
              <p>Palazzos</p>
              <p>Shorts</p>
              <p>Skirts</p>
            </div>
           </div>
           <div>
            <p>Innerwear</p>
            <div>
              <p>Bra</p>
              <p>Briefs</p>
            </div>
           </div>
           <div>
            <p>Sleepwear</p>
            <div>
              <p>Nightsuits</p>
              <p>Babydolls</p>
            </div>
           </div>

          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen3(true)}
        style={
          open3 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Mens</p>
        {open3 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen3(false)}>
           <div>
            <p>Top Wear</p>
            <div>
              <p>All Top Wear</p>
              <p>Tshirts</p>
              <p>Shirts</p>
            </div>
           </div>
           <div>
            <p>Bottom Wear</p>
            <div>
              <p>Track Pants</p>
              <p>Jeansa</p>
              <p>Trousers</p>
            </div>
           </div>
           <div>
            <p>All Men Accessories</p>
            <div>
              <p>Watches</p>
              <p>Belts</p>
              <p>Wallets</p>
              <p>Jewellery</p>
              <p>Sunglasses</p>
              <p>Bags</p>
            </div>
           </div>
           <div>
            <p>Men Footwear</p>
            <div>
              <p>Casual Shoes </p>
              <p>Sports Shoes</p>
              <p>Sandals</p>
              <p>Formal Shoes</p>
            </div>
           </div>
           <div>
            <p>Ethnic Wear</p>
            <div>
              <p>Men Kurtas</p>
              <p>Ethnic Jackets</p>
            </div>
           </div>
           <div>
            <p>Inner & Sleep Wear</p>
            <div>
              <p>All Inner & Sleep Wear</p>
              <p>Vests</p>
            </div>
           </div>
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen4(true)}
        style={
          open4 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Kids</p>
        {open4 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen4(false)}>
            <div>
              <p>Boys & Girls 2+ Years</p>
              <div>
                <p>Dresses</p>
              </div>
            </div>
            <div>
              <p>Infant 0-2 Years</p>
              <div><p>Rompers</p></div>
            </div>
            <div>
              <p>Toys & Accessories</p>
              <div>
                <p>Soft Toys</p>
                <p>Footwear</p>
                <p>Stationery</p>
                <p>Watches</p>
                <p>Bags & Backpacks</p>
              </div>
            </div>
            <div>
              <p>Baby Care</p>
              <div>
                <p>All Baby Care</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen5(true)}
        style={
          open5 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Home & Kitchen</p>
        {open5 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen5(false)}>
            
            
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen6(true)}
        style={
          open6 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Beauty & Health</p>
        {open6 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen6(false)}>
            hell
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen7(true)}
        style={
          open7 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Jewllery & Accessories</p>
        {open7 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen7(false)}>
            hell
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen8(true)}
        style={
          open8 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Bags & Footwear</p>
        {open8 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen8(false)}>
            hell
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => setopen9(true)}
        style={
          open9 === true
            ? { borderBottom: "3px solid #f43397", color: "#f43397" }
            : {}
        }
      >
        <p>Electronics</p>
        {open9 ? (
          <div className={styles.dropdown} onMouseLeave={() => setopen9(false)}>
            hell
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Categary;
