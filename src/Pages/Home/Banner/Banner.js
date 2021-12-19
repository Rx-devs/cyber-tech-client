import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from "react";
import BannerImg from "../../../images/Banner/banner.png";
const Banner = () => {
    return (
        <div>
            <Grid container sx={{ px:8, py:4}}>
                <Grid item xs={12} md={5}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', alignItems: 'flex-start' }}>
                        <Typography variant="h1" sx={{ mb: 3, fontSize: "55px", fontWeight: '700' }} gutterBottom component="div">
                            Powerful Protection Easy Recovery
                        </Typography>
                        <Typography sx={{ mb: 2, color: '#666666' }} variant="subtitle1" gutterBottom component="div">
                            Cybersecurity is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.
                        </Typography>
                        <Button variant="contained" sx={{backgroundColor:'#ed1d61'}}>Get Started Now</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{ p: 0 }}>
                        <img width="100%" src={BannerImg} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Banner;