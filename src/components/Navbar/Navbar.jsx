import React from 'react'
import logo from '../../Img/meesho.png'
import styles from './Navabar.module.css'
import svg from '../svg'
import SearchIcon from '@mui/icons-material/Search';
import Phonelogo from './MobileLogo'

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
          <div>
            {/* <Phonelogo/> */}
          </div>
        </div>
    </div>
  )
}

export default Navbar

