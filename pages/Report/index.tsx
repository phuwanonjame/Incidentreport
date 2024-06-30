import React from "react";
import useIncidentData from "../data/useIncidentData";
import PieChart from "../component/PieChart";
import LineChart from "../component/Linechart"; // Ensure this path is correct

interface Incident {
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

const Report: React.FC = () => {
  const { data: incidents, loading } = useIncidentData();

  if (loading) {
    return <div>Loading...</div>;
  }

  const resolvedIncidents = incidents.filter(
    (incident) => incident.Incstatus === "Resolved"
  );
  const totalIncidents = incidents.length;
  const totalResolved = resolvedIncidents.length;
  const totalOpen = incidents.filter(
    (incident) => incident.Incstatus === "Open"
  ).length;
  const averageResolutionTime =
    totalResolved > 0
      ? resolvedIncidents.reduce(
          (sum, incident) => sum + (incident.resolution_time ?? 0),
          0
        ) / totalResolved
      : 0;

  return (
    <div className=" bg-slate-100  max-md:overflow-hidden max-md:max-h-full max-h-[800px] overflow-auto p-5 mt-5 max-md:mt-0 rounded-md ">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      <div className="mb-6 bg-slate-100 p-5 rounded-md">
        <div className=" bg-white w-fit p-5 rounded-md shadow-md">
          <h2 className="text-xl mb-2">Incident Resolution Report</h2>
          <p>Total Incidents: {totalIncidents}</p>
          <p>Resolved Incidents: {totalResolved}</p>
          <p>Open Incidents: {totalOpen}</p>
          <p>
            Average Resolution Time: {averageResolutionTime.toFixed(2)} hours
          </p>
        </div>

        <div className="flex justify-center max-md:grid max-md:gap-5 gap-5">
          <div className="w-3/4">
            <div className="mt-4  line-chart max-md:w-[90vw]  p-2 rounded-md shadow-md bg-white">
              <h1 className=" text-xl mb-2  rounded-md text-white p-1 bg-blue-600">Team Incident Over Time</h1>
              <LineChart data={incidents} condition={1} />
            </div>
          </div>

          <div className="pie-chart max-md:w-96 bg-white p-2 rounded-md shadow-md mt-4 w-[500px]">
            <h2 className="text-xl mb-2 text-white p-1 rounded-md bg-blue-600">Team Performance Report</h2>
            <PieChart />
          </div>
        </div>
        <div className="mb-6 max-md:mb-0">
          <div className="">
            <div className="  flex justify-center">
              <table className=" w-full shadow-md text-center max-md:text-[10px] bg-white mt-4">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="py-2 px-4 max-md:py-0  max-md:px-0  border-b">
                      Incident ID
                    </th>
                    <th className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                      Name
                    </th>
                    <th className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                      Created At
                    </th>
                    <th className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                      Resolved At
                    </th>
                    <th className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                      Assignee
                    </th>
                    <th className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                      Resolution Time (hours)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resolvedIncidents.map((incident) => (
                    <tr key={incident._id} className=" max-md:text-[14px]">
                      <td className="py-2 px-4 max-md:py-0  max-md:px-0  border-b">
                        {incident.Incid}
                      </td>
                      <td className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                        {incident.summary}
                      </td>
                      <td className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                        {incident.opened}
                      </td>
                      <td className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                        {incident.resolved_at || "N/A"}
                      </td>
                      <td className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                        {incident.AssignedTo}
                      </td>
                      <td className="py-2 px-4 max-md:py-0  max-md:px-0 border-b">
                        {incident.resolution_time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <table className="w-full h-fit text-center shadow-md  bg-white mt-4">
              <thead>
                <tr className="bg-green-500 text-white max-md:text-[10px]">
                  <th className="py-2 px-4 border-b">Assignee</th>
                  <th className="py-2 px-4 border-b">Resolved Incidents</th>
                  <th className="py-2 px-4 border-b">
                    Average Resolution Time (hours)
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(
                  resolvedIncidents.reduce((acc, incident) => {
                    const { AssignedTo, resolution_time } = incident;
                    if (!acc[AssignedTo])
                      acc[AssignedTo] = { count: 0, totalResolutionTime: 0 };
                    acc[AssignedTo].count += 1;
                    acc[AssignedTo].totalResolutionTime += resolution_time ?? 0;
                    return acc;
                  }, {} as Record<string, { count: number; totalResolutionTime: number }>)
                ).map(([AssignedTo, { count, totalResolutionTime }]) => (
                  <tr key={AssignedTo} className="max-md:text-[10px]">
                    <td className="py-2 px-4 border-b">{AssignedTo}</td>
                    <td className="py-2 px-4 border-b">{count}</td>
                    <td className="py-2 px-4 border-b">
                      {(totalResolutionTime / count).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
