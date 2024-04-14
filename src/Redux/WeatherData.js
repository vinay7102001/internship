import { createSlice } from '@reduxjs/toolkit'


const initialState =
{
  weather: [],
  loading: false,
}

export const weatherData = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    Requestweatherdate: (state, action) => {
      return { ...state, loading: true }
    },
    Successweatherdata: (state, action) => {
      return { ...state, loading: false, weather: action.payload }
    },
    Failweatherdata: (state, action) => {
      return { ...state, loading: false, error: action.payload }
    }
  }
})

export const { Requestweatherdate, Successweatherdata, Failweatherdata } = weatherData.actions

export default weatherData.reducer