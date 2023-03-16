import React from "react";
import logo from "../../Img/meesho.png";
import styles from "./Navabar.module.css";
import PhoneIphoneSharpIcon from "@mui/icons-material/PhoneIphoneSharp";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { BsSearch, BsBag } from "react-icons/bs";
import Button from "@mui/material/Button";

// import { makeStyles } from '@mui/styles';

import { Link, useNavigate } from "react-router-dom";
import { borderBottom } from "@mui/system";
import DrawerComponent from "./Drawer";

function Navbar() {
  // const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open1, setopen1] = React.useState(false);
  const [open2, setopen2] = React.useState(false);
  const [open3, setopen3] = React.useState(false);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    // pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 2, 1.5, 2),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        border: "1px solid #999999",
        borderRadius: "5px",
        color: "#a09c9c",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));


  const handleClick = () => {
    navigate("/")
  }

  const handleCart = () => {
    navigate("/cart")
  }

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid lightGray",
        position: "static",
      }}
    >
      {/* <CssBaseline /> */}
      <Toolbar className={styles.navbarContianerOuter}>
        <div className={styles.left}>
            <img src={logo} onClick={handleClick} alt="img" className={styles.logo} />
          {/* <div className={styles.search}>
              <BsSearch className={styles.SearchIcon} />
              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                name="name"
                className={styles.searchbar}
              />
            </div> */}
          <Search>
            <SearchIconWrapper style={{cursor:"pointer"}}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={styles.right}>
            <li
              className={styles.downloadApp}
              onMouseEnter={() => setopen1(true)}
              style={
                open1 === true
                  ? { borderBottom: "3px solid #f43397", color: "#f43397" , width:"143px"}
                  : {}
              }
            >
              <PhoneIphoneSharpIcon className={styles.mobilelogo} />
              <p
                className={styles.NavNames}
                style={open1 === true ? { color: "#f43397" } : {}}
              >
                Download App
              </p>
              {open1 ? (
                <div
                  className={styles.dropdown1}
                  onMouseLeave={() => setopen1(false)}
                >
                  <h2 style={{ width: "170px" }}>Download From</h2>
                  <img
                    src="https://images.meesho.com/images/pow/playstore-icon-big.png"
                    alt="playstore"
                    style={{ height: "100%", width: "100%" }}
                  />
                  <img
                    src="https://images.meesho.com/images/pow/appstore-icon-big.png"
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              ) : null}
            </li>
            <div className={styles.blank}></div>
            <li className={styles.downloadApp}>
              <Link to="/supplier" className={styles.NavNames}>
                Become a Supplier
              </Link>
            </li>
            <div className={styles.blank}></div>

            <li
              className={styles.profile}
              onMouseEnter={() => setopen2(true)}
              style={
                open2 === true
                  ? { borderBottom: "3px solid #f43397", color: "#f43397" }
                  : {}
              }
            >
              <PermIdentitySharpIcon className={styles.logo2} />
              <p
                className={styles.namesTwo}
                style={open2 === true ? { color: "#f43397" } : {}}
              >
                Profile
              </p>
              {open2 ? (
                <div
                  className={styles.dropdown}
                  onMouseLeave={() => setopen2(false)}
                >
                  <h3>Hello User</h3>
                  <p>To access your Meesho account</p>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#f43397", padding: "10px" }}
                  >
                    Sign Up
                  </Button>
                  <div className={styles.NavProfileCart}>
                    <BsBag />

                    <h3>My Order</h3>
                  </div>
                </div>
              ) : null}
            </li>

            <div className={styles.blank}></div>
            
            <li onClick={handleCart} className={styles.cart}>
              <ShoppingCartOutlinedIcon/>
              <span className={styles.namesTwo} >Cart</span>
            </li>
            
{/* 
            <div className={styles.cart}>
                
            </div> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
