import { Container, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from "react";
import BannerImg from "../../../images/Banner/banner.png";
const Banner = () => {
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center', p: 4 }}>
                            <Typography sx={{ mb: 2 }} variant="caption" display="block" gutterBottom>
                                World Class Cyber Security
                            </Typography>
                            <Typography sx={{ mb: 2 }} variant="h4" gutterBottom component="div">
                                Powerful Protection Easy Recovery
                            </Typography>
                            <Typography sx={{ mb: 2 }} variant="subtitle2" gutterBottom component="div">
                                Cybersecurity is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{p:4}}>
                            <img width="100%" src={BannerImg} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Banner;