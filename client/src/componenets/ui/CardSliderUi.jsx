import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { Button } from '@mui/joy';

/* const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
]; */

export default function CardSliderUi({data}) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card key={item.id} orientation="horizontal" size="sm"  variant="outlined" sx={{display:"flex",justifyContent:"flex-start"}}>
          <AspectRatio ratio="1" sx={{ minWidth:250 ,width:400 }}>
            <img
              srcSet={`${item.image}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 10 ,display:'flex',flexDirection:'column' ,gap:"10px" }}>
            <Typography level="title-lg" sx={{fontSize:"30px",textTransform:"capitalize"}}>{item.title}</Typography>
            <Typography level="body-md" sx={{fontSize:"22px",textTransform:"capitalize"}}>{item.description}</Typography>
            <Typography level="body-lg" sx={{fontSize:"30px"}}>${item.price}</Typography>
            <Button size="lg" color="warning" sx={{backgroundColor:"orangered"}} >shop now</Button>
           
          </Box>
        </Card>
      ))}
    </Box>
  );
}