import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';
import Filter from './components/Filter';
import axios from 'axios'
import Header from './components/Header';
function App() {
  const [data, setData] = useState([]);
  let url = 'https://api.spacexdata.com/v3/launches?limit=100'
  const [launch_year, setYear] = useState("");
  const [launch_success, setLaunch_success] = useState("");
  const [land_success, setLand_success] = useState("");
  const [search, setSearch] = useState("");

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
      
        try {
          const response = await axios.get(url, {
            params: {
              launch_success,
              land_success,
              launch_year,
            },
          });
          console.log(response)
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data', error);
        }
    };

    fetchData();
  }, [launch_success, land_success, launch_year]);



  return (
    <div className='main-container' >
        <Header/>
      <Filter filterYear={filterYear} filterLand={filterLand} filterLaunch={filterLaunch} launch_year={launch_year}/>
      <div className='cards'>
        <input placeholder='Search Launch Program...' onChange={(e) => {
          setSearch(e.target.value)
          // console.log(search)
        }} />
        {data
          .filter((item) => (
            search === "" ? true : item.mission_name.toLowerCase().includes(search.toLowerCase())
          ))
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
