import { ImportContactsRounded } from '@mui/icons-material'
import axios from 'axios'
import React from 'react'

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
      
        
    </div>
  )
}

export default Product