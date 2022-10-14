import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Drawer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText>
              <Link>
                <div style={{ display: "flex", alignItem: "center" }}>
                  <PhoneIphoneSharpIcon className={styles.mobilelogo} />
                  <p className={styles.NavNames}>Download App</p>
                </div>
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Link to="/supplier">
                <p> Become a Supplier</p>
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Link to="/">
                <div style={{ display: "flex", alignItem: "center" }}>
                  <PermIdentitySharpIcon className={styles.logo2} />
                  <p className={styles.namesTwo}>Profile</p>
                </div>
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Link to="/cart">
                <div style={{ display: "flex", alignItem: "center" }}>
                  <ShoppingCartOutlinedIcon className={styles.logo2} />
                  <p to="/cart" className={styles.namesTwo}>
                    Cart
                  </p>
                </div>
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </>
  );
}
