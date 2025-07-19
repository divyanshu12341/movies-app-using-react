import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'
export default function MovieCard({ movie }) {
  if (!movie) {
    return null; // Or a loading skeleton
  }

  const { Title, Year, Poster } = movie;

  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        component="img"
        sx={{ height: 450 }}
        image={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400x500.png?text=No+Image'}
        alt={Title} // Use the Title for the alt text for accessibility
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ height: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
