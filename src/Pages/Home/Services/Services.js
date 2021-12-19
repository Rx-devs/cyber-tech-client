import { Container, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../../redux/slices/serviceSlice";
import Service from "../../../Shared/Service/Service";
import './Services.css';

const Services = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services.services);

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);
    /* const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://young-castle-89002.herokuapp.com/services/')
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, []); */
    return (
        <div>
            <Container sx={{py:4}}>
                <Box sx={{ textAlign: 'center', p: 4 }}>
                    <Typography variant="h4" gutterBottom component="div">
                        We Offer Professional Security Solutions
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Providing the best services.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {
                        services.map(service => <Service
                            service={service}
                        ></Service>)
                    }
                    
                </Grid>
            </Container>
        </div>
    );
}

export default Services;




