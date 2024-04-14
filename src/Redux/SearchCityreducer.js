import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  citydata: [],
  page: 0,
  loading: false,
}

export const Searchcityreducer = createSlice({
  name: 'searchcitydata',
  initialState,
  reducers: {
    RequestSearchData: (state, action) => {
      return { ...state, loading: true }
    },
    SuccessSearchData: (state, action) => {
      return { ...state, citydata: action.payload, loading: false }
    },
    FailSearchData: (state, action) => {
      return { ...state, loading: false, error: action.payload }
    }
  }
})

export const { RequestSearchData, SuccessSearchData, FailSearchData } = Searchcityreducer.actions

export default Searchcityreducer.reducer
