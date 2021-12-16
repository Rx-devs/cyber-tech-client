import { Container, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, []);
    return (
        <div>
            <Container>
                <Box sx={{ textAlign: 'center', p: 4 }}>
                    <Typography variant="h5" gutterBottom component="div">
                        We Offer Professional Security Solutions
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                </Box>
                <Grid container>
                    {
                        services.map(service => <Grid
                            service={service}
                            item xs={12} md={4}>
                            <Card className="cardStyle" sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Box className="iconStyle">
                                        <img width="30px" src={service.icon} alt="" />
                                    </Box>
                                    <Typography variant="h6" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {service.details}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Read More</Button>
                                </CardActions>
                            </Card>

                        </Grid>)
                    }
                    
                </Grid>
            </Container>
        </div>
    );
}

export default Services;




