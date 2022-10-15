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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { BsSearch , BsBag, BsCart2 } from "react-icons/bs";
import Button from '@mui/material/Button';

// import { makeStyles } from '@mui/styles';

import { Link } from "react-router-dom";
import { borderBottom } from "@mui/system";
import  DrawerComponent  from './Drawer'


// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   }
// }));

function Navbar() {
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open1, setopen1] = React.useState(false);
  const [open2, setopen2] = React.useState(false);
  const [open3, setopen3] = React.useState(false);

  return (
    <AppBar sx={{
      boxShadow : "none",
      borderBottom : "1px solid lightGray",
      position : "static"
    }} >
      {/* <CssBaseline /> */}
        <Toolbar
          className={styles.navbarContianerOuter}
        >
          <div className={styles.left}>
            <img src={logo} alt="img" className={styles.logo} />
            <div className={styles.search}>
              <BsSearch className={styles.SearchIcon} />
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
            <div className={styles.downloadApp} onMouseEnter={() => setopen1(true)}   style={open1 === true ? { borderBottom : "3px solid #f43397" , color : "#f43397" } : { }}>
                <PhoneIphoneSharpIcon className={styles.mobilelogo} />
               <p className={styles.NavNames}   style={ open1 === true ? { color : "#f43397" } : { }} >Download App</p>
             {open1 ? (
              <div className={styles.dropdown1} onMouseLeave={() => setopen1(false)}>
                <h2 style={{  width : "170px" }} >Download From</h2>
                <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="playstore" style={{ height : "100%", width : "100%",}} />
                <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" style={{ height : "100%", width : "100%",}}/>
              </div>
             ) : null}

            </div>
            <div className={styles.blank}></div>
            <div className={styles.downloadApp}>
              <Link to="/supplier" className={styles.NavNames}>
                Become a Supplier
              </Link>
            </div>
            <div className={styles.blank}></div>


            <div className={styles.profile} onMouseEnter={() => setopen2(true)}  style={open2 === true ? { borderBottom : "3px solid #f43397" , color : "#f43397" } : { }} >
              <PermIdentitySharpIcon className={styles.logo2} />
              <p className={styles.namesTwo}  style={open2 === true ? { color : "#f43397" } : { }} >Profile</p>
              {open2 ? (
              <div className={styles.dropdown} onMouseLeave={() => setopen2(false)}>
                <h3>Hello User</h3>
                <p>To access your Meesho account</p>
                <Button variant="contained" style={{backgroundColor : "#f43397", padding : "10px"}} >Sign Up</Button>
                <div className={styles.NavProfileCart}>
                  <BsBag/>
                
                  <h3>My Order</h3>
                </div>
              </div>
             ) : null}
            </div>


            <div className={styles.cart} >
              <BsCart2 className={styles.logo2} />
              <Link to="/cart" className={styles.namesTwo} >
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
