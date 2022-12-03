import React, { useState } from "react";
import { Avatar, Typography, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import logo from "../images/cryptocurrency.png";

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
        <div className="show-on-mobile-only">
          {menuHidden ? (
            <MenuOutlined
              style={{ color: "white" }}
              onClick={() => {
                setMenuHidden((currentValue) => !currentValue);
              }}
            />
          ) : (
            <CloseOutlined
              style={{ color: "white" }}
              onClick={() => {
                setMenuHidden((currentValue) => !currentValue);
              }}
            />
          )}
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        className={menuHidden ? "menu-hidden" : "menu-shown"}
      >
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="Crypto currencies" icon={<MoneyCollectOutlined />}>
          <Link to="/cryptocurrencies">Crypto currencies</Link>
        </Menu.Item>
        <Menu.Item key="News" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
