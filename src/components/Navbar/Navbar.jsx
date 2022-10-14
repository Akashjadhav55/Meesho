import React from "react";
import logo from "../../Img/meesho.png";
import styles from "./Navabar.module.css";
import svg from "../svg";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIphoneSharpIcon from "@mui/icons-material/PhoneIphoneSharp";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { borderBottom } from "@mui/system";
import  DrawerComponent  from './Drawer'




function Navbar() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar sx={{
      boxShadow : "none",
      borderBottom : "1px solid lightGray"
    }} >
        <Toolbar
          className={styles.navbarContianerOuter}
          style={{ bg : "#ffffff" }}
        >
          <div className={styles.left}>
            <img src={logo} alt="img" className={styles.logo} />
            <div className={styles.search}>
              <SearchIcon className={styles.SearchIcon} />
              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                name="name"
                className={styles.searchbar}
              />
            </div>
          </div>
          {isMobile ? (
              <DrawerComponent/>
          ) : (
          <div className={styles.right}>
            <div className={styles.downloadApp}>
              <PhoneIphoneSharpIcon className={styles.mobilelogo} />
              <p className={styles.NavNames}>Download App</p>
            </div>
            <div className={styles.blank}></div>
            <div className={styles.downloadApp}>
              <Link to="/supplier" className={styles.NavNames}>
                Become a Supplier
              </Link>
            </div>
            <div className={styles.blank}></div>
            <div className={styles.profile}>
              <PermIdentitySharpIcon className={styles.logo2} />
              <p className={styles.namesTwo}>Profile</p>
            </div>
            <div className={styles.cart}>
              <ShoppingCartOutlinedIcon className={styles.logo2} />
              <Link to="/cart" className={styles.namesTwo}>
                Cart
              </Link>
            </div>
          </div>
          )}
        </Toolbar>
      {/* </Toolbar> */}
    </AppBar>
  );
}

export default Navbar;
