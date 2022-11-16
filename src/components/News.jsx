import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment/moment";
import { useGetCryptosNewsQuery } from "../services/CryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImgUrl =
  "https://m.economictimes.com/thumb/msid-92171203,width-1600,height-1600,resizemode-4,imgsize-271908/top-cryptocurrency-prices-today-bitcoin-ethereum-hit-18-month-lows-avalanche-xrp-cardano-solana-plunge-up-to-15.jpg";

const News = ({ simplified }) => {
  const { data, isFeching } = useGetCryptosNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 20,
  });
  console.log(data);

  if (isFeching) return "Loading ...";
  return (
    <Row gutter={[24, 24]}>
      {data &&
        data.value.map((news, index) => (
          <Col xs={24} lg={8} md={12} key={index} >
            <Card hoverable className="news-card" style={{borderRadius : "2rem"}}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title level={4} className="news-title">
                    {news.name.length>100 ? `${news.name.substring(0,100)} ...` : news.name}
                  </Title>
                  <img
                    src={
                      news?.image?.thumbnail?.contentUrl
                        ? news?.image?.thumbnail?.contentUrl
                        : demoImgUrl
                    }
                    style={{ height: 100, width: 100 }}
                    alt="imgNews"
                  />
                </div>
                <p>
                  {news.description.length > 200
                    ? `${news.description.substring(0, 200)} ...`
                    : news.description}
                </p>
              </a>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default News;
