import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { FC, useEffect, useState } from 'react';
import './App.scss';
import { ICheckApiResponse } from './assets/CheckApiResponseInterface';
import { Button } from './components/Button/Button';
import { InformationBox } from './components/InformationBox/InformationBox';
import { ListOfSearches } from './components/ListOfSearches/ListOfSeatches';
import { Map } from './components/Map/Map';
import { SearchBox } from './components/SearchBox/SearchBox';


const URLS = {
  checkUrl: `http://api.ipstack.com/check?access_key=${process.env.REACT_APP_API_KEY}`
}
function App() {
  const [userLocation, setUserLocation] = useState<ICheckApiResponse | null>(null)
  // Landing on this application should display user IP with it’s location on the map
  useEffect(() => {
    axios.get<ICheckApiResponse>(URLS.checkUrl)
      .then((response: AxiosResponse<ICheckApiResponse>) => {
        const { data } = response
        setUserLocation(data)
      })
      .catch((error: AxiosError) => { console.log(error.message) })
  }, [])
  return (
    <div className="App">
      <GridItem gridStyle='listOfSearches' children={<ListOfSearches />} />
      <GridItem gridStyle='userMapContainer' children={[<Map latitude={userLocation?.latitude} longitude={userLocation?.longitude} />, <InformationBox userIp={userLocation?.ip} />]} />
      <GridItem gridStyle='searchBox' children={[<SearchBox />, <Button />]} />
      <GridItem gridStyle='lastMapContainer' children={[<Map />, <InformationBox />]} />
    </div>
  );
}


interface IGridProps {
  gridStyle?: string
  children?: React.ReactNode
}


const GridItem: FC<IGridProps> = ({ gridStyle, children }: IGridProps) => {
  return <div className={gridStyle}>
    {children}
  </div>
}

export default App;
