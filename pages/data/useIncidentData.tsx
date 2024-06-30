import { useState, useEffect } from 'react';
import axios from 'axios';

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

let cachedData: Data[] | null = null; // Cache variable

export default function useIncidentData() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredIncidents, setFilteredIncidents] = useState<Data[]>([]);
  const [data, setData] = useState<Data[]>(cachedData || []);
  const [loading, setLoading] = useState(!cachedData); 
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      axios
        .get("http://localhost:3001/incidentcase")
        .then((response) => {
          const fetchedData: Data[] = response.data
          setData(fetchedData);
          cachedData = fetchedData; 
          setLoading(false);
          setIsDataFetched(true);
          console.log("Data loaded successfully", fetchedData);
        })
        .catch((error) => {
          console.error("Error loading data", error);
          setLoading(false);
        });
    }
  }, [isDataFetched]);

  useEffect(() => {
    if (data.length > 0) {
      const searchTermLower = searchTerm.toLowerCase();
      setFilteredIncidents(
        data.filter((incident) => 
          incident.summary.toLowerCase().includes(searchTermLower) ||
          incident.Incstatus.toLowerCase().includes(searchTermLower) ||
          (incident.opened && incident.opened.toLowerCase().includes(searchTermLower)) ||
          incident.AssignedTo.toLowerCase().includes(searchTermLower) ||
          incident.AssignmentGroup.toLowerCase().includes(searchTermLower)
        )
      );
    } else {
      setFilteredIncidents([]);
    }
  }, [searchTerm, data]);

  const handleSearch = (value: string) => {
    setSearchTerm(value.toLowerCase());
  };

  const pieChartData: PieChartData[] = data.map((incident) => ({
    ...incident,
    value: data.filter(i => i.summary === incident.summary).length,
  }));

  return {
    searchTerm,
    filteredIncidents,
    data,
    loading,
    handleSearch,
    pieChartData,
  };
}
