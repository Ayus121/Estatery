import React,{useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import mainData from '../data/data'
import DDMenu from './DDMenu'
import ItemCard from './ItemCard';


const FilterData = ({ location }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = useState('');
  const handleChange = (event) => {
		setValue(event.target.value);

	};
	
  const [date, setDate] = useState(mainData);
 const name = "Move in Date";

  const allDates = [...new Set(mainData.map((currElem)=>{
    return currElem.movein;
  }))
]

  const filterDate = (myDate)=>{
    const updateDate = mainData.filter((currDate)=>{
      return currDate.movein === myDate;
    })
    setDate(updateDate)
  }
 
  return (
    <>
      <div>
        <Box className='box' direction="row" sx={{ padding: '60px 80px' }}>
          <Grid className='main' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid className='main-item' mt={7} item xs={3}>
              <Item className='item' sx={{ fontWeight: 'bold' }}><Typography variant="h6">Location</Typography>{location}</Item>
            </Grid>
          </Grid>
         
        </Box>
      </div>
   
    </>
  )
}

export default FilterData
