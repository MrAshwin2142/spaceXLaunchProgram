import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import Filter from './components/Filter';
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);
  let url = 'https://api.spacexdata.com/v3/launches?limit=100'
  const [launch_year, setYear] = useState("");
  const [launch_success, setLaunch_success] = useState("");
  const [land_success, setLand_success] = useState("");

  const filterYear = (year) => {
    setYear(year);
  }

  const filterLand = (land) => {
    setLand_success(land);
  }
  const filterLaunch = (launch) => {
    setLaunch_success(launch);
  }



  useEffect(() => {
    const fetchData = async () => {
      if (launch_year === "" && land_success === "" && launch_success === "") {
        try {
          const response = await axios.get(url);

          setData(response.data);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      }
      else {
        try {
          const response = await axios.get(url, {
            params: {
              launch_year,
              launch_success,
              land_success,
            },
          });
          console.log(response)
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      }
    };

    fetchData();
  }, [launch_success, land_success, launch_year]);



  return (
    <div className='main-container' >
      <Filter filterYear={filterYear} filterLand={filterLand} filterLaunch={filterLaunch} />
      <div className='cards'>
        {data
          .map((item) => (
            <div key={item.flight_number}>
              <Card item={item} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
