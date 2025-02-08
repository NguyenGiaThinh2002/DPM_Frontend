import React, {useState, useEffect} from 'react'
import DataTable from '../../Components/DataTable/DataTable'
export default function LogHistoryPage() {
    const [data, setData] = useState([]);
    const [dataName, setDataName] = useState("Logging History");
    const [dataColumns, setDataColumns] = useState(["Index", "URL", "Datetime", "Mode", "Status", "Detail"]);
    const [loading, setLoading] = useState(true);
    const now = new Date();
    const nowString = now.toISOString().slice(0, 19).replace("T", " ");
    
    useEffect(() => {
      // Fetch data from server
      // fetch('https://your-api-endpoint.com/data') // Replace with your API endpoint
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setData(data);
      //     setLoading(false);
      //   })
      //   .catch((error) => {
      //     console.error('Error fetching data:', error);
      //     setLoading(false);
      //   });
        const simulatedData = [
          { Index: 1, URL: 'https//:server.com/data', Datetime: nowString, Mode: 'Auto', Status: 'Successful' },
          { Index: 2, URL: 'https//:server.com/data', Datetime: nowString, Mode: 'Manual',Status: 'Successful' },
          { Index: 3, URL: 'https//:server.com/data', Datetime: nowString, Mode: 'Auto', Status: 'Failed' },
          { Index: 4, URL: 'https//:server.com/data', Datetime: nowString, Mode: 'Auto', Status: 'Successful' }
        ];
  
        // Simulate a delay to mimic fetching data from a server
        setTimeout(() => {
          setData(simulatedData);
          setLoading(false);
        }, 1000); // Delay for 1 second
    }, []);
  return (
    <div>
        {loading ? <div style={{marginTop: "150px"}}>Loading...</div> : <DataTable data={data} dataName={dataName} dataColumns={dataColumns}/>}
        
    </div>
  )
}
