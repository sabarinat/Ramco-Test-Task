import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
    const { count, label } = { ...props.chartDatas };
    const labels = label;
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: count,
        },
      ],
    };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};
export default LineChart;
