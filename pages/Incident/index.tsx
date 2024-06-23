import { useState } from "react";
import New from "../component/new"

const incidents = [
  {
    id: 1,
    name: "System Crash",
    status: "Open",
    created_at: "2024-06-08",
    assignee: "John Doe",
    priority: "High",
  },
  {
    id: 2,
    name: "Login Issue",
    status: "In Progress",
    created_at: "2024-06-07",
    assignee: "Jane Smith",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Service Request",
    status: "Resolved",
    created_at: "2024-06-06",
    assignee: "Mike Johnson",
    priority: "Low",
  },
  {
    id: 4,
    name: "Data Bug",
    status: "Open",
    created_at: "2024-06-05",
    assignee: "Emily Davis",
    priority: "High",
  },
];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);
  let [openInc, setOpenInc] = useState(false);
  
  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredIncidents(
      incidents.filter(
        (incident) =>
          incident.name.toLowerCase().includes(value.toLowerCase()) ||
          incident.status.toLowerCase().includes(value.toLowerCase()) ||
          incident.created_at.includes(value) ||
          incident.assignee.toLowerCase().includes(value.toLowerCase()) ||
          incident.priority.toLowerCase().includes(value.toLowerCase()) ||
          incident.id.toString().includes(value)
      )
    );
  };

  return (
    <>
      {!openInc ? (
        <>
          <h1 className="text-2xl font-bold">Incident</h1>
          <div className="bg-slate-100 max-h-[800px] overflow-auto p-5 mt-5 rounded-md">
            <div className="flex justify-between">
              <div className="cursor-pointer hover:bg-sky-700 bg-blue-700 w-32 text-center rounded-md p-1">
                <h1 className="text-white" onClick={() => setOpenInc(true)}>NEW</h1>
              </div>
    
              <div>
                <input
                  className="outline-none rounded-md caret-gray-200 p-1"
                  placeholder="search-INC"
                  type="search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="mt-5">
              <table className="min-w-full max-md:text-sm text-center bg-white">
                <thead>
                  <tr className="bg-blue-500">
                    <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Incident ID</th>
                    <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Name</th>
                    <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Status</th>
                    <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Created At</th>
                    <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Assignee</th>
                    <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIncidents.map((incident) => (
                    <tr key={incident.id} className="cursor-pointer hover:bg-slate-300">
                      <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.id}</td>
                      <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.name}</td>
                      <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.status}</td>
                      <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.created_at}</td>
                      <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.assignee}</td>
                      <td className="w-fit border-b p-2 max-md:p-0 rounded-md text-white">
                        <span className={`p-1 max-md:p-[1px] rounded-md ${incident.priority === "High" ? "bg-red-500" : (incident.priority === "Medium" ? "bg-orange-600" : "bg-green-500")}`}>
                          {incident.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <New openInc={openInc} setOpenInc={setOpenInc} /> 
      )}
    </>
  );
}
