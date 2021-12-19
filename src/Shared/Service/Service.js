import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from "react";
import { Link } from "react-router-dom";

const Service = ({service}) => {
	const { name, details, price, img, _id} = service;
    return (
            <Grid item xs={12} md={4}>
                <Card variant="outlined">
                    <CardContent>
                        <Box className="iconStyle">
                            <img width="30px" src={service.icon} alt="" />
                        </Box>
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            {details}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
						<Link style={{textDecoration:'none'}} to={`/purchaseProduct/${_id}`}>
                        <Button size="small" sx={{fontWeight:'600',color:'#ed1d61'}}>Read More</Button>
						</Link>
                    </CardActions>
                </Card>

            </Grid>
    );
}

export default Service;