import React from 'react'
import styles from './Categary.module.css'

function Categary() {
    const { open1 , setopen1 } = React.useState(false)
    const { open2 , setopen2 } = React.useState(false)
    const { open3 , setopen3 } = React.useState(false)
    const { open4 , setopen4 } = React.useState(false)
    const { open5 , setopen5 } = React.useState(false)
    const { open6 , setopen6 } = React.useState(false)
    const { open7 , setopen7 } = React.useState(false)
    const { open8 , setopen8 } = React.useState(false)
  return (
    <div>
        <div onMouseEnter={() => setopen1(true)} style={ open1 === true ? { border : "3px solid #f43397", color : "#f43397" } : {} }>
            <p>Women Ethnic</p>
            {open1 ? (
              <div className={styles.dropdown} onMouseLeave={() => setopen1(false)}>
                
              </div>
             ) : null}
        </div>
    </div>
  )
}

export default Categary