import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

const Table = (props) => {

  const navigate = useNavigate()

  const { name, country_code, cou_name_en, timezone, coordinates: { lon, lat } } = props.data

  const RedirectToWeatherPage = () => {
    navigate(`/${name}/${lon}/${lat}`)
  }

  return (
    <tr onClick={RedirectToWeatherPage} className='cursor-pointer'>

      <td>{name}</td>
      <td>{cou_name_en}</td>
      <td>{country_code}</td>
      <td>{timezone}</td>
      <td>{`${lon} - ${lat}`}</td>

    </tr>

  )
}

export default Table
