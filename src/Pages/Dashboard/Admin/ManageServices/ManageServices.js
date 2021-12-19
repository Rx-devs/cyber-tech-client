import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';

const ManageServices = () => {
    const [services, setservices] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://young-castle-89002.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setservices(data))
        
    }, []);
    // table style
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            fontSize: 16,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <Box>
            <Typography sx={{ textAlign: 'left', my:2 }} variant="h5" component="div" gutterBottom>
                Manage All services
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'auto' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>service Image</StyledTableCell>
                            <StyledTableCell align="center">service Name</StyledTableCell>
                            <StyledTableCell align="center">service Price</StyledTableCell>
                            <StyledTableCell align="center">Manage service</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service) => (
                            <StyledTableRow key={service._id}>
                                <StyledTableCell component="th" scope="row">
                                    <img style={{width:'40px'}} src={service.img} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="center">{service.name}</StyledTableCell>
                                <StyledTableCell align="center">${service.price}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button variant="contained">Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Box>
    
    );
};

export default ManageServices;