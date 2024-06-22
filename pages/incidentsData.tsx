import React from 'react';

interface Incident {
  id: number;
  name: string;
  status: string;
  created_at: string;
  resolved_at: string;
  assignee: string;
  priority: string;
  resolution_time: number | null;
}

export const incidents: Incident[] = [
  { id: 1, name: "System Crash", status: "Unresolved", created_at: "2024-06-08", resolved_at: "2024-06-05", assignee: "John Doe", priority: 'High', resolution_time: null },
  { id: 2, name: "Login Issue", status: "In Progress", created_at: "2024-06-07", resolved_at: "2024-06-05", assignee: "Jane Smith", priority: 'Medium', resolution_time: null },
  { id: 3, name: "Service Request", status: "Resolved", created_at: "2024-06-06", resolved_at: "2024-06-05", assignee: "Mike Johnson", priority: 'Low', resolution_time: 5 },
  { id: 4, name: "Data Bug", status: "Resolved", created_at: "2024-06-05", resolved_at: "2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 6 },
  { id: 5, name: "Data Bug", status: "Resolved", created_at: "2024-06-05", resolved_at: "2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 8 },
  { id: 6, name: "Data Bug", status: "Resolved", created_at: "2024-06-05", resolved_at: "2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 5 },
  { id: 7, name: "Data Bug", status: "Resolved", created_at: "2024-06-05", resolved_at: "2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 10 },
];

// สร้างข้อมูล lineChartData และ pieChartData จาก incidents
interface LineChartData extends Incident {
  date: string;
  count: number;
}

interface PieChartData extends Incident {
  value: number;
}

export const lineChartData: LineChartData[] = incidents.map(incident => ({
  ...incident,
  date: incident.created_at,
  count: 1
}));

// ระบุชนิดข้อมูลของ statusCounts อย่างชัดเจน
const statusCounts: { [key: string]: number } = incidents.reduce((acc: { [key: string]: number }, incident: Incident) => {
  acc[incident.status] = (acc[incident.status] || 0) + 1;
  return acc;
}, {});

export const pieChartData: PieChartData[] = incidents.map(incident => ({
  ...incident,
  value: statusCounts[incident.status]
}));

const IncidentsDataPage: React.FC = () => {
  return (
    <div>
      <h1>Incidents Data</h1>
      {/* คุณสามารถเพิ่มการแสดงผลข้อมูล incidents, lineChartData, pieChartData ที่นี่ */}
    </div>
  );
};

export default IncidentsDataPage;
