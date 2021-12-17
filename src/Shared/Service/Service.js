import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from "react";

const Service = ({service}) => {
    return (
        <>
            <Grid xs={12} md={4}>
                <Card className="cardStyle">
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

            </Grid>
        </>
    );
}

export default Service;