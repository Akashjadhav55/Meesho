import { style } from "@mui/system";
import axios from "axios";
import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Label } from "@mui/icons-material";
import { FormControl, FormLabel, Radio, RadioGroup, Select } from "@mui/material";
import { Option } from "@mui/joy";

function Product() {
  const [data, setdata] = React.useState([]);
  const [value, setValue] = React.useState("none");
  const navigate = useNavigate();

  const showProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://fake-store-api-41bw.onrender.com/product", {
        responseType: "json",
      })
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.items}>
      <div className={styles.left}>
        <div className={styles.sorting}>
          <span>Sort by:</span>
          <select>
            <option value="" selected></option>
            <option value="relevance">Relevance</option>
            <option value="priceHigh">Price( High to Low)</option>
            <option value="priceLow" >
              Price(Low to High)
            </option>
            <option value="rating">Rating</option>
            <option value="discount">Discount</option>
          </select>
        </div>
        <div className={styles.sorting} >
          <span>Gender:</span>
          <select>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div> 
        <div className={styles.sorting}>
          <span>Category:</span>
          <select>
            <option value=""></option>
            <option value="men's clothing">Mens Clothing</option>
            <option value="women's clothing">Women Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div> 

      </div>
      <div className={styles.right}>
        {data.map((item) => (
          <div
            className={styles.items1}
            key={item.id}
            onClick={() => {
              showProductDetails(item.id);
            }}
          >
            <div className={styles.image}>
              <img className={styles.img} src={item.image} alt="" />
            </div>
            <p className={styles.name}>{item.title}</p>
            <div className={styles.price}>
              <h2 style={{ color: "#000000" }}> ₹ {item.price}</h2>
              <p>onwards</p>
            </div>
            <p className={styles.free}>Free Delivery</p>
            <div className={styles.rating}>
              <p className={styles.rate}>{item.rating.rate} *</p>
              <p className={styles.count}>{item.rating.count} Reviews</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
