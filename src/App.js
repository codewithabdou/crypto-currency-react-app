import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Home,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";

import "./App.css";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
      <div className="footer">
        <Typography.Text style={{textAlign : 'center',color : 'white' ,bottom : 0 , }}>
          CryptoVerse <br/>
          All rights reserved - Habouche Abderrahmène - 2022
        </Typography.Text>
        <Space size={20}>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Crypyocurrencies</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
};

export default App;
