
import PieChart from './component/PieChart';
import LineChart from './component/Linechart'; 
import useIncidentData from './data/useIncidentData';

const Home: React.FC = () => {
  const { data: totalIncidentsData } = useIncidentData();

  return (
    <div className="">
      <div>
        <h4 className="text-2xl font-bold max-md:ml-5">Dashboard</h4>
      </div>
      <div className="bg-slate-100 max-md:overflow-hidden max-md:max-h-full max-h-[800px] overflow-auto p-5 mt-5 max-md:mt-0 rounded-md">
        <div>
          <h1 className="text-red-500 text-2xl font-bold p-2">Incident Overview</h1>
        </div>
        <div className="flex flex-row justify-center max-md:grid max-md:grid-cols-2 items-center gap-5">
          <div className="bg-white max-md:w-full text-center w-72 h-32 border-b-4 flex border-red-500 rounded-md shadow-md">
            <div className="p-5 w-full">
              <span className="text-gray-500 max-md:text-[12px]">Total Incidents:</span>
              <div className="flex justify-center">
                <h1 className="text-5xl">{totalIncidentsData.length}</h1>
              </div>
            </div>
          </div>
          <div className="bg-white max-md:w-full w-72 h-32 border-b-4 border-blue-500 rounded-md shadow-md">
            <div className="p-5">
              <span className="text-gray-500 max-md:text-[12px]">Unresolved Incidents:</span>
              <div className="flex justify-center">
                <h1 className="text-5xl">
                  {totalIncidentsData.filter((incident) => incident.Incstatus === 'Unresolved').length}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-white max-md:w-full w-72 h-32 border-b-4 border-green-500 rounded-md shadow-md">
            <div className="p-5">
              <span className="text-gray-500 max-md:text-[12px]">Incidents In Progress:</span>
              <div className="flex justify-center">
                <h1 className="text-5xl">
                  {totalIncidentsData.filter((incident) => incident.Incstatus === 'In Progress').length}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-white max-md:w-full max-md:text-center w-72 h-32 border-b-4 border-orange-500 rounded-md shadow-md">
            <div className="p-5">
              <span className="text-gray-500 max-md:text-[12px]">Resolved Incidents:</span>
              <div className="flex justify-center">
                <h1 className="text-5xl">
                  {totalIncidentsData.filter((incident) => incident.Incstatus === 'Resolved').length}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly max-md:grid max-md:max-h-full max-h-[500px] mt-5 max-md:gap-2 gap-9">
          <div className="line-chart max-md:w-[90vw] w-1/2 p-2 rounded-md shadow-md bg-white">
            <h2 className="text-xl bg-blue-700 rounded-md text-white p-2">Incidents Over Time</h2>
            <LineChart data={totalIncidentsData} condition={2} />
          </div>
          <div className="w-[420px] max-md:w-screen">
            <div className="pie-chart max-md:w-[90vw] p-2 rounded-md shadow-md bg-white">
              <h2 className="text-xl bg-blue-700 rounded-md text-white p-2">Incident Types</h2>
              <PieChart />
            </div>
          </div>
        </div>
        <div className="recent-incidents max-md:w-[90vw] mt-5 max-md:p-0 p-5 bg-white rounded-md shadow-md">
          <h2 className="text-xl mb-4 bg-blue-700 rounded-md text-white p-2">Recent Incidents</h2>
          <table className="min-w-full max-md:text-[10px] bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Incident ID</th>
                <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Name</th>
                <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Status</th>
                <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Created At</th>
                <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Assignee</th>
              </tr>
            </thead>
            <tbody>
              {totalIncidentsData.map((incident) => (
                <tr key={incident._id} className="text-center">
                  <td className="py-2 px-4 max-md:py-1 max-md:px-1 border-b">{incident.Incid}</td>
                  <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.summary}</td>
                  <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.Incstatus}</td>
                  <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.opened}</td>
                  <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.AssignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
