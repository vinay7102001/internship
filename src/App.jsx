import React, { useState } from 'react'
import './App.css'
import WeatherTable from './components/WeatherTable/WeatherTable'
import { Routes, Route } from "react-router-dom";
import WeatherDataOfCity from './components/WeatherForcast/WeatherDataOfCity';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<WeatherTable />} />
        <Route path='/:city/:lon/:lat' element={<WeatherDataOfCity />} />
      </Routes>
    </>
  )
}

export default App
