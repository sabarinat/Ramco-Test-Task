import { Doughnut } from "react-chartjs-2";
import React from "react";

const DoughnutChart = (props) => {
    const { count, label } = { ...props.chartDatas };
    const labels = label;
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: [
            "rgb(242,165,152)",
            "rgb(255,232,157)",
            "rgb(236,107,109)",
            "rgb(122,231,125)",
            "rgb(195,233,151)"
          ],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          data: count,
        },
      ],
    };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};
export default DoughnutChart;