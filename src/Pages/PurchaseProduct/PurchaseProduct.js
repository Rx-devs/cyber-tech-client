import { Container, Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";

const Purchaseservice = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState({});
    const [purchaseInfo, setPurchaseInfo] = useState({});
    
    // load service
    useEffect(() => {
        fetch(`https://young-castle-89002.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
        
    }, [serviceId]);
    
    // handle input fields
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }
    const handlePurchaseSubmit = (e) => {
        // collect data
        const buyservice = {
            ...purchaseInfo,
            email: user.email,
            serviceName: service.name,
            servicePrice: service.price
        }
        // send to the server
        fetch('https://young-castle-89002.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(buyservice)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('succesfully purchased')
                }
        })
        e.preventDefault();
    }
    return (
        <>
            <Navbar></Navbar>
            <Container>
            <Grid container spacing={2} sx={{py:5}}>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="auto"
                            image={service.img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {service.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {service.details}
                            </Typography>
                        </CardContent>
                            <CardActions>
                            <Typography sx={{ml:1}} gutterBottom variant="h5" component="div">
                                Price: ${service.price}
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} style={{border:'2px solid #ddd', padding:'20px 0',borderRadius:'10px'}}>
                    <form onSubmit={handlePurchaseSubmit} style={{width:'80%',margin:'0 auto'}}>
                    <Typography sx={{textAlign:'center',mb:5}} variant="h4" gutterBottom component="div">
                    Fill The Form
      </Typography>
                    <Typography variant="body" gutterBottom component="div">
                    service Name: {service.name}
      </Typography>
                        <TextField sx={{ width: '100%', mb: 2 }}
                            required
                            id="outlined-basic" variant="outlined"
                            label="Name"
                            name="name"
                            defaultValue=""
                            onBlur={handleOnBlur}
                        />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            label="Address"
                            name="address"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            required
                            label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            id="outlined-basic" variant="outlined"
                            InputProps={{
                                readOnly: true,
                              }}
                        />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            label="Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <TextField sx={{ width: '100%', mb: 2 }}
                            label="Country"
                            name="country"
                            onBlur={handleOnBlur}
                            defaultValue=""
                            id="outlined-basic" variant="outlined"
                        />
                        <Button size="large" type="submit" variant="contained">
                            Book Order
                        </Button>
                    </form>
                </Grid>
            </Grid>
            </Container>
        </>
    );
};

export default Purchaseservice;
