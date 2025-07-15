import React from 'react';
import './Side.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';

function Side() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sidebar">
      {/* Logo déjà là */}
      <div className="tgcc-logo-custom">
        <span className="t-letter">T</span>
        <span className="gcc-text">GCC Stock</span>
      </div>

      {/* Menu principal */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <Inventory2Icon className="icon" />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/suppliers">
            <LocalShippingIcon className="icon" />
            <span>Suppliers</span>
          </Link>
        </li>
        <li>
          <Link to="/categories">
            <CategoryIcon className="icon" />
            <span>Categories</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <PeopleIcon className="icon" />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <BarChartIcon className="icon" />
            <span>Reports</span>
          </Link>
        </li>
      </ul>

      {/* Avatar en bas */}
      <div className="sidebar-avatar">
        <IconButton onClick={handleClick}>
          <Avatar sx={{ bgcolor: '#00b894', width: 36, height: 36 }}>A</Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <MenuItem onClick={handleClose}>Profil</MenuItem>
          <MenuItem onClick={handleClose}>Déconnexion</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Side;
