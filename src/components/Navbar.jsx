import React from "react";
import { Avatar, Typography, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import logo from "../images/cryptocurrency.png";
import MenuItem from "antd/lib/menu/MenuItem";
import Item from "antd/lib/list/Item";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link>
        </Typography.Title>
      </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="Home" icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="Crypto currencies" icon={<MoneyCollectOutlined/>}>
            <Link to="/cryptocurrencies">Crypto currencies</Link>
          </Menu.Item>
          <Menu.Item key="Exchanges" icon={<FundOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="News" icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
    </div>
  );
};

export default Navbar;
