import axios from 'axios'
import React from 'react'
import styles from "./Home.module.css"

function Product() {
  const [data , setdata] = React.useState([])

  React.useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products", {
      responseType : "json",
    })
    .then(function(response){
      setdata(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  return (
    <div>
      {
        data.map((item) =>(
          <div style={{border : "1px solid" , display : "grid", gridTemplate : "repeat(2, 1fr)"}}>
            <img className={styles.img} src={item.image} alt="" />
            <h3>{item.title}</h3>
            <h2>{item.price}</h2>
            <p>Free Delivery</p>
            <div className={styles.rating}>
              <p>{item.rating.rate}</p>
              <p>{item.rating.count}</p>
            </div>
          </div>
        ))
      }
        
    </div>
  )
}

export default Product