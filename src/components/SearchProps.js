import React, { useState } from 'react';
import mainData from '../data/data'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ItemCard from './ItemCard'
import FilterData from './FilterData'
import './css/SearchProps.css'

const SearchProps = () => {
  const [location, setLocation] = useState('');
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(mainData);

  const handleChange = (event) => {
    setLocation(event.target.value);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const allValues = [...new Set(mainData.map((currElem)=>{
    return currElem.location;
  })),"All"
]

  const filterItem= (mylocation)=>{
    if(mylocation==="All"){
      setItem(mainData);
      return;
    }
    const updateItems = mainData.filter((currLocation)=>{
      return currLocation.location === mylocation;
    })
    
    setItem(updateItems);
  }
  // console.log(location);
  return (
    <>
      <div className='search-box'>
        <div className='search-heading'>
        <h1 className='p__opensans' style={{ fontSize: "35px", fontWeight: 600 }}>Search properties to rent</h1>
        </div>
        <div className='search-btn'>
          
          <FormControl sx={{ width: 200, height: 1 }}>
            <InputLabel id="demo-controlled-open-select-label">Location</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={location}
              label={location}
              onChange={handleChange}
            >
              {allValues.map((items,index)=>{
                return <MenuItem key={index} value={items} onClick={()=>filterItem(items)}>
                {items}
                </MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <FilterData location={location} filterItem={filterItem} />
        <ItemCard item={item} />
    </>
  )
}

export default SearchProps