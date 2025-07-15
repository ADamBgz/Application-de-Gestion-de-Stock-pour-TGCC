import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Product from "./pages/Product";
import Suppliers from "./pages/Suppliers"; // zdt l-import

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Login" element={<Login />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/suppliers" element={<Suppliers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
