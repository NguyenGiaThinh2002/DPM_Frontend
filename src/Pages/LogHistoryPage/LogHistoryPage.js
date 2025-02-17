import React, {useState, useEffect} from 'react'
import DataTable from '../../Components/DataTable/DataTable'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggings } from '../../features/loggings/loggingSlice.js';
export default function LogHistoryPage() {
    const [data, setData] = useState([]);
    const [dataName, setDataName] = useState("Logging History");
    const [loading, setLoading] = useState(true);
    const loggings = useSelector((state) => state.logging.loggings);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchLoggings());
    }, [dispatch]);

    useEffect(() => {
      setData(loggings);
      // console.log("loggings", loggings);
      setLoading(false);
    },[loggings])

  return (
    <div>
        {loading || data.length === 0 ? <div style={{marginTop: "150px"}}>Loading...</div> : <DataTable data={data} dataName={dataName}/>}
    </div>
  )
}
