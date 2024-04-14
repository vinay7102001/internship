import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './_weathertable.scss'
import { FetchCityData, FetchSearchData } from '../../Redux/DataFetch'
import Table from './Table'
import InfiniteScroll from 'react-infinite-scroll-component'
import { BsSearch } from "react-icons/bs";

const WeatherTable = () => {
  const [search, setSearch] = useState()
  const [isSearch, setIsSearch] = useState(false)
  const dispatch = useDispatch()

  const setSearchByKey = (e) => {
    if (e.key == 'Enter') {
      SearchCity()
    }
  }

  useEffect(() => {
    FetchCityData(dispatch)
  }, [])

  const fetchData = () => {
    FetchCityData(dispatch)
  }

  const SearchCity = () => {
    if (search === '') {
      setIsSearch(false)
    }
    else {
      FetchSearchData(search, dispatch)
      setIsSearch(true)
      setSearch('')
    }
  }


  const citydata = isSearch ? useSelector(state => state.Searchcityreducer.citydata)
    : useSelector(state => state.CitydataReducer.citydata)

  return (
    <>
      <div className='h-screen flex flex-col gap-2 justify-center items-center bg-[#105469]'>
        <div className='w-[80vw] md:w-[60vw] lg:w-[40vw] flex border-2 border-gray-700 bg-gray-200 rounded-full'>
          <input type='text' placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} onKeyPress={(e) => { setSearchByKey(e) }} className='min-w-[20px] basis-[88%] md:basis-[90%] focus:outline-none bg-transparent px-3 py-2' />
          <button className='basis-[12%] md:basis-[10%] flex justify-center items-center' onClick={SearchCity}><BsSearch /></button>
        </div>
        <div className='w-[100vw] md:w-[80vw] lg:w-[60vw] flex justify-center items-center'>
          <div className='max-h-[70vh] bg-[#012B39] table_container' id='table_container'>
            {isSearch ?
              <table id='table'>
                <tr>
                  <th>City</th>
                  <th>Country</th>
                  <th>Country Code</th>
                  <th>TimeZone</th>
                  <th>Coordinates</th>
                </tr>
                {citydata?.map((val, i) => {
                  return <Table key={i} data={val} />
                })}
              </table>
              :
              <InfiniteScroll
                dataLength={citydata?.length}
                next={fetchData}
                hasMore={true}
                // scrollThreshold='500px'
                loader={<h4>Loading...</h4>}
                scrollableTarget='table_container'
              >
                <table id='table'>
                  <tr>
                    <th>City</th>
                    <th>Country</th>
                    <th>Country Code</th>
                    <th>TimeZone</th>
                    <th>Coordinates</th>
                  </tr>
                  {citydata?.map((val, i) => {
                    return <Table key={i} data={val} />
                  })}
                </table>
              </InfiniteScroll>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherTable
