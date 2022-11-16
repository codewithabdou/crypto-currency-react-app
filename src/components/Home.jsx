import React from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";
import {News,Cryptocurrencies} from "./";
const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(1);

  const globalStatsData = data?.data?.stats;

  if (isFetching) return "Loading ...";

  return (
    <div>
      <Typography.Title level={2}>Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStatsData.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStatsData.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStatsData.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStatsData.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStatsData.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Crypto-currencies in the world</Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptocurrencies">show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified={true}/>

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest Crypto news</Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/news">show more</Link>
        </Typography.Title>
      </div>
      <News simplified={true}/>
    </div>
  );
};

export default Home;
