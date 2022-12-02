import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Api_key = '356befec72bb529a6e3de0bc3a66098d'

const TodayWeather = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState("")
    


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${Api_key}`

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=52.2319581&lon=21.0067249&appid=356befec72bb529a6e3de0bc3a66098d`

 const searchLocation = (event) => {
  if(event.key === "Enter"){
    axios.get(url).then((resp) => {
      setData(resp.data)
      console.log(resp.data); 
    })
    setLocation("")
   }
   
  }
 

  return (
    <div className="app">
      <div className='search'>
        <input 
         value={location}
         onChange={event => setLocation(event.target.value)}
         placeholder="Enter Locations"
         onKeyPress={searchLocation}
        type="text" />
      </div>
    <div className='container'>
      <div className='top'>
        <div className='location'>
          <p>{data.name}</p>
        </div>
        <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
          {/* <h1>{data.main.temp}</h1> */}
        </div>
        <div className='description'>
         {data.weather ? <p>{data.weather[0].main}</p> : null }
          {/* <p>Clouds</p> */}
        </div>
      </div>
      {data.name != undefined && 
        <div className='bottom'>
        <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
          {/* <p className='bold'>-1 C</p> */}
          <p>Feels Like</p>
        </div>
        <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          {/* <p className='bold'>50%</p> */}
          <p>Humidity</p>
        </div>
        <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} Km/h</p> : null}
          {/* <p className='bold'>2 km/h</p> */}
          <p>Window Speed</p>
        </div>
      </div>
      }
      
    </div>
    </div>
  );

}

export default TodayWeather