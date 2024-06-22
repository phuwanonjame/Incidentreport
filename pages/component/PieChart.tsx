// components/PieChart.tsx
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface PieChartData {
  id: number;
  name: string;
  status: string;
  created_at: string;
  resolved_at?: string;
  assignee: string;
  priority: string;
  resolution_time: number | null;
  value: number; // Add the value field
}

interface PieChartProps {
  data: PieChartData[];
}

export default function PieChart({ data }: PieChartProps) {
  if (!data) {
    return null; 
  }
  // Aggregate values for incidents with the same name
  const aggregatedData = data.reduce((acc, incident) => {
    const existingIncident = acc.find(item => item.name === incident.name);
    if (existingIncident) {
      existingIncident.value += incident.value;
    } else {
      acc.push({ ...incident });
    }
    return acc;
  }, [] as PieChartData[]);

  const chartData = {
    labels: aggregatedData.map(incident => incident.name),
    datasets: [
      {
        data: aggregatedData.map(incident => incident.value),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return <Pie data={chartData} />;
}
