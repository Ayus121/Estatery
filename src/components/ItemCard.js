import React from 'react'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeartIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BedIcon from '@mui/icons-material/KingBedOutlined';
import BathIcon from '@mui/icons-material/BathtubOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import './css/ItemCard.css'

const ItemCard = ({ item }) => {
  // console.log(item[0].price);
  return (
    
    <div className='main'>
      {item?.map((elem, index) => (
         <Card className='card' sx={{ width: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={elem.image}
            alt={elem.name}
          />
          <CardContent>
            <div style={{display:'flex',justifyContent:'space-between'}}>
          <Typography variant="h6" color="#9659f8">
              ${elem.price}/Month
            </Typography>
            <HeartIcon />
            </div>
            <Typography gutterBottom variant="h5" component="div">
              {elem.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {elem.address}
            </Typography>
          </CardContent>
          <CardContent  sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography variant="body2" color="text.secondary"><BedIcon style={{verticalAlign:'middle'}} />{elem.bed}</Typography>
            <Typography variant="body2" color="text.secondary"><BathIcon style={{verticalAlign:'middle'}}/>{elem.bathroom}</Typography>
            <Typography variant="body2" color="text.secondary"><HomeIcon style={{verticalAlign:'middle'}}/>{elem.size}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    
  )
}

export default ItemCard