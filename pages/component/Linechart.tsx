// components/Linechart.tsx
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface LineChartData  {
  id: number;
  name: string;
  status: string;
  created_at: string;
  assignee: string;
  resolved_at?: string;
  priority: string;
  resolution_time: number | null;
 
}

interface LineChartProps {
  data: LineChartData[];
}

export default function LineChart({ data }: LineChartProps) {
  const chartData = {
    labels: data.map(incident => incident.created_at),
    datasets: [
      {
        label: 'Incidents Over Time',
        data: data.map(incident => incident.resolution_time ?? 0),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return <Line data={chartData} />;
}
