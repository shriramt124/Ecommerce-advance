import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Cardui({product}) {
  return (
    <Card sx={{ width: 500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <button className='bg-yellow-500 p-3 text-xl rounded-md hover:bg-orange-500 text-white transition-all duration-300'>
                <Link to="/">Shop now</Link>
         </button>
      </CardActions>
    </Card>
  );
}
 