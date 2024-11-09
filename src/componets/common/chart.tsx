import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CoolSpinner from "./cool-spinner";
import { ShouldRender } from "./should-render";

const customLegendPlugin = {
  id: "customLegend",
  afterUpdate(chart: ChartJS) {
    const { ctx, legend } = chart;
    if (!legend || !legend.legendItems) return;

    const radius = 8; // Radius of the circular legend item
    const yStart = chart.height - 30; // Adjust Y position for vertical alignment
    const xStart = (chart.width - legend.width) / 2;

    // Debugging: Log the legend and positions for visual confirmation
    console.log("Legend Items:", legend.legendItems, ctx, legend);
    console.log("Chart width:", chart.width);
    console.log("Legend width:", legend.width);

    // Clear previous drawings
    ctx.clearRect(0, 0, chart.width, chart.height);

    // Draw each legend item as a circle
    legend.legendItems.forEach((item, index) => {
      // Set the circle color (use the dataset color or fallback to black)
      ctx.fillStyle = item.fillStyle ? item.fillStyle : "#000";

      // Draw the circular legend item
      ctx.beginPath();
      ctx.arc(xStart + index * 60, yStart, radius, 0, Math.PI * 2); // Adjust spacing between circles
      ctx.fill();

      // Draw the legend text
      ctx.fillStyle = "#000"; // Text color
      ctx.font = "bold 12px Arial";
      ctx.fillText(item.text, xStart + index * 60 + radius + 5, yStart + 5); // Adjust text position next to circle
    });
  },
};

// Register the custom legend plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  customLegendPlugin
);

// Register the plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  customLegendPlugin
);

interface IBarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderRadius: {
        topLeft: number;
        topRight: number;
      };
      barThickness: number;
    }[];
  };
  loading: boolean;
}

const BarChart: React.FC<IBarChartProps> = ({ data, loading }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
      customLegend: customLegendPlugin,
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderDash: [5, 5],
        },
        border: {
          display: false,
        },
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          borderDash: [5, 5],
        },
        title: {
          display: true,
          text: "Total Items (in 1000s)",
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <ShouldRender check={loading}>
        <CoolSpinner />
      </ShouldRender>
      <ShouldRender check={!loading}>
        <Bar data={data} options={options} />
      </ShouldRender>
    </>
  );
};

export default BarChart;
