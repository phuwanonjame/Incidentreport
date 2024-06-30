import useIncidentData from './data/useIncidentData';

interface Data {
  AssignedTo: string;
  AssignmentGroup: string;
  Caller: string;
  Category: string;
  ContactNumber: string; // Ensure ContactNumber is consistently defined
  Incid: number; // Assuming Incid is a number based on context
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

export const { data } = useIncidentData();

export interface LineChartData extends Data {
  date: string;
  count: number;
}

export interface PieChartData extends Data {
  value: number;
}

export const lineChartData: LineChartData[] = data.map(incident => ({
  ...incident,
  date: incident.opened,
  count: 1
}));

const statusCounts: { [key: string]: number } = data.reduce((acc, incident) => {
  acc[incident.Incstatus] = (acc[incident.Incstatus] || 0) + 1;
  return acc;
}, {} as { [key: string]: number }); 

export const pieChartData: PieChartData[] = data.map(incident => ({
  ...incident,
  value: statusCounts[incident.Incstatus]
}));

export default { lineChartData, pieChartData };
