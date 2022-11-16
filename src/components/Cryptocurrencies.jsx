import React, { useState, useEffect } from "react";
import millify from "millify";
import { Row, Col, Input, Card } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/CryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(data?.data?.coins);
  }, [isFetching]);

  useEffect(() => {
    if (searchTerm && cryptos) {
      setCryptos((currentValue) => {
        return currentValue.filter((coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }
  }, [searchTerm]);

  if (isFetching) return "Loading ...";

  return (
    <div>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Crypto-currency name"
            onChange={(e) => {
              setCryptos(data?.data?.coins);
              setSearchTerm(e.target.value);
            }}
          ></Input>
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto, index) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                style={{ borderRadius: 30 }}
                hoverable
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl} />}
              >
                <p>Price : {millify(crypto.price)}</p>
                <p>Market cap : {millify(crypto.marketCap)}</p>
                <p>Daily change : {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
