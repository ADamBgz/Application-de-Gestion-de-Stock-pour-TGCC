import React from "react";
import Side from "../components/Side.jsx";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Side />
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
