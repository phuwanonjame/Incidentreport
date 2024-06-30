import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface LineChartData {
  AssignedTo: string;
  AssignmentGroup: string;
  Caller: string;
  Category: string;
  ContactNumber: string;
  Incid: number;
  Incstatus: string;
  Userid: number;
  location: string;
  opened: string;
  openedBy: string;
  summary: string;
  symptom: string;
  _id: string;
  resolution_time: null | number;
  resolved_at: string;
}

interface LineChartProps {
  data: LineChartData[];
  condition: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, condition }) => {
  if (!data.length) {
    return <div>No data available</div>;
  }

  const renderIncidentsOverTime = () => {
    const chartData = {
      labels: data.map((incident: LineChartData) => incident.opened),
      datasets: [
        {
          label: "Incidents Over Time",
          data: data.map(
            (incident: LineChartData) => incident.resolution_time ?? 0
          ),
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
          fill: true,
        },
      ],
    };

    return <Line data={chartData} />;
  };

  const renderTotalIncidents = () => {
    // Aggregate incidents by date
    const incidentCountByDate = data.reduce(
      (acc: Record<string, number>, incident: LineChartData) => {
        const date = incident.opened.split("T")[0]; // Assuming 'opened' is in ISO format
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      },
      {}
    );

    // Prepare the data for the Line chart
    const totalIncidentsData = {
      labels: Object.keys(incidentCountByDate),
      datasets: [
        {
          label: "Total Incidents",
          data: Object.values(incidentCountByDate),
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
          fill: true,
        },
      ],
    };

    return <Line data={totalIncidentsData} />;
  };

  const renderTotalResolutionTime = () => {
    const totalResolutionTimeData = {
      labels: data.map((incident: LineChartData) => incident.opened),
      datasets: [
        {
          label: "Total Resolution Time",
          data: data.map(
            (incident: LineChartData) => incident.resolution_time ?? 0
          ),
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    };

    return <Line data={totalResolutionTimeData} />;
  };

  return (
    <div>
      {condition === 2 && <div>{renderTotalIncidents()}</div>}
      {condition === 1 && <div>{renderIncidentsOverTime()}</div>}
      {/* {renderTotalResolutionTime()} */}
    </div>
  );
};

export default LineChart;
