import React from 'react';
import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import SchoolIcon from '@material-ui/icons/School';
import PermScanWifiIcon from '@material-ui/icons/PermScanWifi';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: '#EDF2F7',
    color: 'black',
  },
    left: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: 'none',
    fontSize: 36,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textDecoration: 'none !important',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  mobileRight: {
    textDecoration: 'none !important',
    color: 'inherit',
  },
  desktopRight: {
    // display: 'flex',
    textAlign: 'center',
    marginRight: '4px',
    textDecoration: 'none !important',
    color: 'inherit',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function AppAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
            <Link
            variant="h6"
            className={classes.mobileRight}
            href="/tutorial"
            >
              <p>Tutorial Services</p>
          </Link>
      </MenuItem>
      <MenuItem>
          <Link
            variant="h6"
            className={classes.mobileRight}
            href="/tutorial"
            >
        <p>Internet Services</p>
        </Link>
      </MenuItem>
      <MenuItem>
          <Link
            variant="h6"
            className={classes.mobileRight}
            href="/tutorial"
            >
        <p>About Us</p>
        </Link>
      </MenuItem>
      <MenuItem>
            <Link
            variant="h6"
            className={classes.mobileRight}
            href="/tutorial"
            >
        <p>Book An Appointment</p>
        </Link>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <React.Fragment className={classes.grow}>
      <AppBar className={classes.appBar} position="static" >
        <Toolbar>
           <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'Zenith EAC'}
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link
            variant="h6"
            className={classes.desktopRight}
            href="/tutorial"
          >
                  <SchoolIcon />
              <p>Tutorial Services</p>
          </Link>

          <Link
            variant="h6"
            className={classes.desktopRight}
            href="/"
          >
                  <PermScanWifiIcon />
              <p>Internet Services</p>
          </Link>

          <Link
            variant="h6"
            className={classes.desktopRight}
            href="/"
          >
                  <InfoIcon />
              <p>About Us</p>
          </Link>
          <Link
            variant="h6"
            className={classes.desktopRight}
            href="/"
          >
                  <EventAvailableIcon />
              <p>Book An Appointment</p>
          </Link>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      </React.Fragment>
  );
}