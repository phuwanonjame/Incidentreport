

import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import useIncidentData from "../data/useIncidentData";


Chart.register(...registerables);

interface Data {
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
  resolution_time: number | null;
  resolved_at: string;
}

interface PieChartData extends Data {
  value: number;
}

const PieChart: React.FC = () => {
  const { pieChartData, loading } = useIncidentData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pieChartData.length) {
    return <div>No data available</div>;
  }

  const aggregatedData = pieChartData.reduce((acc: PieChartData[], incident: PieChartData) => {
    const existingIncident = acc.find((item: PieChartData) => item.summary === incident.summary);
    if (existingIncident) {
      existingIncident.value += incident.value;
    } else {
      acc.push({ ...incident });
    }
    return acc;
  }, [] as PieChartData[]);

  const chartData = {
    labels: aggregatedData.map((incident: PieChartData) => incident.summary),
    datasets: [
      {
        data: aggregatedData.map((incident: PieChartData) => incident.value),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;