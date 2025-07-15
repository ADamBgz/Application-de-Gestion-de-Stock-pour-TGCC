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
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
      <div>
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
      </div>

      {/* Section Avatar */}
      <div className="avatar-section">
        <div className="avatar-container" onClick={handleClick}>
          <Avatar 
            alt="User Name" 
            src="/path/to/avatar.jpg" // Remplacez par le chemin de votre image ou laissez vide pour une icône par défaut
            sx={{ width: 36, height: 36 }}
          />
          <div className="avatar-info">
            <span className="avatar-name">Adam</span>
            <span className="avatar-role">Admin</span>
          </div>
        </div>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: '#1f2937',
              color: 'white',
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: '#1f2937',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose} className="avatar-menu-item">
            <AccountCircleIcon sx={{ mr: 1, fontSize: 20 }} />
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} className="avatar-menu-item">
            <SettingsIcon sx={{ mr: 1, fontSize: 20 }} />
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose} className="avatar-menu-item">
            <LogoutIcon sx={{ mr: 1, fontSize: 20 }} />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Side;