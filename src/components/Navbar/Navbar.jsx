import React from 'react'
import logo from '../../Img/meesho.png'
import styles from './Navabar.module.css'
import svg from '../svg'
import SearchIcon from '@mui/icons-material/Search';
import PhoneIphoneSharpIcon from '@mui/icons-material/PhoneIphoneSharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className={styles.navbarContianerOuter} style={{ border : "1px solid yellow" }}>
        
        <div className={styles.left} >
            <img src={logo} alt="img" className={styles.logo}/>
            <div className={styles.search} >
              <SearchIcon className={styles.SearchIcon} />
              <input type="text" placeholder='Try Saree, Kurti or Search by Product Code' name="name" className={styles.searchbar} />
            </div>
        </div>

        <div className={styles.right}>
          <div className={styles.downloadApp}>
            <PhoneIphoneSharpIcon className={styles.mobilelogo}  />
            <p className={styles.NavNames} >Download App</p>
          </div>
          <div className={styles.blank}></div>
          <div className={styles.downloadApp} >
            <p className={styles.NavNames}>Become a Supplier</p>
            </div>
          <div className={styles.blank}></div>
          <div className={styles.profile}>
            <PermIdentitySharpIcon className={styles.logo2} />
            <p className={styles.namesTwo}>Profile</p>
          </div>
          <div className={styles.cart}>
            < ShoppingCartOutlinedIcon className={styles.logo2} />
            <p className={styles.namesTwo}>Cart</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar

