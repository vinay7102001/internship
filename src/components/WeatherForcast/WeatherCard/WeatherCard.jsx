import React, { useEffect } from 'react'
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { WiThermometer } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { useNavigate } from 'react-router-dom';

const WeatherCard = (props) => {
  const navigate = useNavigate()

  const dateConverter = (dt) => {
    const date = new Date(dt * 1000).toLocaleDateString('en-GB')
    // console.log(date)
    return date
  }

  return (
    <>
      <div className='w-[95vw] md:w-[80vw] lg:w-[65vw] flex flex-col md:flex-row justify-center items-center rounded-md border-2 font-semibold'>
        {props?.data ? <div className='w-[100%] flex justify-center items-center flex-col'>
          <div className='h-[10vh] md:h-[20vh] w-[100%] flex justify-center items-center bg-white '>
            <img className='h-[70%] object-contain' src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt="weather icone" />
            <span className='text-black ml-1'>{dateConverter(props.data.dt)}</span>
          </div>

          <div className='h-[40vh] md:h-[20vh] w-[100%] flex flex-row'>
            <div className='basis-[60%] flex flex-col md:flex-row gap-2 justify-center items-center bg-black'>
              <div className='basis-[40%] flex flex-col justify-center items-center'>
                <span>Current Temp</span>
                <div className='flex flex-row justify-center items-center '>
                  <WiThermometer size={40} /> {props.data.main.temp} {props.unit === 'standard' ? ` °K` : props.unit === 'metric' ? ` °C`
                    : ` °F`}
                </div>
              </div>
              <div className='basis-[30%] flex flex-col justify-center items-center'>
                <span>low Temp</span>
                <div className='flex flex-row justify-center items-center '>
                  <WiThermometer size={40} /> {props.data.main.temp_min} {props.unit === 'standard' ? ` °K` : props.unit === 'metric' ? ` °C`
                    : ` °F`}
                </div>
              </div>
              <div className='basis-[30%] flex flex-col justify-center items-center'>
                <span>high Temp</span>
                <div className='flex flex-row justify-center items-center '>
                  <WiThermometer size={40} /> {props.data.main.temp_max} {props.unit === 'standard' ? ` °K` : props.unit === 'metric' ? ` °C`
                    : ` °F`}
                </div>
              </div>
            </div>

            <div className='basis-[40%] flex flex-col justify-center items-center bg-black'>
              <span>Wind Speed</span>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <FaWind size={30} />{props.data.wind.speed} {props.unit === 'standard' ? ` meter/sec` : props.unit === 'metric' ? ` meter/sec`
                  : ` miles/hours`}
              </div>
            </div>
          </div>

          <div className='h-[15vh] md:h-[20vh] w-[100%] flex flex-row bg-gray-300 text-black'>
            <div className='basis-[30%] flex flex-col justify-center items-center'>
              <span>Humidity</span>
              <div className='flex flex-row justify-center items-center'>
                <WiHumidity size={30} /> {props.data.main.humidity}
              </div>
            </div>

            <div className='basis-[30%] flex flex-col justify-center items-center'>
              <span>Visibility</span>
              <div className='flex flex-row justify-center items-center'>
                <MdOutlineVisibility size={30} /> {props.data.visibility / 1000} Km
              </div>
            </div>


            <div className='basis-[40%] flex flex-col justify-center items-center'>
              <span>Pressure</span>
              <div className='flex flex-row justify-center items-center'>
                <WiBarometer size={30} /> {props.data.main.pressure} hPa
              </div>
            </div>



          </div>
        </div>
          :
          ''}
      </div>

    </>
  )
}

export default WeatherCard
