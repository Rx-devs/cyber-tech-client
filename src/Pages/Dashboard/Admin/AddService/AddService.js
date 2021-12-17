import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added');
                    reset();
            }
        })
    };

    return (
        <div>
            <Grid container >
                <Grid item xs={12} md={5} sx={{mx:'auto'}}>
                    <Card sx={{ p: 3}} variant="outlined">
                        <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h5" component="div" gutterBottom>
                            Add a New Service
                        </Typography>
                
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <input  placeholder="Service Image Url" {...register("img",{ required: true })} />
                            <input  placeholder="Service Name" {...register("name", { required: true })} />
                            <textarea  placeholder="Service Description" {...register("description",{ required: true })} />
                            <input  placeholder="Service Price" type="number" {...register("price",{ required: true })} />
                            <input  type="submit" />
                        </form>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default AddService;

