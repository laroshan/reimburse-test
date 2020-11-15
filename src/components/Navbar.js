// import React from "react";
import logo from "../logos/logo2.svg";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { DetailConsumer } from "../context";
// import { FaBell, FaCaretDown, FaBars } from "react-icons/fa";

// import Profile from "../images/profile.jpg";

// export default function NavBar() {
//   // const [click, setClick] = useState(true);
//   //dropdown

//   // const handleClick = () => {
//   //   setClick(!click);
//   // };
//   // const closeMobileMenu = () => {
//   //   setClick(false);
//   // };

//   return (
//     <DetailConsumer>
//       {(value) => {
//         const { handleOpen } = value;
//         return (
//           <NavWrapper>
//             <div>
//               <FaBars className="fa-bar" onClick={handleOpen} />
//               <img src={logo} alt="logo" className="logo" />
//             </div>

//             <Menu>
//               <li className="nav-item">
//                 <FaBell className="nav-links" />
//               </li>
//               <li className="nav-item">
//                 <h4>Jhon Doe</h4>
//               </li>
//               <li className="nav-item">
//                 {/* <img src={Profile} alt="profile" /> */}
//                 <div className="container">
//                   <div className="row">
//                     <div className="col col-xs-6 col-md-4">
//                       <img src={Profile} alt="profile" />
//                     </div>
//                     <div className="col col-xs-6 col-md-4">
//                       <FaCaretDown />
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             </Menu>
//           </NavWrapper>
//         );
//       }}
//     </DetailConsumer>
//   );
// }

// // const MenuLink = styled.a`
// //   padding: 1rem 1rem;
// //   cursor: pointer;
// //   text-align: center;
// //   text-decoration: none;
// //   color: white;
// //   transition: all 0.3s ease-in;
// //   font-size: 1.2rem;
// //   &:hover {
// //     color: #7b7fda;
// //     text-decoration: none;
// //     background-color: transparent;
// //     transition: all 0.2s ease-out;
// //   }
// // `;

// const NavWrapper = styled.div`
//   position: -webkit-sticky;
//   position: sticky;
//   padding: 0 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   background: #ee3934;
//   top: 0;
//   z-index: 1;
//   width: 100%;
//   left: 0;
//   right: 0;
//   /*  */
//   .logo {
//     color: white;
//     justify-self: start;
//     margin-left: 5px;
//     // cursor: pointer;
//     text-decoration: none;
//     //position: absolute;
//     width: 70px;
//     //font-weight: bolder;
//   }
//   .fa-bar {
//     display: none;
//   }
//   @media screen and (max-width: 1000px) {
//     .fa-bar {
//       color: white;
//       font-size: 1.5rem;
//       display: flex;
//       align-items: center;
//       cursor: pointer;
//       position: absolute;
//       margin-top: 20px;
//     }
//     .logo {
//       margin-left: 30px;
//     }
//   }
// `;

// const Menu = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
//   list-style: none;

//   h4 {
//     padding: 0rem 0rem;
//     text-align: center;
//     text-decoration: none;
//     color: white;
//     transition: all 0.3s ease-in;
//     font-size: 1.2rem;
//   }
//   img {
//     height: 100%;
//     width: 50px;
//     position: relative;
//   }
//   .nav-item {
//     display: flex;
//     align-items: center;
//     padding: 0rem 0.5rem;
//     /* height: 50px; */
//   }
// `;

import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
// import logo2 from "../assets/logo2.svg";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins,
  },

  appbar: {
    background: "#EC2329",
    zIndex: theme.zIndex + 1,
  },
  logo: {
    height: "3em",
  },

  avatar: {
    // width: theme.spacing(4),
    // height: theme.spacing(4),
    // background: theme.palette.background.paper,
    color: "black",
  },

  grow: {
    flexGrow: 1,
  },

  root: {
    display: "flex",
  },

  menu: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  typo: {
    fontFamily: "Raleway",
    fontWeight: 700,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  listtext: {
    color: "black",
  },

  menu1: {
    backgroundColor: "#EF3935",
    color: "white",
    position: "static",

    borderRadius: "0px",
  },
  sectionDesktop: {
    display: "none",
    // [theme.breakpoints.up("md")]: {
    //   display: "flex",
    // },
  },
  menuitem: {
    // ...theme.typography.tab,
    opacity: 0.9,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, SetAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (e) => {
    SetAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    SetAnchorEl(null);
    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  }
  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar} color="primary">
          <Toolbar>
            <img className={classes.logo} alt="companylogo" src={logo} />

            <div className={classes.grow} />

            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>

            <IconButton
              color="inherit"
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? "true" : undefined}
              onClick={(event) => handleClick(event)}
            >
              <Typography className={classes.typo}>
                Mikels.K<span>&nbsp; &nbsp;</span>{" "}
              </Typography>
              <Avatar className={classes.avatar} src="/broken-image.jpg" />
              <ArrowDropDownIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
        placement="bottom-end"
        style={{ zIndex: 300 }}
      >
        <Paper classes={{ root: classes.menu1 }} elevation={10}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              autoFocusItem={openMenu}
              id="simple-menu"
              onKeyDown={handleListKeyDown}
            >
              <MenuItem
                classes={{ root: classes.menuitem }}
                onClick={handleClose}
              >
                {" "}
                Profile{" "}
              </MenuItem>

              <MenuItem
                classes={{ root: classes.menuitem }}
                onClick={handleClose}
              >
                {" "}
                View as{" "}
              </MenuItem>

              <MenuItem
                classes={{ root: classes.menuitem }}
                onClick={handleClose}
              >
                {" "}
                Help{" "}
              </MenuItem>
              <Link to="/">
                <MenuItem classes={{ root: classes.menuitem }}>
                  {" "}
                  Logout{" "}
                </MenuItem>
              </Link>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>

      <div className={classes.toolbarMargin} />
    </div>
  );
}
