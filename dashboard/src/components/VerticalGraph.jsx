import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div className="container-fluid mb-4">
      <div
        className="p-2"
        style={{
          width: "100%",
          minHeight: "300px",
          maxHeight: "500px",
          height: "400px",
          overflowX: "auto",
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
