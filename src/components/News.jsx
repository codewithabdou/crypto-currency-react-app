import React, { useState,useEffect } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";
import { useGetCryptosNewsQuery } from "../services/CryptoNewsApi";
import { useGetCryptosQuery } from "../services/CryptoApi";
import "../App.css";
import Loader from "./Loader";

const { Text, Title } = Typography;
const demoImgUrl =
  "https://m.economictimes.com/thumb/msid-92171203,width-1600,height-1600,resizemode-4,imgsize-271908/top-cryptocurrency-prices-today-bitcoin-ethereum-hit-18-month-lows-avalanche-xrp-cardano-solana-plunge-up-to-15.jpg";

const News = ({ simplified }) => {
  const [searchValue, setSearchValue] = useState("Cryptocurrency");
  const { data: cryptos } = useGetCryptosQuery(100);
  const { data } = useGetCryptosNewsQuery({
    newsCategory: searchValue,
    count: simplified ? 6 : 20,
  });

  const options = cryptos?.data?.coins.map((coin, _) => ({
    label: coin.name,
    value: coin.name,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data || !cryptos) return <Loader />;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {!simplified && (
        <Col span={24}>
          <Select
            placeholder="Select a currency"
            showSearch
            style={{
              marginTop: "0.3rem",
              marginBottom: "1rem",
              width: 180,
            }}
            onChange={(value) => {
              setSearchValue(value);
            }}
            options={options}
          />
        </Col>
      )}

      <Row gutter={[24, 24]}>
        {data &&
          data.value.map((news, index) => (
            <Col xs={24} lg={8} md={12} key={index}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <Card
                  hoverable
                  className="news-card"
                  style={{ borderRadius: "2rem" }}
                >
                  <div className="news-image-container">
                    <Title level={4} className="news-title">
                      {news.name.length > 100
                        ? `${news.name.substring(0, 100)} ...`
                        : news.name}
                    </Title>
                    <img
                      src={
                        news?.image?.thumbnail?.contentUrl
                          ? news?.image?.thumbnail?.contentUrl
                          : demoImgUrl
                      }
                      alt="imgNews"
                    />
                  </div>
                  <p>
                    {news.description.length > 200
                      ? `${news.description.substring(0, 200)} ...`
                      : news.description}
                  </p>
                  <div className="provider-container">
                    <div className="provider-name">
                      <Avatar
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImgUrl
                        }
                        alt="news"
                      />
                      <Text style={{ marginLeft: "0.5rem" }}>
                        {news.provider[0]?.name}
                      </Text>
                    </div>
                    <Text>
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </Text>
                  </div>
                </Card>
              </a>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default News;
