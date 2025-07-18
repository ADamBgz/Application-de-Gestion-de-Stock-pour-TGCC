import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./layouts/Layout";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Product from "./pages/Product";
import Suppliers from "./pages/Suppliers";
import Project from "./pages/Project"; // S7i7 l-import (P majuscule)
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./App.css";
import "./i18n";

function App() {
  // state dyal darkMode
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  // tbdl darkMode mn Settings
  useEffect(() => {
    const stored = localStorage.getItem("darkMode") === "true";
    setDarkMode(stored);
  }, []);

  // theme object
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          ...(darkMode
            ? {
                background: { default: "#18181b", paper: "#23232a" },
                text: { primary: "#f3f4f6" },
              }
            : {}),
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Product darkMode={darkMode} />} />
            <Route
              path="/suppliers"
              element={<Suppliers darkMode={darkMode} />}
            />
            <Route path="/projects" element={<Project darkMode={darkMode} />} />{" "}
            {/* S7i7 l-path */}
            <Route path="/users" element={<Users darkMode={darkMode} />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/settings"
              element={
                <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
