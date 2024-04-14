import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { FetchWeatherData } from '../../Redux/DataFetch'
import { useDispatch, useSelector } from "react-redux";
import WeatherCard from './WeatherCard/WeatherCard';

const WeatherDataOfCity = () => {
  const { city, lon, lat } = useParams()
  const dispatch = useDispatch()
  const [displyDate, setDisplayDate] = useState(0)
  const [unit, setUnit] = useState('standard')

  useEffect(() => {
    FetchWeatherData(dispatch, lat, lon, unit)
  }, [city, unit])

  const weather = useSelector(state => state.weatherData.weather)

  const DecreseDisplayCount = () => {
    if (displyDate !== 0) {
      const newdisplay = displyDate - 1
      setDisplayDate(newdisplay)
    }
  }

  const IncreseDisplayCount = () => {
    if (displyDate !== weather.length - 1) {
      const newdisplay = displyDate + 1
      setDisplayDate(newdisplay)
    }
  }

  return (
    <>
      {/* {city} */}
      <div className='h-screen flex flex-col gap-3 justify-center items-center bg-slate-700 text-gray-300'>
        <div className='flex gap-1 sm:gap-3 '>
          <button value='standard' className={unit === 'standard' ? 'px-2 py-1 border-none bg-white text-gray-800 rounded-full hover:opacity-50'
            : 'px-2 py-1 border-none bg-gray-600 text-white rounded-full'} onClick={(e) => { setUnit(e.target.value) }}>K/meter/s</button>
          <button value='metric' className={unit === 'metric' ? 'px-2 py-1 border-none bg-white text-gray-800 rounded-full hover:opacity-50'
            : 'px-2 py-1 border-none bg-gray-600 text-white rounded-full'} onClick={(e) => { setUnit(e.target.value) }}>C/meter/s</button>
          <button value='imperial' className={unit === 'imperial' ? 'px-2 py-1 border-none bg-white text-gray-800 rounded-full hover:opacity-50'
            : 'px-2 py-1 border-none bg-gray-600 text-white rounded-full'} onClick={(e) => { setUnit(e.target.value) }}>F/miles/h</button>
        </div>
        <div className='flex flex-col md:flex-row gap-3 justify-center items-center'>
          <div className='w-[100%] felx justify-between items-center'>
            <button className='w-[100%] md:px-4 md:py-14 flex items-center justify-center bg-gray-500 border-2 rounded-full text-3xl font-semibold hover:bg-opacity-50 hover:text-black' onClick={DecreseDisplayCount}>&lt;</button>
          </div>
          <div>
            {weather ? <WeatherCard data={weather[displyDate]} unit={unit} /> : ''}
          </div>
          <div className='w-[100%] felx justify-between items-center'>
            <button className='w-[100%] md:px-4 md:py-14 bg-gray-500 border-2 rounded-full text-3xl font-semibold hover:bg-opacity-50 hover:text-black' onClick={IncreseDisplayCount}>&gt;</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherDataOfCity
