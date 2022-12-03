import React from "react";
import { Row, Col, Typography } from "antd";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, coinName, coinCurrentPrice }) => {
  console.log(coinHistory.history);

  const coinPrices = [];
  const coinTimestamps = [];

  for (let i = 0; i !== coinHistory.history.length; i++) {
    coinPrices.push(coinHistory.history[i].price);
    coinTimestamps.push(
      new Date(coinHistory.history[i].timestamp).toLocaleDateString()
    );
  }

  const options = {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    responsive: true,
  };

  const data = {
    labels: coinTimestamps,
    datasets: [
      {
        label: `${coinName} price in USD`,
        data: coinPrices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log(coinPrices);
  console.log(coinTimestamps);

  return (
    <>
      <Row className="chart-header">
        <Typography.Title className="chart-title" level={2}>
          {coinName} Price Chart
        </Typography.Title>
        <Row className="price-container">
          <Typography.Title level={5} className="price-change">
            Change : {coinHistory.change} %
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current Price : {coinCurrentPrice} $
          </Typography.Title>
        </Row>
      </Row>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
