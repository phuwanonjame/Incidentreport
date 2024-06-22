
export const incidents = [
    { id: 1, name: "System Crash", status: "Unresolved", created_at: "2024-06-08",resolved_at:"2024-06-05", assignee: "John Doe", priority: 'High', resolution_time: null },
    { id: 2, name: "Login Issue", status: "In Progress", created_at: "2024-06-07",resolved_at:"2024-06-05", assignee: "Jane Smith", priority: 'Medium', resolution_time: null },
    { id: 3, name: "Service Request", status: "Resolved", created_at: "2024-06-06",resolved_at:"2024-06-05", assignee: "Mike Johnson", priority: 'Low', resolution_time: 5 },
    { id: 4, name: "Data Bug", status: "Resolved", created_at: "2024-06-05",resolved_at:"2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 6 },
    { id: 5, name: "Data Bug", status: "Resolved", created_at: "2024-06-05",resolved_at:"2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 8 },
    { id: 6, name: "Data Bug", status: "Resolved", created_at: "2024-06-05",resolved_at:"2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 5 },
    { id: 7, name: "Data Bug", status: "Resolved", created_at: "2024-06-05",resolved_at:"2024-06-05", assignee: "Emily Davis", priority: 'High', resolution_time: 10 },
  ];
  
  // สร้างข้อมูล lineChartData และ pieChartData จาก incidents
  export const lineChartData = incidents.map(incident => ({
    ...incident,
    date: incident.created_at,
    count: 1
  }));
  
  export const pieChartData = incidents.map(incident => ({
    ...incident,
    value: incidents.filter(i => i.status === incident.status).length
  }));
  