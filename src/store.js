import { configureStore } from '@reduxjs/toolkit'
import CitydataReducer from './Redux/Citydatareucer'
import Searchcityreducer from './Redux/SearchCityreducer'
import weatherData from './Redux/WeatherData'

export const store = configureStore({
  reducer: {
    CitydataReducer: CitydataReducer,
    Searchcityreducer: Searchcityreducer,
    weatherData: weatherData
  }
})
