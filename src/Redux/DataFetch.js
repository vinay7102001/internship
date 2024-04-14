import { RequestCityData, SuccessCityData, FailCityData } from '../Redux/Citydatareucer'
import { RequestSearchData, SuccessSearchData, FailSearchData } from '../Redux/SearchCityreducer.js'
import axios from 'axios'
import { store } from '../store.js'
import { Requestweatherdate, Successweatherdata, Failweatherdata } from "../Redux/WeatherData.js";

export const FetchCityData = async (dispatch) => {
  try {
    dispatch(RequestCityData())
    const oldCount = store.getState().CitydataReducer.page
    const data = await axios.get(`https://documentation-resources.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&offset=${oldCount}`)

    const cityinfo = await data.data.results

    const newCount = oldCount + 1
    dispatch(SuccessCityData({ cityinfo, newCount }))
  } catch (err) {
    console.log(err)
    dispatch(FailCityData(err))
  }
}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const FetchSearchData = async (cityName, dispatch) => {
  try {
    dispatch(RequestSearchData())

    if (typeof cityName === 'string') {
      cityName = capitalizeFirstLetter(cityName)
    }

    const data = await axios.get(`https://documentation-resources.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&refine=name%3A${cityName}`)

    const cityinfo = await data.data.results

    dispatch(SuccessSearchData(cityinfo))

  } catch (err) {
    console.log(err)
    dispatch(FailSearchData(err))
  }
}


export const FetchWeatherData = async (dispatch, lon, lat, unit) => {
  try {
    dispatch(Requestweatherdate())
    const data = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=80&appid=d4d296c111a46ffd56ee07aa0a9d7ac1&units=${unit}`)



    const items = await data.data.list
    let array = []
    array.push(items[0])
    for (let i = 0; i < items.length - 1; i++) {
      if ((new Date(items[i].dt * 1000).toLocaleDateString()) != (new Date(items[i + 1].dt * 1000).toLocaleDateString())) {
        array.push(items[i + 1])
      }
    }

    dispatch(Successweatherdata(array))

  } catch (err) {
    console.log(err)
    dispatch(Failweatherdata(err))
  }
} 