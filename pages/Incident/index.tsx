import {useState } from 'react';
import useIncidentData from '../data/useIncidentData';
import New from '../component/new';

interface Data {
  AssignedTo: string;
  AssignmentGroup: string;
  Caller: string;
  Category: string;
  ContactNumber: string | number; // ปรับให้รองรับทั้ง string และ number
  Incid: string;
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

const Index: React.FC = () => {
 
  const {searchTerm,filteredIncidents, data, loading ,handleSearch} = useIncidentData(); // รวม state loading เข้าไปด้วย
  const [openInc, setOpenInc] = useState<boolean>(false);

  
  return (
    <>
      {!openInc ? (
        <>
          <h1 className="text-2xl font-bold">Incident</h1>
          <div className="bg-slate-100 max-h-[800px] overflow-auto p-5 mt-5 rounded-md">
            <div className="flex justify-between">
              <div className="cursor-pointer hover:bg-sky-700 bg-blue-700 w-32 text-center rounded-md p-1">
                <h1 className="text-white" onClick={() => setOpenInc(true)}>
                  NEW
                </h1>
              </div>
              <div>
                <input
                  className="outline-none rounded-md caret-gray-200 p-1"
                  placeholder="Search Incident"
                  type="search"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)} // แก้ไข event handler ให้ถูกต้อง
                />
              </div>
            </div>
            <div className="mt-5">
              {loading ? (
                <p>Loading...</p> // แสดงข้อความ Loading...
              ) : (
                <table className="min-w-full max-md:text-sm text-center bg-white">
                  <thead>
                    <tr className="bg-blue-500">
                      <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Incident ID</th>
                      <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Summary</th>
                      <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Opened At</th>
                      <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Opened By</th>
                      <th className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredIncidents.length > 0 ? (
                      filteredIncidents.map((incident) => (
                        <tr key={incident._id} className="cursor-pointer hover:bg-slate-300">
                          <td className="py-2 px-4 max-md:py-1 max-md:px-1 border-b">{incident.Incid}</td>
                          <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.summary}</td>
                          <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.opened}</td>
                          <td className="py-2 px-4 max-md:py-0 max-md:px-0 border-b">{incident.openedBy}</td>
                          <td className="w-fit border-b p-2 max-md:p-0 rounded-md text-white">
                            <span
                              className={`p-1 max-md:p-[1px] rounded-md ${
                                incident.Incstatus === "Active"
                                  ? "bg-red-500"
                                  : incident.Incstatus === "in Progress"
                                  ? "bg-orange-600"
                                  : "bg-green-500"
                              }`}
                            >
                              {incident.Incstatus}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-2 px-4 border-b">No incidents found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </>
      ) : (
        <New openInc={openInc} setOpenInc={setOpenInc} />
      )}
    </>
  );
};

export default Index;
