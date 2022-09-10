import React,{useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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
	

//   const [value, setValue] = useState(dayjs('2022-09-10T21:11:54'));
  const [date, setDate] = useState(mainData);
 const name = "Move in Date";
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const allDates = [...new Set(mainData.map((currElem)=>{
    return currElem.movein;
  }))
]
// console.log(allDates);
  const filterDate = (myDate)=>{
    const updateDate = mainData.filter((currDate)=>{
      return currDate.movein === myDate;
    })
    setDate(updateDate)
  }
  // console.log(date);
  return (
    <>
      <div>
        <Box className='box' direction="row" sx={{ padding: '60px 80px' }}>
          <Grid className='main' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid className='main-item' mt={7} item xs={3}>
              <Item className='item' sx={{ fontWeight: 'bold' }}><Typography variant="h6">Location</Typography>{location}</Item>
            </Grid>
            {/* <Grid item xs={2}>
              <Item> */}
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Move In Date"
                      inputFormat="DD/MM/YYYY"
                      value={value}
                      onChange={handleChange}
                      onClickDay={(item)=>allDates(item)}
                      renderInput={(params) => <TextField  {...params} />}
                    />
                  </Stack>
                </LocalizationProvider> */}
                {/* <DDMenu allValues={allDates} filterItem={filterDate} item={name} value={setValue} /> */}
              {/* </Item>
            </Grid> */}
            {/* <Grid item xs={1}>
              <Item>xs</Item>
            </Grid> */}
          </Grid>
          {/* <Stack></Stack> */}
        </Box>
      </div>
      {/* <ItemCard item = {date} /> */}
    </>
  )
}

export default FilterData