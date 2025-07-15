import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Login" element={<Login />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
