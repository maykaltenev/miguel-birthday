import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import data from '../../data.js'
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    return (
        <>
            {
                data.map((item, i) => (
                    <Grid item xs={2} sm={4} md={4} key={i}>
                        <Card sx={{ maxWidth: 500 }}
                            elevate={6}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('../../images/ballons.jpg')}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.message}
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </>
    )
}
