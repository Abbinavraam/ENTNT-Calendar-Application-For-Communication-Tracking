import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

function AnalyticsModule({ communicationRecords }) {
  const defaultRecords = [
    { method: "LinkedIn Post", date: "2024-12-20", isOverdue: false },
    { method: "Email", date: "2024-12-18", isOverdue: true },
    { method: "Phone Call", date: "2024-12-15", isOverdue: false },
    { method: "LinkedIn Post", date: "2024-12-10", isOverdue: true },
    { method: "Other", date: "2024-12-05", isOverdue: false },
  ];

  const records = communicationRecords || defaultRecords;

  const methodFrequency = records.reduce((acc, record) => {
    acc[record.method] = (acc[record.method] || 0) + 1;
    return acc;
  }, {});

  const overdueTimeline = records.reduce((acc, record) => {
    const formattedDate = new Date(record.date).toLocaleDateString();
    acc[formattedDate] = (acc[formattedDate] || 0) + (record.isOverdue ? 1 : 0);
    return acc;
  }, {});

  const frequencyChartData = {
    labels: Object.keys(methodFrequency),
    datasets: [
      {
        label: "Frequency of Communication Methods",
        data: Object.values(methodFrequency),
        backgroundColor: ["#AD8997", "#5B3A57", "#E95223", "#FC952D", "#9966FF"],
      },
    ],
  };

  const overdueChartData = {
    labels: Object.keys(overdueTimeline),
    datasets: [
      {
        label: "Overdue Communications Over Time",
        data: Object.values(overdueTimeline),
        backgroundColor: "#FF6384",
      },
    ],
  };

  return (
    <div>
      <h1>Analytics Module</h1>
      <h2>Communication Frequency Report</h2>
      {Object.keys(methodFrequency).length > 0 ? (
        <Pie data={frequencyChartData} />
      ) : (
        <p>No data available for communication</p>
      )}
    </div>
  );
}

export default AnalyticsModule;
