import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const BarChart = (props) => {
  const { count, label } = { ...props.chartDatas };
  const labels = props.chartDatas.label;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: props.chartDatas.count,
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};
export default BarChart;
