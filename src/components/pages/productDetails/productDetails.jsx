import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './product.module.css'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function ProductDetails() {
  const { id } = useParams() 
  const [data, setData] = React.useState({})

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

  return (
    <div className={styles.container}>
      <div className={styles.ImageContainer}>
        <div>
          <img src={data.image} alt="" className={styles.image} />
        </div>
        <div className={styles.buttonContainer}>
          <Button variant="outlined"> <ShoppingCartIcon/> Add to Cart</Button>
          <Button variant="contained"  > <KeyboardDoubleArrowRightIcon/> Buy Now</Button>
        </div>
      </div>
      <div>
        <div>
          <p>{data.category}</p>
          <p> </p>
          <div className={styles.rating}>
              <p className={styles.rate}>{data.rating.rate} *</p>
              <p className={styles.count} >{data.rating.count} Reviews</p>
            </div> 
        </div>
      </div>

      
      
    </div>
  )
}
