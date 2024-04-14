import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  citydata: [],
  page: 0,
  loading: false,
}

export const CitydataReducer = createSlice({
  name: 'citydata',
  initialState,
  reducers: {
    RequestCityData: (state, action) => {
      return { ...state, loading: true }
    },
    SuccessCityData: (state, action) => {
      return { ...state, citydata: [...state.citydata, ...action.payload.cityinfo], page: action.payload.newCount, loading: false }
    },
    FailCityData: (state, action) => {
      return { ...state, loading: false, error: action.payload }
    }
  }
})

export const { RequestCityData, SuccessCityData, FailCityData } = CitydataReducer.actions

export default CitydataReducer.reducer
