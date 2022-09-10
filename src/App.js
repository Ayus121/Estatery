import React from 'react'
import Navbar from './components/Navbar'
import SearchProps from './components/SearchProps';
// import ItemCard from './components/ItemCard';
// import FilterData from './components/FilterData';

import './App.css';

const App = () => {
  return (
	<>
	<Navbar />
	<SearchProps/>
	{/* <FilterData />
	<ItemCard /> */}
	</>
  )
}

export default App