import React, { FC } from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { InformationBox } from './components/InformationBox/InformationBox';
import { ListOfSearches } from './components/ListOfSearches/ListOfSeatches';
import { Map } from './components/Map/Map';
import { SearchBox } from './components/SearchBox/SearchBox';

function App() {
  return (
    <div className="App">
      <GridItem gridStyle='listOfSearches' children={<ListOfSearches />} />
      <GridItem gridStyle='userMapContainer' children={[<Map />, <InformationBox />]} />
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
