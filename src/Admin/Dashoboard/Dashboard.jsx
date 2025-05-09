import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["users", "products", "Sellers"],
    datasets: [
      {
        label: "admin",
        data: [126, 76, 76],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        borderColor: ["#fff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%", // कटआउट size (डोनट के लिए)
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h3>Users</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export { Dashboard };
